const prompt = require('prompt-sync')();

const Jogar = (jogo) => {
    let indice = Math.floor(Math.random() * jogo.palavras.length);
    let escolhida = jogo.palavras[indice];
    let suaTentativa = '';
    let vidas = ['❤️', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️'];

    console.log(escolhida.getCaracteres().join(' '))
    console.log(`Suas vidas: ${vidas.join(' ')}`);

    do {
        suaTentativa = prompt('Digite uma letra: ').toUpperCase();
        escolhida.setTeste(suaTentativa, jogo, vidas);
    } while (jogo.getAndamento() != false);
}

module.exports = Jogar;