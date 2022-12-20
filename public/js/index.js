/*! En vez de que salte un error preferi cambiar o reemplazar los acentos y las mayusculas para que asi el usuario no se asuste y no tenga otro tipo de problemas*/ 

const displayNone = 'none';
const displayInline = 'inline'
const imageMuñeco = document.querySelectorAll('#image-muñeco');
const legend1 = document.querySelectorAll('#legend-1')
const legend2 = document.querySelectorAll('#legend-2')
const btnCopy2 = document.querySelectorAll('#btn-copy')
const result = document.querySelectorAll('#result')

var textareaMessage = document.querySelector("#message");
var textareaResult = document.querySelector("#result");
var btnEncrypt = document.querySelector("#btn-encrypt");
var btnDecrypt = document.querySelector("#btn-decrypt");

function encriptar(){
    imageMuñeco[0].style.display = displayNone;
    legend1[0].style.display = displayNone;
    legend2[0].style.display = displayNone;
    result[0].style.visibility = 'visible'
    btnCopy2[0].style.display = displayInline

    var message = textareaMessage.value;
    var vowels = message.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")
    .normalize('NFD').replace(/[\u0300-\u036f]/g,"")///quitar acentos
    .toLowerCase();
    textareaResult.value= vowels;

    
}
function desencriptar(){
    imageMuñeco[0].style.display = displayNone;
    legend1[0].style.display = displayNone;
    legend2[0].style.display = displayNone;
    result[0].style.visibility = 'visible'
    btnCopy2[0].style.display = displayInline

    var message = textareaMessage.value;
    var decryptMessage = message.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
    .toLowerCase();
    textareaResult.value= decryptMessage;
}

var btnCopy = document.querySelector('#btn-copy');

btnCopy.addEventListener('click',function(){
    let text = document.querySelector('#result');
    text.select();
    document.execCommand('copy');
})



btnEncrypt.onclick = encriptar;
btnDecrypt.onclick = desencriptar;
