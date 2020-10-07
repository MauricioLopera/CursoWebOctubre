// //tipos de datos
// Mauricio //Texto o String
// 30 //Numero
// true //Booleano
// [Mauricio,30,true] //array o arreglo
// // {//objeto
// //     'Nombre': Mauricio,
// //     'Edad': 30
// // }

//declaracion de variables
var name;
let apellido;
//const edad = 30;
let anioActual, anioNacimiento, edad;
let valorTrim = ' Mi Texto ';

//asignacion de variables
name = 'Mauricio';
apellido = 'Lopera';
anioActual = 2020;
anioNacimiento = 1990;

//Logica de negocio
edad = anioActual - anioNacimiento;

//Aplicamos peso aritmetico
let resultado = 5 * (1 + 30);
let texto = name + ' ' + apellido + ' tiene ' + edad + ' años';
let posicion = texto.indexOf("L",10);

//la impresion del resultado
console.log(texto.length);
console.log(texto.search('Lop'));
console.log(posicion);
console.log(texto.slice(9,12));
console.log(texto.split(' '));
console.log(texto.replace('30', '31'));
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(valorTrim.trim());

//Operadores matematicos
//Suma +
//Resta -
//Multiplicacion *
//Division /
//Elevado al cuadro ^2

