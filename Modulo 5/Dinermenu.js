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
    definirhora() {
        while (this.tokene == 0){
            // Se considera de mañana de 4 a 12:59, tarde de 13 a 19:59 y noche de 20 a 3:59 
            var timeInputuser = prompt("Bienvenido, siente. \n Por favor, indique la hora en formato 24h y con los minutos separados por ':' ");
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
    textoseleccion ="";
    menuseleccion(menu,hora,orden) {
        this.textoseleccion = "Por favor, seleccione un " + orden + " de la lista: "
       
        for (const [key,value] of Object.entries(menu)){
            let precio;
            if ( hora ===3) {
                precio = value + 1;  
            } else { 
                precio = value;
            }
            this.textoseleccion +="\n" + key + " -> " + precio + "€";
        }
        return this.textoseleccion;
    }
    
    menuprint() {
        //Postres solo tienen los menús de tarde y noche
        let compra = [];
        let cuenta = [];
        this.tokene = 0;
        this.definirhora();
        this.testigo = 0;
        if (this.tokene != 1){
            this.menucrear(this.mainlunch,this.sideslunch,this.desserts,this.tokene);
        } else {
            this.menucrear(this.mainmorning,this.sidesmorning,this.desserts,this.tokene);
        }

        alert(this.textomenu);
        // Llamada primeros
        while (this.testigo == 0) {
            if (this.tokene == 1){
                compra[0] = prompt(this.menuseleccion(this.mainmorning,this.tokene,"primero"));
                if (compra[0] in this.mainmorning) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[0] = this.mainmorning[compra[0]];
                    this.testigo = 1;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
            if (this.tokene == 2){
                compra[0] = prompt(this.menuseleccion(this.mainlunch,this.tokene,"primero"));
                if (compra[0] in this.mainlunch) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]);
                    cuenta[0] = this.mainlunch[compra[0]];
                    this.testigo = 1;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
            if (this.tokene == 3){
                compra[0] = prompt(this.menuseleccion(this.mainlunch,this.tokene,"primero"));
                if (compra[0] in this.mainlunch) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]);
                    cuenta[0] = this.mainlunch[compra[0]] + 1;
                    this.testigo = 1;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
        };
        // LLamada segundos
        while (this.testigo == 1) {
            if (this.tokene == 1){
                compra[1] = prompt(this.menuseleccion(this.sidesmorning,this.tokene,"segundo"));
                if (compra[1] in this.sidesmorning) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[1] = this.sidesmorning[compra[1]];
                    this.testigo = 2;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
            if (this.tokene == 2){
                compra[1] = prompt(this.menuseleccion(this.sideslunch,this.tokene,"segundo"));
                if (compra[1] in this.sideslunch) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[1] = this.sideslunch[compra[1]];
                    this.testigo = 2;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
            if (this.tokene == 3){
                compra[1] = prompt(this.menuseleccion(this.sideslunch,this.tokene,"segundo"));
                if (compra[1] in this.sideslunch) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[1] = this.sideslunch[compra[1]] +1;
                    this.testigo = 2;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
        };
            // LLamada postres
        while (this.testigo == 2) {
           if (this.tokene == 1){
                compra[2] = 0;
                cuenta[2] = 0;
                this.testigo = 3;
            }
            if (this.tokene == 2){
                compra[2] = prompt(this.menuseleccion(this.desserts,this.tokene,"postre"));
                if (compra[2] in this.desserts) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]);
                    cuenta[2] = this.desserts[compra[2]];
                    this.testigo = 3;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
            if (this.tokene == 3){
                compra[2] = prompt(this.menuseleccion(this.desserts,this.tokene,"postre"));
                if (compra[2] in this.desserts) {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[2] =  this.desserts[compra[2]] + 1; 
                    this.testigo = 3;
                }   else {
                    alert("No se reconoce ese plato, por favor, elija de nuevo.")
                }
            } 
        };
        // Extras
        while (this.testigo == 3){
            if (confirm("¿Desea algún extra?")){
                compra[3] = prompt(this.menuseleccion(this.extras,this.tokene,"extra"))
                if (compra[3] == null || !(compra[3] in this.extras)){
                    alert("No encaja con ninguno de los extras. Puede presionar 'Cancelar' para no elegir nada.")
                } else {
                    alert(this.textos[Math.floor(Math.random()* this.textos.length)]); 
                    cuenta[3] = this.extras[compra[3]];
                    this.testigo = 4;
                }
            } else { 
                this.testigo = 4;
                cuenta[3] = 0;
                compra[3] = 0;
            };
        }
        //Checkout
        if (this.testigo == 4){
        let textofactura = "Perfecto. La factura total es la siguiente: \n";
        for (let i = 0; i < compra.length; i++){
            if (compra[i] != 0){
            textofactura += compra[i] + " -> " + cuenta[i] + "€\n";
            }
        }
        let totalfact = cuenta.reduce((total, sumando) => total + sumando);
        textofactura += "Tu total es de: \n" + totalfact + "€"
        alert(textofactura);
        console.log(compra);
        console.log(cuenta);
        } return {compra,cuenta};
    }
}    

// Datos menús
const sidedisheslunch = {
    "filete": 12.2,
    "pescado": 14,
    "sopa": 9,
}

const  maindisheslunch= {
    "patatas" : 5,
    "menestra" : 4,
    "ensalada" : 8,
}
const desserts ={
    "flan" : 3,
    "fruta" : 1.5,
    "quesillo" : 2
}

const morningmainmenu = {
    "tostada con jamon" : 5,
    "galletas maría" : 3,
    "cereales" : 4.2 ,
}

const morningsidemenu = {
    "zumo de naranja": 4,
    "tazon de leche" : 2,
    "vaso de leche" : 1
}

const extras = {
    "salsas" : 2,
    "patatas fritas" : 4,
    "ensalada pequeña" : 3,
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
