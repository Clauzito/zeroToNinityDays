// Manipulando o Btn1. 
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
    if (btn1.textContent === "Click Here") {
        btn1.textContent = "Clicou";
    } else {
        btn1.textContent = "Click Here";
    }
});

// --------------------------------------------------------------------

// Manipulando input e ver texto na mesma hora.
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

// Jeito Nome com upperCase() e contandor de letras, tudo junto.
inputText.addEventListener("input", () => {
    outputText.textContent = `${inputText.value.toUpperCase()}. Essa frase tem ${inputText.value.length} letras.`;
});

// JEITO SIMPLES
//inputText.addEventListener("input", () => {
//    outputText.textContent = inputText.value; // posso colocar .toUpperCase() / .length. 
//})

// Mostrando input em tempo real com frase de contador de letras
//inputText.addEventListener("input", () => {
//    if (inputText.value.length < 5) {
//   outputText.textContent = `${inputText.value}. Essa frase tem $//{inputText.value.length} letras.`; 
//    } else {
//       outputText.textContent = `${inputText.value} essa frase tem ${inputText.value.length} letras.`;
//    } 
//});


// Aqui brinquei com o codigo: se o que aparecer no input for menos que 5 letras vai aparecer "pouca letras"
// caso contrario aparece "boa". Mas fica por isso e não aparece o texto em si, apenas o resultado.
//inputText.addEventListener("input", () => {
//    if (inputText.value.length < 5) {
//        outputText.textContent = "Pouca letras"
//    } else {
//        outputText.textContent = "Boa"
//  }
//});

// ----------------------------------------------------------------------

// Manipulando o backgroundColor.

const btnColor = document.getElementById("btnColor");
const section3 = document.getElementById("section3");

// btnColor.addEventListener("click", () => {
//   section3.style.backgroundColor = "blue";
// })

btnColor.addEventListener("click", () => {
    section3.classList.toggle("dark");
});

// MENU TOGGLE 

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});