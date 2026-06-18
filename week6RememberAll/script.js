// ===========================
// HAMBURGER MENU (mobile nav)
// ===========================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });
});


// ===========================
// CHANGE BACKGROUND COLOR
// ===========================
const changeBgColor = document.getElementById("changeBG");
const btnColor = document.getElementById("changeColorBtn");

btnColor.addEventListener("click", () => {
    changeBgColor.classList.toggle("dark");
});


// ===========================
// LAMP ON / OFF
// ===========================
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("btnOnn");
const btnDesligar = document.getElementById("btnOff");

btnLigar.addEventListener('click', () => {
    lampada.src = "./image/ligada.png";
});

btnDesligar.addEventListener('click', () => {
    lampada.src = "./image/desligada.png";
});


// ===========================
// IMC CALCULATOR
// ===========================
const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const calcularImc = document.getElementById('calculateBtn');
const resultadoImc = document.getElementById('resultImc');

calcularImc.addEventListener('click', () => {
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);

    if (!pesoValue || !alturaValue || pesoValue <= 0 || alturaValue <= 0) {
        resultadoImc.value = "Invalid input";
        return;
    }

    const IMC = pesoValue / (alturaValue * alturaValue);
    const resultado = IMC.toFixed(2);

    // Adds a category label too — useful feedback!
    let categoria = "";
    if (IMC < 18.5) categoria = " — Underweight";
    else if (IMC < 25) categoria = " — Normal";
    else if (IMC < 30) categoria = " — Overweight";
    else categoria = " — Obese";

    resultadoImc.value = resultado + categoria;
});


// ===========================
// CALCULATOR
// ===========================
const display = document.getElementById('display');
const btns = document.querySelectorAll('.btn');

btns.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'c') {
            display.value = '';
        } else if (value === '=') {
            try {
                // eval is fine for a learning project — just avoid it in production
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            // Prevent multiple operators in a row
            const last = display.value.slice(-1);
            const operators = ['+', '-', '*', '/'];
            if (operators.includes(value) && operators.includes(last)) return;

            display.value += value;
        }
    });
});


