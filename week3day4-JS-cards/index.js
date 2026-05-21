
// AQUI VAI SER O CODIGO PARA MODO ESCURO

const changeBg = document.getElementById("btn-chageBg"); //Pega elemento e guarda na variavel - "btn-changeBg" nome do button usado para o evento de click
const card1 = document.getElementById("changeBg"); // "card1" é o nome da variavel - "changeBg" é o nome da div pai que vai ser usada para trocar a cor do fundo.

changeBg.addEventListener("click", function() { // "changeBg" é o NOME da const que eu dei para guarda o valor do id "btn-changebg" para ser usado aqui nesse evento de click.
    card1.classList.toggle("dark"); // "card1" nome da const que dei para receber uma classList com valor de toogle "dark"(que é encontrado em css com .dark { background color black, color white}) AQUI LIGA OU DESLIGA O MODO ESCURO
});

// AQUI VAI SER O CODIGO PARA LAMPADA ON/OFF ------------------------------------------------------------------

const turnOn = document.getElementById("turnOn"); // "turnOn" nome da const que recebe o valor do id "turnOn" que é o button para ligar a lampada
const turnOff = document.getElementById("turnOff"); // "turnOff" nome da const que recebe o valor do id "turnOff" que é o button para desligar a lampada
const lamp = document.getElementById("lamp"); // "lamp" nome da const que recebe o valor do id "lamp" que é a imagem da lampada

turnOn.addEventListener("click", function () {
    lamp.src = "./image/ligada.png"; // "lamp" nome da const que recebe o valor do id "lamp" que é a imagem da lampada - "src" é a propriedade que troca a imagem - "./image/ligada.png" é o caminho da imagem que vai ser usada para ligar a lampada
});

turnOff.addEventListener("click", function () {
    lamp.src ="./image/desligada.png"; // "lamp" nome da const que recebe o valor do id "lamp" que é a imagem da lampada - "src" é a propriedade que troca a imagem - "./image/desligada.png" é o caminho da imagem que vai ser usada para desligar a lampada
})

// AQUI VAI SER O CODIGO PARA CALCULADORA DE IMC -------------------------------------------------------

// Primeiro passo é pegar os elementos do html e guardar em variaveis para usar no evento de click do button calcular.

const peso = document.getElementById("weight"); // "altura" nome da const que recebe o valor do id "altura" que é o input para altura 
const altura =document.getElementById("height"); // "peso" nome da const que recebe o valor do id "peso" que é o input para peso
const calcular = document.getElementById("calculateImc"); // "calcular" nome da const que recebe o valor do id "calculateImc" que é o button para calcular o imc
const resultado = document.getElementById("result"); // "resultado" nome da const que recebe o valor do id "result" que é a div onde vai ser mostrado o resultado do imc

calcular.addEventListener("click", function() {
    const pesoValue = parseFloat(peso.value); // pega o valor digital do input "peso" e transforma em numero com parseFloat - "pesoValue" nome da const que recebe o valor do input "peso" e transforma em numero com parseFloat
    const alturaValue = parseFloat(altura.value); // pega o valor digital do input "altura" e transforma em numero com parseFloat - "alturaValue" nome da const que recebe o valor do input "altura" e transforma em numero com parseFloat
    const imc = pesoValue / (alturaValue * alturaValue); // "pega o valor do pesoValue e divide pelo valor do alturaValue multiplicado por ele mesmo" - "imc" nome da const que recebe o valor do calculo do imc
    resultado.value = imc.toFixed(2); // pega o valor do imc e transforma em string com 2 casas decimais com toFixed(2) - "resultado" é o nome da const que recebe o valor do input "result" e mostra o valor do imc com 2 casas decimais

 });
