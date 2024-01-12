const { Palavra, Jogo } = require('./classes.js');
const jogar = require("./jogar.js");

let palavra1 = new Palavra("PURPURA");
let palavra2 = new Palavra("CONDICAO");
let palavra3 = new Palavra("OLHAR");
let jogo = new Jogo();

jogo.palavras = [palavra1, palavra2, palavra3]
let suaTentativa = '';
const quantErros = 10;

console.log('Seja bem-vindo ao Jogo da Forca em JavaScript, aqui, você deve adivinhar a palavra digitando letra por letra, ou até mesmo a palavra completa, em até 10 tentativas, desconsiderando acentos e pontuação.')

jogar(jogo)