const prompt = require('prompt-sync')();
const listaPalavras = require('./palavras.js')
const { Palavra, _ } = require('./classes.js');

const Jogar = (jogo, deNovo) => {
    console.table({
        "Países": 0,
        "Cores": 1,
        "Frutas": 2,
        "Animais": 3,
        "Profissões": 4
    });
    let tema = parseInt(prompt('Esolha e digite aqui o número do tema escolhido: '));
    while(tema < 0 && tema > 4){
        console.log('Esse tema não existe, digite um número de 0 a 4.');
        tema = parseInt(prompt('Esolha e digite aqui o número do tema escolhido: '));
    }
    let indice = Math.floor(Math.random() * listaPalavras[tema].length);
    let escolhida = new Palavra(listaPalavras[tema][indice]);


    let suaTentativa = '';
    let vidas = ['❤️', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️'];

    console.log(escolhida.getCaracteres().join(' '))
    console.log(`Suas vidas: ${vidas.join(' ')}`);

    do {
        suaTentativa = prompt('Digite uma letra: ').toUpperCase();
        escolhida.setTeste(suaTentativa, jogo, vidas);
    } while (jogo.getAndamento() != false);

    prompt("Deseja jogar novamente (S/N)? ").toUpperCase() == "S" ? (deNovo = true, jogo.setAndamento(true)) : (deNovo = false, jogo.setAndamento(false));
}

module.exports = Jogar;