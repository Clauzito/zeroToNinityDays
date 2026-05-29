// Vamos trocar a Cor do fundo. 

const bttnprimary = document.getElementById("btnPrimary");
const changeBg = document.getElementById("cardone");

bttnprimary.addEventListener("click", () => {
    changeBg.classList.toggle("dark");
})
// Concluido sozinho : EBAAAA

//-------------------------------------------------------

// Vamos ligar e desligar a lampada. 

const ligada = document.getElementById("turnOn");
const desligada = document.getElementById("turnOff");
const lampada = document.getElementById("lampada"); 

ligada.addEventListener("click", () => {
    lampada.src = "./image/ligada.png";
});
desligada.addEventListener("click", () => {
    lampada.src = "./image/desligada.png";
});

// COncluido com sucesso - FEITO SEM NENHUMA COLA.

//---------------------------------------------------------

// VAMOS CALCULARO IMC. 

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById("bttnCalc");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", () => {

    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value); 

    const imc = pesoValue / ( alturaValue * alturaValue );

    resultado.value = imc.toFixed(2); // tive que olhar nessa linha eu não lembrava :( 

})