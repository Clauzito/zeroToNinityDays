// Change the background color.
const changeBgColor = document.getElementById("changeBG");
const btnColor = document.getElementById("changeColorBtn");

btnColor.addEventListener("click", () => {
    changeBgColor.classList.toggle("dark");
});

// Lets Turn On an OFF the lamp. 
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("btnOnn");
const btnDesligar = document.getElementById("btnOff");

btnLigar.addEventListener('click', () => {
    lampada.src = "./image/ligada.png";
});
btnDesligar.addEventListener('click', () => {
    lampada.src ="./image/desligada.png";
});

// Lets calculator IMC. 
const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const calcularImc = document.getElementById('calculateBtn');
const resultadoImc = document.getElementById('resultImc');



calcularImc.addEventListener('click', () => {

    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);

    const IMC = peso.value / (altura.value * altura.value);
    resultadoImc.value = IMC.toFixed(2);
});

// LEts make the calculator its work.
const display = document.getElementById('display');
const btns = document.querySelectorAll('.btn');

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value === 'c') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            } 
        } else {
            display.value += value;
        }
    });
});

