const prompt = require('prompt-sync')();
const { Palavra, Jogo } = require('./classes.js');

let palavra1 = new Palavra("OMITIR");
let palavra2 = new Palavra("ALMONDEGAS");
let palavra3 = new Palavra("LEAO");
let jogo = new Jogo();

console.log(palavra1.getPropriedades());
console.log(palavra2.getPropriedades());
console.log(palavra3.getPropriedades());

const palavras = [palavra1, palavra2, palavra3]
let suaTentativa = '';
const quantErros = 10;

const jogar = () => {
    let indice = Math.floor(Math.random() * palavras.length);
    let escolhida = palavras[indice];

    /* for(let i = 0; i <= quantErros;){
        suaTentativa = prompt('Digite uma letra: ');
    } */

    do {
        suaTentativa = prompt('Digite uma letra: ');
        escolhida.setTeste(suaTentativa, jogo);
    } while (jogo.Andamento() != false);
}

jogar()