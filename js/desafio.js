function obtenerUltimaFruta(){
    //variables
    let frutas;
    let arrayF = [];

    //asignamos
    frutas = document.getElementById('frutas').value;

    //crear el array basado en el string de frutas
    arrayF = frutas.split(',');

    //logica de negocio, imprimir solo la ultima fruta
    for(i = 0; i < arrayF.length; i++){
        if((i + 1) === arrayF.length){
            alert(`La ultima fruta que ingresaste es: ${arrayF[i].toUpperCase()}`);
            document.getElementById('frutas').value='';
            document.getElementById('frutas').focus();
        }
    }
}

document.getElementById('btnfrutas').addEventListener('click',obtenerUltimaFruta);

function mostrarPares(){
    //variables
    let arrayN = [2,5,4,6,12,4,8,5,7,9,20];
    let acumulador;

    //logica de negocio, mostrar solo los pares
    for(i = 0; i < arrayN.length; i++){
        //utilizaremos modular para determinar cual es par
        if(arrayN[i] % 2 === 0){
            if(i===0){
                acumulador = arrayN[i];
            }else{
                acumulador = acumulador + ' / ' + arrayN[i];
            }
            
        }
    }

    //imprimir resultado
    document.getElementById('resultado').innerHTML = 'Los numero pares son: ' + acumulador;
}

document.getElementById('btnpares').addEventListener('click',mostrarPares);

function cambiaColor(){
    //variable
    let h4 = document.getElementById('resultado');
    let color = document.getElementById('color').value;

    //asignar un estilo
    h4.style.backgroundColor=color;
    h4.style.color='#ffffff';
}

document.getElementById('btcambiacolor').addEventListener('click',cambiaColor);