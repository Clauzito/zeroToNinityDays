// Pega o elemento do display da calculadora
const display = document.getElementById('display');

// Pega todos os botões que têm a classe 'btn' (números e operadores)
const buttons = document.querySelectorAll('.btn');

// Pega o botão de limpar
const clearButton = document.getElementById('btnClear');

// Pega o botão de calcular (=)
const equalsButton = document.getElementById('btnEquals');


// Função para mostrar o número ou operador clicado no display
function mostrarNumero(event) {
    // Adiciona o texto do botão clicado ao display
    display.value += event.target.textContent;
}

// Quando clicar no botão "=", executa a função calcular
equalsButton.addEventListener('click', calcular);

// Função que calcula a expressão no display
function calcular() {
    // 'eval' lê a expressão como código e retorna o resultado
    display.value = eval(display.value);
}

// Para cada botão da lista 'buttons', adiciona um evento de clique
// Quando clicar, chama a função mostrarNumero
buttons.forEach(button => {
    button.addEventListener('click', mostrarNumero);
});

// Quando clicar no botão de limpar, chama a função limparDisplay
clearButton.addEventListener('click', limparDisplay);

// Função que limpa o display
function limparDisplay() {
    display.value = '';
}

// Consegui fazer sozinho a parte de pegar e guardar os valores dos botões.
//Colocar eventListener para cada botão e mostrar o valor no display.
// O restante do codigo peguei com a ajuda do chatGPT, principalmente a parte de calcular a expressão usando eval() e limpar o display.
// Amanhã tentarei de novo so que sem ajuda do chatGPT, para fixar melhor o que aprendi hoje.