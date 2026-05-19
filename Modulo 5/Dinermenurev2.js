//Constructor menu
class Menu {
    constructor(mainlunch, sideslunch, mainmorning, sidesmorning,extras,desserts,textos) {
        this.mainlunch = mainlunch;
        this.sideslunch = sideslunch;
        this.mainmorning = mainmorning;
        this.sidesmorning = sidesmorning;
        this.extras = extras;
        this.desserts = desserts;
        this.textos = textos;
    }
    // devuelve la hora en una variable de 1 a 3 mañana, tarde y noche
    definirhora() {
        while (this.tokene == 0){
            // Se considera de mañana de 4 a 12:59, tarde de 13 a 19:59 y noche de 20 a 3:59 
            var timeInputuser = prompt("Bienvenido, siente. \n Por favor, indique la hora en formato 24h y con los minutos separados por ':' ");
            if (timeInputuser == null){
                alert("Si no quieres meter la hora no se puede seguir! \nEl último menú aparecerá, estamos trabajando en ello");
                return
            }
            var horas = timeInputuser[0] + timeInputuser[1];
            var minutos = timeInputuser[3] + timeInputuser[4];
            if (timeInputuser.length != 5 || timeInputuser[2] != ":" || 
                Number(horas) > 23 || 
                Number(minutos) > 59 ){
                alert("El formato introducido no es correcto, pruebe de nuevo. \nEl formato debe ser HH:MM")
            } else if (Number(horas) < 13 &&
                       Number(horas) >= 4  ) {
                alert("Estamos en horario de mañana");
                this.tokene = 1;
            } else if (Number(horas) >= 13 &&
                       Number(horas) < 20 ) {
                alert("Estamos en horario de tarde");
                this.tokene = 2;
            } else {
                alert("Estamos en horario de noche");
                this.tokene = 3;
            } 
        }
        return this.tokene;
    } 
    // genera un bloque de texto con el menu
    textomenu = "";
    menucrear(main,side,postres,hora) {
        this.textomenu = "Menú. \n Los principales son los siguientes: \n"
        for (const key of Object.keys(main)){
            this.textomenu += "\n " + key ;
        }
        this.textomenu = this.textomenu + ". \n\n Los segundos son los siguientes: \n";
        for (const key of Object.keys(side)){
            this.textomenu += "\n " + key ;
        }
        if (hora != 1){
            this.textomenu = this.textomenu + ". \n\n Los postres son los siguientes: \n";
            for (const key of Object.keys(postres)){
                this.textomenu += "\n " + key ;
            }
        }
        return this.textomenu;
    }
    // genera un bloque de texto de selección de plato con el precio.
    textoseleccion ="";
    menuseleccion(menu,hora,orden) {
        this.textoseleccion = "Por favor, seleccione un " + orden + " de la lista: "
       
        for (const [key,value] of Object.entries(menu)){
            let precio;
            if ( hora == 3) {
                precio = value + 1;  
            } else { 
                precio = value;
            }
            this.textoseleccion +="\n" + key + " -> " + precio + "€";
        }
        return this.textoseleccion;
    }
    // genera un texto aleatorio
    textoaleatorio(){
        alert(this.textos[Math.floor(Math.random()* this.textos.length)]);
    }   
    // hace una petición al usuario con el plato
    llamadaplato(menu,token,texto){
        let plato = prompt(this.menuseleccion(menu,token,texto));
        if (plato == null){
            if (confirm(`Seguro que no quiere ${texto}`)){
                return [0,0];
            } 
            return;
        } 
        plato = plato.toUpperCase();
        if (plato in menu){
            this.textoaleatorio(); 
            if (token == 3) {
                return [plato, menu[plato] + 1];
            } else {
                return [plato, menu[plato]];
            }
        } else{
            alert("No se reconoce ese plato, por favor, elija de nuevo.");
            return;
        }
    }

