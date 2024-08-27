const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");
const paragrafo = document.querySelector(".containerparagrafo");
const subtitulo = document.querySelector(".mensagemsubtitulo");



function btnEncriptar() {
    const texto = textArea.value;

    
    if (isTextoValido(texto)) {
        const textoEncriptado = encriptar(texto);
        mensagem.value = textoEncriptado;
        textArea.value = "";
        ocultarImagem();
        ocultarMensagem();
    } else {
        alert("Insira apenas letras minúsculas e sem acentos.");
    }
}

function isTextoValido(texto) {
    
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    ocultarImagem();
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

function btnCopiar() {
    mensagem.select(); 
    document.execCommand("copy");

function ocultarImagem() {
    const imagem = document.getElementById("imagem");
    imagem.style.display = "none";
}

function ocultarImagem() {
    mensagem.style.backgroundImage = "none";
}

function mostrarImagem() {
    mensagem.style.backgroundImage = "url('assets\imag.png')";
}

function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagemsubtitulo');
    const paragrafo = document.querySelector('.containerparagrafo');

    if (mensagem) {
        mensagem.style.display = 'none';
    }

    if (paragrafo) {
        paragrafo.style.display = 'none';
    }
}

}