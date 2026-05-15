// Crio uma variável constante chamada form
// Ela pega o elemento HTML através do id "my-form"
// Agora a variável form representa meu formulário

const form = document.getElementById('my-form')


// Adiciono um ouvinte de evento no formulário
// Quando acontecer um submit (envio do formulário)
// a função doSomething será executada

form.addEventListener("submit", doSomething)


// Crio uma função chamada doSomething
// Ela recebe um parâmetro chamado event
// que representa o evento que aconteceu

function doSomething(event) {

    // Impede o comportamento padrão do formulário
    // O padrão seria recarregar a página ao enviar

    event.preventDefault()

    
    // Mostra uma mensagem de alerta na tela

    alert("Formulario enviado")
}



// Crio uma variável chamada changeButton
// Ela pega o botão que possui o id "bttn-change"

const changeButton = document.getElementById("bttn-change")


// Adiciono um evento de clique no botão
// Quando clicar, executa a função changeBackground

changeButton.addEventListener("click", changeBackground)


// Crio a função responsável por mudar o background

function changeBackground() {

    // Acesso o body da página
    // Depois acesso o style
    // E mudo a cor do fundo para preto

    document.body.style.backgroundColor = "black"


    // Mudo a cor do texto do body para branco

    document.body.style.color = "white"

}