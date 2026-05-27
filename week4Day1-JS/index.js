// Esse consgui fazer sozinho sem nenhuma ajuda ou cola.
// Fiquei 1 dia de folga, voltei muito melhor.

const changebg = document.getElementById("cardone");
const bttnchange = document.getElementById("btnPrimary");

bttnchange.addEventListener("click", () => {
    changebg.classList.toggle("dark");
});

//--------------------------------------------------------

// CARAMBA ESSE TBM FIZ SOZINHO *----* 
// Lampada Ligar e desligar.

const lampada = document.getElementById("lampada");
const turnon = document.getElementById("turnOn");
const turnoff = document.getElementById("turnOff"); 

turnon.addEventListener("click", () => {
    lampada.src = "./image/ligada.png";
});
turnoff.addEventListener("click", () => {
    lampada.src = "./image/desligada.png";
});

//-----------------------------------------------------------

// Vamos calcular o IMC. 

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const calcular = document.getElementById("bttnCalc");
const resultado = document.getElementById("resultado"); 

calcular.addEventListener("click" , () => {

    const pesoValue =  parseFloat(peso.value); // aqui dei uma olhada na colinha.
    const alturaValue = parseFloat(altura.value);

    const imc = pesoValue / (alturaValue * alturaValue);

    resultado.value = imc.toFixed(2); // aqui dei uma olhadinha tambem. (Nao lembrava)
}); 