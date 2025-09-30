//let titulo = document .querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10'; 

function exibirTextoNaTela(tag) {
    let campo= document.querySelector(tag); 
    campo.innerHTML = texto; 
}

exibirTextoNaTela('h1')
exibirTextoNaTela('p')

function verificarChute() {
    console.log('o botão foi clicado')
}

