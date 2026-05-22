
// AQUI É A PARTE DO CARD1. 
// PEGO BUTTON COM CONST BUTTONBG, E PEGO A BOX CARD1 COM CONST BGCHANGE. E dEPOIS PASSO A FUNÇÃO COM O BUTTON QUE VAI RECEBER O EVENTO DE ESCUTAR.
const buttonBg = document.getElementById("bttn-primary");
const bgchange = document.getElementById("card1");

buttonBg.addEventListener("click", () => {
     bgchange.classList.toggle("dark-card1"); // usar o toggle() sem o sinal de igual=
});

//------------------------------------------------------------

// Aqui Ligamos as lampadas. CARD 2

const bttnOn = document.getElementById("turnOn");
const bttnOff = document.getElementById("turnOff");
const imagem = document.getElementById("lampada");
// const txtOn = document.getElementById("txtOn"); TENTEI PEGAR O TEXTO E MUDAR A COR DO ON PARA AMARELO QUANDO LAMPADA ESTA ACESSA, E MUDAR O TEXTO DE ON PARA OFF QUANDO LAMPADA FICAR APAGADA.

bttnOn.addEventListener("click", () => {
    imagem.src = "./image/ligada.png";
});
bttnOff.addEventListener("click", () => {
    imagem.src ="./image/desligada.png";
});
    //txtOn.addEventListener("click", () => {
    //  txtOn.style.color = "yellow";
    // });
    // TENTEI USAR ESSA FUNÇÃO PARA MUDAR A COR, POREM ELE SÓ MUDA QUANDO CLICA NO TEXTO TURN ON. E NAO QUANDO CLICO NO BOTAO ON E OFF.

    //------------------------------------------------------------

// VAMOS FAZER AQUI O CODIGO DO CALCULAR O IMC.

const peso = document.getElementById("peso-imc");
const altura = document.getElementById("altura-imc");
const calcula = document.getElementById("calcular-imc");
const resultado = document.getElementById("resultado-imc");

calcula.addEventListener("click", () => {

    const pesoValue = parseFloat(peso.value); // pesoValue pega valor do input
    const alturaValue = parseFloat(altura.value); // parseFloat() transforma em numero decimal 

    const imc = pesoValue / (alturaValue * alturaValue); 
    // Aqui criamos uma variavel com nome IMC que vai vai calcular o imc, no caso, pesoValue / ( alturaValue * alturaValue);.
    // O " / " nessa linha significa divisão.

    resultado.value = imc.toFixed(2); 
    // .value Pego o valor que entra no input
    // Os inputs vem como texto STRING, preciso converter para NUMEROS. Posso usar number(peso.value) ou parseFloat(peso.value).

});