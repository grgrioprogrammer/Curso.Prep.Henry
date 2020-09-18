// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
    let miArray = ["hola", 23, true, function(){ console.log("soy Henry")}];
    var firstElem = miArray[0];
    console.log(firstElem);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let miArray = ["henry", 53, false, function(){ console.log("soy Henry")}];
    var lastElemento = miArray[miArray.length -1];
    console.log(lastElemento)

}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let miArray = [2,3,4,5,6,3,5,7,3,6];
  largeArray = miArray.length
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let miArray = [1,2,3,4,5,6]
  for(var i = 0; i < miArray.length; i++) {
    sumaArray = miArray[i] + 1
    return sumaArray
  }
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let miArray = ["hola", 5, true]
  miArray.push("henry")
  console.log(miArray)
  
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let miArray = ["hola", 5, true]
  miArray.unshift("henry")
  console.log(miArray)
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  miArray = ["Hello","im", "Henry!"]
  frase = (miArray[0] + " " + miArray[1] + " " + miArray[miArray.length -1])
  console.log(frase)
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    array = []
    for(i = 0; i < miArray.length; i++) {
      if (miArray[i] === elemento) {
        return true
      } else {
        return false
      }
    }
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  numeros = [2,3,7,4,6,9,7,3];
  acc = 0
  var sumaReduce = numeros.reduce(function(acc, elem) {
    return acc + elem 
  }
  )}
agregarNumeros()


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest = [2,6,5,4,3]
  for(i = 0; i < resultadosTest.length; i++) {
    promedio = resultadosTest / resultadosTest.length
    return promedio
  }
}
resultadosTest()

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
