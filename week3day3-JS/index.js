const changeBg = document.getElementById("btn-chageBg"); //Pega elemento e guarda na variavel - "btn-changeBg" nome do button usado para o evento de click
const card1 = document.getElementById("changeBg"); // "card1" é o nome da variavel - "changeBg" é o nome da div pai que vai ser usada para trocar a cor do fundo.

changeBg.addEventListener("click", function() { // "changeBg" é o NOME da const que eu dei para guarda o valor do id "btn-changebg" para ser usado aqui nesse evento de click.
    card1.classList.toggle("dark"); // "card1" nome da const que dei para receber uma classList com valor de toogle "dark"(que é encontrado em css com .dark { background color black, color white}) AQUI LIGA OU DESLIGA O MODO ESCURO
});

//const lampada = document.getElementById("lamp");  //peguei a img lampada.
//const lampOn = document.getElementById("turnOn"); // pguei o bottao pelo id TurnOn


//const lamp () {
  //  lamp.src = "./image/ligada.png"
//}

//lampOn.addEventListener("click", lampOn);