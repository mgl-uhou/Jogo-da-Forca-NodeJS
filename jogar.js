const prompt = require('prompt-sync')();

const Jogar = (jogo) => {
    let indice = Math.floor(Math.random() * jogo.palavras.length);
    let escolhida = jogo.palavras[indice];
    let suaTentativa = '';

    console.log(escolhida.getCaracteres())

    do {
        console.log(`${escolhida.getTentativas() + 1}ª tentativa:`);
        suaTentativa = prompt('Digite uma letra: ').toUpperCase();
        escolhida.setTeste(suaTentativa, jogo);
    } while (jogo.getAndamento() != false);
}

module.exports = Jogar;