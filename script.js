const { _, Jogo } = require('./classes.js');
const jogar = require("./jogar.js");
let jogo = new Jogo(); //Objeto de controle para o jogo

console.log('Seja bem-vindo ao Jogo da Forca em JavaScript, aqui, você deve adivinhar a palavra digitando letra por letra, ou até mesmo a palavra completa, desconsiderando acentos e pontuação. Você tem sete vidas e a cada erro uma delas se vai, então pense bem antes de escolher uma letra ou uma palavra.');

let deNovo = false;
do {
    jogar(jogo, deNovo);
} while (deNovo == true); // Loop para permitir que o jogador possa jogar de novo

console.log('Obrigado por jogar, espero que tenha gostado.');