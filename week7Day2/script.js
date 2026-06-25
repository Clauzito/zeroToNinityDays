// NavMenu Hamburguer 

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

//---------------------------------------------------------

// Vamos Mudar a cor de fundo. 

const changeColorBtn = document.getElementById("changeColorBtn");
const changeBg = document.getElementById("changeBG");

changeColorBtn.addEventListener("click", () => {
    changeBg.classList.toggle("dark");
});

//-----------------------------------------------------------

//Vamos fazer a lampada. 

const lampada = document.getElementById("lampada");
const btnOnn = document.getElementById("btnOnn");
const btnOff = document.getElementById("btnOff");

btnOnn.addEventListener("click", () => {
    lampada.src = "./image/ligada.png";
});
btnOff.addEventListener("click", () => {
    lampada.src = "./image/desligada.png";
});

//------------------------------------------------------------

// Vamos calcular o IMC. 

const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const resultImc = document.getElementById("resultImc");

calculateBtn.addEventListener("click", () => {

    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);

    const imc = weightValue / (heightValue * heightValue);
    // resultImc.value =  imc.toFixed(2);

    if (imc <= 18.5) {
        resultImc.value = `${imc.toFixed(2)}. Você está abaixo do peso. `;
    } else if (imc < 24.9) {
        resultImc.value = `${imc.toFixed(2)}. Você está no peso ideal. `;
    } else if (imc < 34.9) {
        resultImc.value = `${imc.toFixed(2)}. Você está no grau de obesidade 1. `;
    } else if (imc < 39.9) {
        resultImc.value = `${imc.toFixed(2)}. Você está no grau de obesidade 2. `;
    } else {
        resultImc.value = `${imc.toFixed(2)}. Você está no grau de obesidade 3 (mórbida).`;
    }
});

//-----------------------------------------------------------------------------

// vamos fazer a CALCULADORA.

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value; // Pega o valor do atributo data-value do botão clicado.

        if (value === "c") { // Se o botão clicado for "C", limpa o display.
            display.value = "";

        } else if (value === "=") { // Se clicar em "=", calcula a expressão que está no display.
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Erro";
            }

        } else { // Qualquer outro botão (número ou operador) é adicionado ao display.
            display.value += value;
        };
    });
});