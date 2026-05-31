// Get buttons by their IDs
const btnSkills = document.getElementById('btnSkills');
const btnContact = document.getElementById('btnContact');

// Add event listeners to the buttons
btnSkills.addEventListener('click', () => {
    // Handle skills button click
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

btnContact.addEventListener('click', () => {
    // Handle contact button click
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Change the background color. 

const changebttn = document.getElementById('btnChangeColor');
const changeColor = document.getElementById('changeColor');

changebttn.addEventListener('click', () => {
    changeColor.classList.toggle('dark');
});

// Lets Make the Light On and Off. 

const lampada = document.getElementById('lamp');
const bttnOn = document.getElementById('btnLamp');
const bttnOff = document.getElementById('btnLampOff');

bttnOn.addEventListener('click', () => {
    lampada.src = "./image/ligada.png";
});

bttnOff.addEventListener('click', () => {
    lampada.src = "./image/desligada.png";
});

// Calculate the IMC. 

const btnCalculate = document.getElementById('btnCalculate');
const inputWeight = document.getElementById('inputWeight');
const inputHeight = document.getElementById('inputHeight');
const resultIMC = document.getElementById('result');

btnCalculate.addEventListener('click', () => {

    const weightValue = parseFloat(inputWeight.value);
    const heightValue = parseFloat(inputHeight.value);

 // Validação adicionada
    if (!weightValue || !heightValue || heightValue <= 0) {
        resultIMC.value = 'Valores inválidos';
        return;
    }

    const imc = weightValue / (heightValue * heightValue);
    resultIMC.value = imc.toFixed(2);
});

// Handle contact form submission
const contactForm = document.querySelector('.contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // bloqueia o reload
    alert('Mensagem enviada!');
    contactForm.reset();
});