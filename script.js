const prompt = require('prompt-sync')();
const Palavra = require('./palavras.js');

let palavra1 = new Palavra("OMITIR");
let palavra2 = new Palavra("ALMONDEGAS");
let palavra3 = new Palavra("LEAO");

const palavras = [palavra1, palavra2, palavra3]
let suaTentativa = '';
const tentativas = 10;

const jogo = () => {
    let indice = Math.floor(Math.random() * palavras.length);
    let escolhida = palavras[indice];

    for(let i = 0; i <= tentativas; i++){
        suaTentativa = prompt('Digite uma letra: ');
    }
}

jogo()