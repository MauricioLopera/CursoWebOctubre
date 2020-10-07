//Variables
let nombre, apellido, anonac, resultado;

//Asignacion de valores
nombre = document.getElementById('nombre').value;
apellido = document.getElementById('apellido').value;
anonac = Number(document.getElementById('anonac').value);

//La logica de negocio
resultado = 67/(1.7)**2;

//Impresion del resultado
document.getElementById('resultado').innerHTML = nombre + ' ' + apellido + ' tiene ' + resultado.toFixed(2) + ' años.';