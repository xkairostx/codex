const btnCopiar = document.querySelector('#copy-btn');
const textArea = document.querySelector("#input-text");
const mensaje = document.querySelector("#output-text");
const darkModeBtn = document.getElementById('dark-mode-btn');
const body = document.body;

// `La letra "e" es convertida para "enter"
// `La letra "i" es convertida para "imes"
// `La letra "a" es convertida para "ai"
// `La letra "o" es convertida para "ober"
// `La letra "u" es convertida para "ufat"

//Matriz de encriptacion
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function cambiarEstadoEncriptado() {
    const texto = textArea.value;
    if (texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") || texto.includes("ufat")) {
        mensaje.value = desencriptar(texto);
    } else {
        mensaje.value = encriptar(texto);
    }
}

//Copiar texto

textArea.addEventListener("input", function () {
    cambiarEstadoEncriptado();
});

function accionbtn(){
    const boton = document.querySelector("#copy-btn"); //Seleccionamos el boton
    boton.innerHTML = 'Copiado!'; //agregamos el texto Copiado

    const cambioNombre = setInterval(function(){  //se crea un evento de intervalos 
        boton.innerHTML = "Copiar";  //luego de complido el intervalo se cambio el nombre a copiar
        clearInterval(cambioNombre); //se destruye el intervalo
    }, 1000); //el tiempo de intervalo es de mil milisegundos

    
}

btnCopiar.addEventListener('click', () => {
    const texto = mensaje.value;
    
    navigator.clipboard.writeText(texto)
        .then(() => {
            console.log('Texto copiado');
            accionbtn(); //se llama a la function accionbtn 
        })
        .catch(() => {
            console.error('Error al copiar el texto');
        });
});

//Cambiar tema de la pagina

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let img = document.querySelector('#btnimg');

    if (img.src.includes('sun.svg')){
        img.src = 'imagenes/moon.svg';
    }else{
        img.src = 'imagenes/sun.svg';
    }
    


});

