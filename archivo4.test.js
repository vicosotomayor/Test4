const{
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
    
} = require("./index4.js");


describe('devolverPrimerElemento(array)', function () {
    it("Deberia devolver el primer elemento del array", function(){
        expect(devolverPrimerElemento([3,4,7,8])).toBe(3);
    })
})


describe('obtenerLargoDelArray(array)', function () {
    it("Deberia devolver el largo del array", function(){
        expect(obtenerLargoDelArray([6,7,8,9])).toBe(4);
    })
})


describe('incrementarPorUno(array)', function () {
    it("Deberia de agregar en uno a los elementos del array", function(){
        expect(incrementarPorUno([1,2,3,4])).toEqual([2,3,4,5]);
    })
})


describe('agregarItemAlComienzoDelArray(array, elemento)', function () {
    it("Deberia de añadir el elemento al inicio del array", function(){
        expect(agregarItemAlComienzoDelArray([4,4,8,6], 9)).toEqual([9,4,4,8,6]);
    })
})


describe('arrayContiene(array, elemento)', function () {
    it("Deberia devolver true si el elemento esta dentro del array", function(){
        expect(arrayContiene(["hola",5,6,"Hello"], "Hello")).toBe(true);
    })
})


describe('agregarNumeros(numeros)', function() {
    it('Debe sumar todos los números de la matriz y devolver la suma', function() {
      expect(agregarNumeros([20, 20, 26])).toBe(66);
      expect(agregarNumeros([30, 150])).toBe(180);
      expect(agregarNumeros([0])).toBe(0);
    });
});
  

describe('multiplicarArgumentos()', function () {
    it('Debe devolver el producto de todos los argumentos', function () {
      const producto = multiplicarArgumentos(6, 6);
      const producto2 = multiplicarArgumentos();
      const producto3 = multiplicarArgumentos(4, 4, 4, 4);
      const producto4 = multiplicarArgumentos(1);
      const producto5 = multiplicarArgumentos(20, 0, 20);
      expect(producto).toBe(36);
      expect(producto2).toBe(0);
      expect(producto3).toBe(256);
      expect(producto4).toBe(1);
      expect(producto5).toBe(0);
    });
});
  

describe('cuentoElementos(arreglo)', function() {
    it('Debe devolver un contador con el total de números mayores que 18', function() {
      expect(cuentoElementos([11, 11, 19, 22])).toBe(1);
      expect(cuentoElementos([67, 50, 80, 3, 3, 7])).toBe(3);
    });
});
  

describe('todosIguales(arreglo)', function() {
    it('Debe devolver verdadero si todos los elementos de la matriz son iguales y falso de lo contrario', function() {
      expect(todosIguales([30, 30, 30, 30 ])).toBe(true);
      expect(todosIguales([97, 100, 190, 9])).toBe(false);
      expect(todosIguales([150, 150, 150, 150])).toBe(true);
    });
});
  

describe('mesesDelAño(array)', function() {
    it('Debe devolver una nueva matriz con los meses solicitados', function() {
      var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
      var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
      expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
      expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
    });
});
  

describe('mayorACien(array)', function() {
    it('Debería devolver una matriz con valores mayores que 100', function() {
      var integers = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22];
      expect(mayorACien(integers)).toEqual([200, 120, 160, 148]);
    });
});
  

describe('breakStatement(numero)', function() {
    it('Debe devolver una matriz con los valores resultantes de sumar 2 en cada iteración', function() {
      expect(breakStatement(60)).toEqual([62, 64, 66, 68, 70, 72, 74, 76, 78, 80]);
    });
    it('Debe detener la ejecución si el valor de la suma y el número de iteración coinciden', function() {
      expect(breakStatement(-6)).toEqual('Se interrumpió la ejecución');
    });
});