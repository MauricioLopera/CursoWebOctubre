//variable global
let cantidad;

function cantidadInputs(){
    //variables
    let label, input, texto, div, br, boton;

    //asignamos valores
    cantidad = Number(document.getElementById('cantidad').value);
    div = document.getElementById('cajones');

    for(i = 1; i <= cantidad; i++){
        //crea elemento
        label = document.createElement('LABEL');
        //crea texto del elemento
        texto = document.createTextNode(`Ingresa la Nota ${i}:`)
        //anexamos este texto al elemento
        label.appendChild(texto);
        //lo insertamos en el HTML
        div.appendChild(label);
        //creamos elemento input
        input = document.createElement('INPUT');
        //lo insertamos en el HTML
        div.appendChild(input);
        //creamos elemento input
        br = document.createElement('BR');
        //lo insertamos en el HTML
        div.appendChild(br);
    }

    //creamos elemento input
    boton = document.createElement('BUTTON');
    //agregar atributos
    boton.setAttribute('onclick','promedio()');
    //crea texto del elemento
    texto = document.createTextNode(`Promediar`)
    //anexamos este texto al elemento
    boton.appendChild(texto);
    //lo insertamos en el HTML
    div.appendChild(boton);

}

document.getElementById('btcant').addEventListener('click', cantidadInputs);

function promedio(){
    //variables
    let inputs, suma, promedio;

    //asigno
    inputs = document.getElementsByTagName('input');
    suma = 0;

    //recorro inputs para sumar y promediar
    for(i=1; i < inputs.length; i++){
        suma = suma + Number(inputs[i].value);
    }

    promedio = (suma / cantidad).toFixed(2);

    alert(`El promedio es: ${promedio}`);

}

