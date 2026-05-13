//Constructor menu
class Menu {
    constructor(main, sides) {
        this.main = main;
        this.sides = sides;
    }
    menuprint() {
        console.log("Bienvenido, puede elegir un plato principal y dos guarniciones sin inquirir en coste extra.");
        console.log("Platos principales:"); 
        for (const key of Object.keys(this.main)) {
            console.log(key)
        }
        console.log("Guarniciones:"); 
        for (const key of Object.keys(this.sides)) {
            console.log(key)
        }
    }
    menuselectmain() {
        const userInputmain = prompt("Seleccione un entrante :");
        if (userInputmain == null){
            console.log("No ha elegido nada de ")
        }
        const userInputsideprimera = prompt("Seleccione la primera guarnicion :");
        const userInputsidesegunda = prompt("Seleccione la segunda guarnicion :");
    }
}

// Datos menús
var maindisheslunch = {
    filete: 12.2,
    pescado: 14,
    sopa: 9,
    judias: 10,
    paella: 13,
    pizza: 10
}

var sidedisheslunch = {
    patatas : 5,
    menestra : 4,
    ensalada : 8,
    tomate : 4,
    jamon: 12, 
    queso : 9
}
// Creación menús
var lunchmenu = new Menu(maindisheslunch,sidedisheslunch);

lunchmenu.menuprint()
lunchmenu.menuselectmain()
