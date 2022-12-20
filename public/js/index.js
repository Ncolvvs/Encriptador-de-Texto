const display = 'none';
const displayInline = 'inline'
const displayFlex = 'flex'
const imageMuñeco = document.querySelectorAll('#image-muñeco');
const legend1 = document.querySelectorAll('#legend-1')
const legend2 = document.querySelectorAll('#legend-2')
const btnCopy2 = document.querySelectorAll('#btn-copy')
const result = document.querySelectorAll('#result')

var btnEncriptar = document.querySelector('#btn-encrypt');

btnEncriptar.addEventListener('click', function (event) {
    event.preventDefault();
    imageMuñeco[0].style.display = display;
    legend1[0].style.display = display;
    legend2[0].style.display = display;
    result[0].style.visibility = 'visible'
    btnCopy2[0].style.display = displayInline

    var text = document.querySelector('#message').value;   
    var messageEncrypt = document.querySelector('#result');
    var coding = encrypted(text);
    messageEncrypt.value = coding;
});


var btnDesencriptar= document.querySelector("#btn-decrypt"); 
btnDesencriptar.addEventListener("click",function(e){
    e.preventDefault();
    imageMuñeco[0].style.display = display;
    legend1[0].style.display = display;
    legend2[0].style.display = display;
    result[0].style.visibility = 'visible'
    btnCopy2[0].style.display = displayInline
    var txtDecoding = document.querySelector("#message").value;        
    var decoding= decrypted(txtDecoding);
    var decrypt = document.querySelector("#result");
    decrypt.value = decoding;
}) 

var btnCopy = document.querySelector('#btn-copy');

btnCopy.addEventListener('click',function(){
    let text = document.querySelector('#result');
    text.select();
    document.execCommand('copy');
})