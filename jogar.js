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
    while(tema < 0 && tema > 4) /* Loop de controle: Serve para evitar problemas na escolha o tema */ {
        console.log('Esse tema não existe, digite um número de 0 a 4.');
        tema = parseInt(prompt('Esolha e digite aqui o número do tema escolhido: '));
    }
    let indice = Math.floor(Math.random() * listaPalavras[tema].length); // Indice aleatório para a escolha da palavra.
    let escolhida = new Palavra(listaPalavras[tema][indice]); // Criando o objeto que é a palavra escolhida
    
    
    let suaTentativa = '';
    let letrasDigitadas = [];
    let vidas = ['❤️', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️'];
    
    console.log(escolhida.getCaracteres().join(' '))
    console.log(`Suas vidas: ${vidas.join(' ')}`);
    
    do {
        suaTentativa = prompt('Digite uma letra: ').toUpperCase();
        escolhida.setTeste(suaTentativa, jogo, vidas, letrasDigitadas);
    } while (jogo.getAndamento() != false); // Loop que testa letras enquanto as vidas não acabarem
}

module.exports = Jogar;