    menuprint() {
        //Postres solo tienen los menús de tarde y noche
        let compra = [];
        this.tokene = 0;
        this.definirhora();
        let plato = "";
        // Se crea el menú
        if (this.tokene != 1){
            this.menucrear(this.mainlunch,this.sideslunch,this.desserts,this.tokene);
        } else {
            this.menucrear(this.mainmorning,this.sidesmorning,this.desserts,this.tokene);
        }
        // Imprimo menu
        alert(this.textomenu);
        // Llamada primeros
        while (true) {
            if (this.tokene == 1){
                compra[0] = this.llamadaplato(this.mainmorning,this.tokene,"primero");
            } 
            if (this.tokene == 2){
                compra[0] = this.llamadaplato(this.mainlunch,this.tokene,"primero");
            } 
            if (this.tokene == 3){
                compra[0] = this.llamadaplato(this.mainlunch,this.tokene,"primero");
            } 
            if (compra[0] != undefined){
                break;
            }
        };
        // LLamada segundos
        while (true) {
            if (this.tokene == 1){
                compra[1] = this.llamadaplato(this.sidesmorning,this.tokene,"segundo");
            } 
            if (this.tokene == 2){
               compra[1] = this.llamadaplato(this.sideslunch,this.tokene,"segundo");
            } 
            if (this.tokene == 3){
                compra[1] = this.llamadaplato(this.sideslunch,this.tokene,"segundo");
            } 
            if (compra[1] != undefined){
                break;
            }
        };
            // LLamada postres
        while (true) {
           if (this.tokene == 1){
                compra[2] = [0,0];
            }
            if (this.tokene == 2){
                compra[2] = this.llamadaplato(this.desserts,this.tokene,"postre");
            } 
            if (this.tokene == 3){
                compra[2] = this.llamadaplato(this.desserts,this.tokene,"postre");
            } 
            if (compra[2] != undefined){
                break;
            }
        };
        // Extras
        while (true){
            if (confirm("¿Desea algún extra?")){
                compra[3] = this.llamadaplato(this.extras,this.tokene,"extra");
            } else { 
                compra[3] = [0,0];
            };
            if (compra[3] != undefined){
                break;
            }
        }
        //Checkout
        let textofactura = "Perfecto. La factura total es la siguiente: \n";
        let totalfact = 0;
        for (let i = 0; i < compra.length; i++){
            if (compra[i][0] != 0){
            textofactura += compra[i][0] + " -> " + compra[i][1] + "€\n";
            totalfact += compra[i][1];
            }
        }
        textofactura += "Tu total es de: \n" + totalfact + "€"
        alert(textofactura);
        console.log(compra);
        return [compra,totalfact];
    }
}    

// Datos menús
const sidedisheslunch = {
    "FILETE": 12.2,
    "PESCADO": 14,
    "SOPA": 9,
}

const  maindisheslunch= {
    "PATATAS" : 5,
    "MENESTRA" : 4,
    "ENSALADA" : 8,
}
const desserts ={
    "FLAN" : 3,
    "FRUTA" : 1.5,
    "QUESILLO" : 2
}

const morningmainmenu = {
    "TOSTADA CON JAMON" : 5,
    "GALLETAS MARIA" : 3,
    "CEREALES" : 4.2 ,
}

const morningsidemenu = {
    "ZUMO DE NARANJA": 4,
    "TAZON DE LECHE" : 2,
    "VASO DE LECHE" : 1
}

const extras = {
    "SALSAS" : 2,
    "PATATAS FRITAS" : 4,
    "ENSALADA PEQUEÑA" : 3,
}

const textos = [
    "Buena elección",
    "Uff eso no lo recomiendo pero usted mismo",
    "No le eche sal",
    "Maravillosa elección caballero",
    "Todo en la playa sabe mejor!",
    "Eso va derecho a la grasa de la tripa",
    "Es mi plato favorito",
    "Ese plato lo preparo yo en casa y no me queda tan rico",
    "Genial!"
]

// Creación menús
var lunchmenu = new Menu(maindisheslunch,sidedisheslunch,morningmainmenu,morningsidemenu,extras,desserts,textos);

lunchmenu.menuprint()
