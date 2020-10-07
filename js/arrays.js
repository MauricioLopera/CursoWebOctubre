//Almacenar informacion en cada casilla de nuestro array
let array = [];

console.log(typeof(array)); //tipo de dato objeto

//asinar valores a mi array
array = ['Mauricio','Lopera',30,true,['Peras','Manzanas']];
console.log(array);

//agregar un item al array al final
array.push('Mazzaro');
console.log(array);

//eliminar un elemento del array
array.pop();
console.log(array);

//reordena el array al reverso del original
array.reverse();
console.log(array);

//elimina el primer elemento del array
array.shift();
console.log(array);

//crea un array nuevo a partir de una posicion de inicio y final definida
let array2 = array.slice(1,3);
let acumulador = '';
console.log(array2);

//iteracion de array con FOR
//contadores i = i + 1, i += 1, i ++
//acumulador
for(i = 0; i < array.length; i = i + 1){
    console.log(array[i]);
    acumulador = acumulador + ':' + array[i];
}

console.log(acumulador);

//metodo de texto para convertir en array
let textoSplit = acumulador.split(':');
console.log(textoSplit);
