
// Se añade un retorno extra en la salida para la posiblidad de 50 
// ya que en el ejercicio ese número queda colgando con las condiciones dadas.

function sumaParMultiyComp (arg1,arg2,arg3,arg4) {
    comparador = 50;
    resultado = (arg1+arg2)*(arg3+arg4);
    if (resultado > comparador) {
        return console.log("¡El número es mayor que 50!");
    } else if (resultado < comparador) {
        return console.log("¡El número es menor que 50!");
    } else {
        return console.log("¡El número es 50!");
    }
}

