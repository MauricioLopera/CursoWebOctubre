function calculaProm(){
    //Variables
    let n1, n2, n3, promedio, mensaje, cantidad;

    //Asignamos datos
    n1 = Number(document.getElementById('n1').value);
    n2 = Number(document.getElementById('n2').value);
    n3 = Number(document.getElementById('n3').value);
    cantidad = Number(document.getElementById('cantidad').value);

    //Procesamiento
    //Operador Logico AND se deben cumplir todas las condiciones (&&)
    //Operador Logico OR se debe cumplir una de todas las condiciones (||)

    // if(n1 > 0 && n2 > 0 && n3 > 0){
    //     promedio = (n1 + n2 + n3) / 3;
    //     mensaje = `El promedio es: ${promedio.toFixed(2)}`;
    // }else{
    //     mensaje = 'Para promediar las notas deben ser mayor a 0';
    // }

    //if anidado
    // if(n1 > 0){
    //     if(n2 > 0){
    //         if(n3 > 0){
    //             promedio = (n1 + n2 + n3) / cantidad;
    //             mensaje = `El promedio es: ${promedio.toFixed(2)}`;
    //         }else{
    //             mensaje = 'La nota 3 no puede ser 0';
    //         }
    //     }else{
    //         mensaje = 'La nota 2 no puede ser 0';
    //     }
    // }else{
    //     mensaje = 'La nota 1 no puede ser 0';
    // }

    if(cantidad === 0){
        mensaje = 'La cantidad de notas no puede ser 0';
    }else if(n1 === 0 || n2 === 0 || n3 === 0){
        mensaje = 'Para promediar las notas deben ser mayor a 0';
    }else{
        promedio = (n1 + n2 + n3) / cantidad;
        mensaje = `El promedio es: ${promedio.toFixed(2)}`;
    }

    //Switch
    // switch (cantidad) {
    //     case 0:
    //         mensaje = 'La cantidad de notas no puede ser 0';
    //         break;
    //     default:
    //         promedio = (n1 + n2 + n3) / cantidad;
    //         mensaje = `El promedio es: ${promedio.toFixed(2)}`;
    //         break;
    // }

    //If ternario
    // cantidad !== 0
    //    ? mensaje = `El promedio es: ${((n1 + n2 + n3) / cantidad).toFixed(2)}` //si si se cumple
    //     : mensaje = 'La cantidad de notas no puede ser 0' //si no se cumple

    //Imprimir resultado
    //document.getElementById('promedio').innerHTML = 'El promedio es: ' + promedio;
    document.getElementById('promedio').innerHTML = mensaje;
}
//forma de ejecutar la funcion
//document.getElementById('btprom').addEventListener('click',calculaProm);
