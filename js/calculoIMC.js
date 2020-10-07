//objeto persona
let persona = {
    nombre:'Mauricio',
    apellido:'Lopera',
    peso:'',
    altura:'',
    imc:''
}

let cookiepeso = localStorage.getItem('peso');
let cookiealtura = localStorage.getItem('altura');

if(cookiepeso !== null || cookiealtura !== null){
    document.getElementById('peso').value = cookiepeso;
    document.getElementById('altura').value = cookiealtura;
}

function calculoIMC(){
    //Variables
    let resultado;

    //Asigno valores
    persona.peso = Number(document.getElementById('peso').value);
    persona.altura = Number(document.getElementById('altura').value);

    //calulculo el IMC
    resultado = (persona.peso / (persona.altura ** 2)).toFixed(2);
    persona.imc = resultado;

    console.log(persona);

    localStorage.setItem('peso',persona.peso);
    localStorage.setItem('altura',persona.altura);

    //Mostramos el resultado
    //alert('Tu indice de masa coporal es: ' + resultado.toFixed(2));

    if(resultado < 18.55 || resultado > 24.99){
        swal("¡Pilas!", 'Tu indice de masa coporal es: ' + resultado, "warning");
    }else{
        swal("¡Bien Hecho!", 'Tu indice de masa coporal es: ' + resultado, "success");
    }
    
}

document.getElementById('calcular').addEventListener('click',calculoIMC);

