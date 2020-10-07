//Ciclos FOR, se ejecutan hasta alcanzar un numero maximo
//Valriables
let cantidad, nota, suma, promedio;
let calificaciones = [];
let aux = 0;

//solicitar los datos
cantidad = Number(prompt('Por favor ingresa la cantidad de notas'));

for(i = 1; i <= cantidad; i++){
    nota = Number(prompt('Ingresa la nota' + i));
    calificaciones.push(nota);
}

//WHILE, realiza la validacion antes de ejecutar la primera iteracion
// while(aux < calificaciones.length){
//     suma = calificaciones[aux];
//     aux ++;
// }

//DO WHILE, ejecuta de primero el codigo y luego valida para continuar con otra ejecucion
do{
    console.log(typeof(calificaciones[aux]));
    suma = calificaciones[aux];
    aux ++;

}while(aux < calificaciones.length)

promedio = (suma / cantidad).toFixed(2);

alert(`El promedio es: ${promedio}`);

//1. Solicitar al usuario un numero de frutas variable y las cantidades que tiene en stock, mostra la usuario la cantidad total de frutas y el datelle de esas frutas ingresadas 

