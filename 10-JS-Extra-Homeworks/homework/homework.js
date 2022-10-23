// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const matriz = [];
  for (const key in objeto) {
    matriz.push([key, objeto[key]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var numeroDeCaracteres = {};
  for (let index = 0; index < string.length; index++) {
    if(!numeroDeCaracteres.hasOwnProperty(string[index])) {
      var caracter = string[index];
      var contador = 0;
      for (let j = 0; j < string.length; j++) {
        if (caracter === string[j]) {
          contador++;
        }
      }
      numeroDeCaracteres[caracter] = contador;
    }
  }
  return numeroDeCaracteres;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas = "";
  var minusculas = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayusculas += s[i];
    } else {
      minusculas += s[i];
    }
  }
  var ordenada = "";
  ordenada += mayusculas;
  ordenada += minusculas;
  return ordenada;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var mirrored = str.split(" ").map(function (item) {
    return item.split('').reverse().join('');
  }).join(" ");
  return mirrored;
} 
// Henry -> yenrH -> yrneH
// i = 0, j = 1, accedo a 4 -> i = 1, j = 2, accedo a 3, i = 2, j = 3, accedo a 2

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //1221
  // i = 0, j = 1, comparo 1 y 1 accedo a 3-> i = 1, j = 2, comparo 2 y 2 accedo a 2 -> i = 2, j = 3, accedo a 2
  var cadenaNumero = numero + "";
  if(cadenaNumero.split('').reverse().join('') === cadenaNumero) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  //abecedario -> becedario -> ecedario 
  var nuevaCadena = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
      nuevaCadena += cadena[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  // uno  si  nosotros a 
  // i = 0, j = 1
  // si uno nosotros a 
  // i = 0 , j = 1
  // si uno nosotros a 
  // i = 0, j = 2
  // si uno nosotros a
  // i = 0 , j = 3
  // a uno nosotros si
  // i = 0, j = 1
  // a uno nosotros si
  // i = 0, j = 2
  // a uno nosotros si
  // i = 0, j = 3 
  // a uno nosotros si
  // i = 1 , j = 2
  // a uno nosotros si
  // i = 1, j = 3
  // a si nosotros uno
  // i = 0, j = 1
  // a si nosotros uno
  // i = 0, j = 2
  // a si nosotros uno
  // i = 0, j = 3
  // a si nosotros uno
  // i = 1, j = 2
  // a si nosotros uno
  // i = 1, j = 3
  // a si nosotros uno
  // a = 2, j = 3
  // a si uno nosotros
  // i = 0, j = 1
  // a si uno nosotros
  // i = 0, j = 2
  // a si uno nosotros
  // i = 0, j = 3
  // a si uno nosotros
  // i = 1, j = 2
  // a si uno nosotros
  // i = 1, j = 3
  // a si uno nosotros
  // i = 2, j = 3
  // a si uno nosotros
  for (let i = 0; i < arr.length; i ++ ){
    var temp = arr[i]
    var j = i - 1
    while (j >= 0 && temp.length < arr[j].length) {
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1] = temp
}
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  const interseccion = [];
  arreglo1.forEach(element => {
    if(arreglo2.indexOf(element) !== -1) {
      interseccion.push(element);
    }
  });
  return interseccion;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
