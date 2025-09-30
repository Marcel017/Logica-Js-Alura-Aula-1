let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou'); 
        exibirTextoNaTela('p', 'Voçê descobriu o numero secreto');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o número secreto e menor')
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior')
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

