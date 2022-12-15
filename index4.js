// No cambies los nombres de las funciones.
// Para validar ejecuta el siguiente comando en la terminal:
// test archivo4.test.js
// Devuelve el primer elemento de un array (pasado por parámetro)
// Tu código:
function devolverPrimerElemento(array) {
    return firstElement = array[0];
}


// Devuelve el largo de un array
    // Tu código:
function obtenerLargoDelArray(array) {
    return array.length;
}
// "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1 y devuelve el array
    // Tu código:

function incrementarPorUno(array) {
    return array.map(function(e){
        return e + 1
    })
}

// Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:

function agregarItemAlComienzoDelArray(array, elemento) {
    let arr = [elemento]
    for (let i = 0; i < array.length; i++){
        arr[i+1] = array[i]
    }
    return arr
}


// Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:

function arrayContiene(array, elemento) {
    for (let i = 0; i < array.length; i++){
        if (array [i] === elemento) return true
    }
    return false
}

// "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:

function agregarNumeros(numeros) {
    var suma = 0;
    for(var i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma;
}

 // Usa la palabra clave `arguments` para multiplicar todos los argumentos ydevolver el producto
    // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplementedevuélvelo
    // Escribe tu código aquí:

function multiplicarArgumentos() {
    if(arguments.length < 1) return 0;
    var total = 1;
    for(var i = 0; i < arguments.length; i++) {
        total = total * arguments[i];
    }
    return total;
}


//Realiza una función que retorne la cantidad de los elementos del arreglo cuyovalor es mayor a 18.
    //Escribe tu código aquí

function cuentoElementos(arreglo){
    let contador = 0;
    for (let i = 0; i < arreglo.length ; i++) {
        if(arreglo[i] > 19){
        contador++
        }
    }
    return contador
}


//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí

function todosIguales(arreglo) {
    for (var i =0 ; i < arreglo.length - 1; i++) {
        if(arreglo[i] !== arreglo[i+1]){
          return false
        }
    }
    return true
}


//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:

function mesesDelAño(array) {
    var nuevoArray = [];
    for(let i= 0; i<array.length; i++) {
        if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
        nuevoArray.push(array[i]);
        }
    }
    if(nuevoArray.length < 3) {
        return "No se encontraron los meses pedidos";
    }
    else {
        return nuevoArray;
    }
}


 //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:

function mayorACien(array) {
    var nuevoArray = [];
    for(let i= 0; i < array.length; i++) {
        if(array[i] > 100) {
        nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}


 //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    
function breakStatement(numero) {
    var array = [];
    var suma = numero;
    for(var i= 0; i<10; i++) {
        suma = suma + 2;
        if(suma === i) break;
        else {
        array.push(suma);
        }
    }
    if(i < 10) {
        return 'Se interrumpió la ejecución';
    }
    else {
        return array;
    }
}
// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
    devolverPrimerElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlComienzoDelArray,
    arrayContiene,
    agregarNumeros,
    multiplicarArgumentos,
    cuentoElementos,
    todosIguales,
    mesesDelAño,
    mayorACien,
    breakStatement,
};