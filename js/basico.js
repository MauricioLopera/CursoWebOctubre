function capturaNombre(){
    //variables
    let nombre, texto, edad;

    //asignar valor
    //String - texto
    //Number - Numeros
    //Booleanos - True o False
    //Arrays - Tipo de dato complejo (estruturas de datos)

    nombre = document.getElementById('nombre').value;
    edad = Number(document.getElementById('edad').value);

    //logica de negocio
    // if(edad < 12){
    //     texto = 'Tu nombre es: ' + nombre + ' y eres un niño';
    // }else if(edad < 18){
    //     texto = 'Tu nombre es: ' + nombre + ' y eres un adolecente';
    // }else if(edad < 70){
    //     texto = 'Tu nombre es: ' + nombre + ' y eres un adulto';
    // }else{
    //     texto = 'Tu nombre es: ' + nombre + ' y eres un adulto mayor';
    // }

    if(edad >= 1 && edad <12){
        texto = 'Tu nombre es: ' + nombre + ' y eres un niño';
    }

    if(edad >=12 && edad < 18){
        texto = 'Tu nombre es: ' + nombre + ' y eres un adolecente';
    }

    if(edad >= 18 && edad < 70){
        texto = 'Tu nombre es: ' + nombre + ' y eres un adulto';
    }

    if(edad >= 70 && edad < 105){
        texto = 'Tu nombre es: ' + nombre + ' y eres un adulto mayor';
    }


    //finalizacion del algoritmo
    alert(texto);
}

document.getElementById('btproceso').addEventListener('click',capturaNombre);

//variables
let cantidad, notas, promedio;

//asignar valores
cantidad = Number(prompt('Ingresa la cantidad de notas que vas a digitar'));
notas = 0;

//logica de negocio
for(i = 1; i <= cantidad; i ++){
    notas = notas + Number(prompt('Ingrese la nota'));
}

promedio = (notas / cantidad).toFixed(2);

//finalizacion del algoritmo
alert('El promedio del estudiante es: ' + promedio);
