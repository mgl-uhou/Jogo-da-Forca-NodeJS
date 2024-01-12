class Palavra {
    constructor(palavra){
        this._palavra = palavra.split('');
        this._quantLetra = this.getPalavra().length;
        this._caracteres = this.defChar();
        this._tentativas = 0;
    }

    getPalavra(){
        return this._palavra.join('');
    }

    getCaracteres(){
        return this._caracteres;
    }

    getTentativas(){
        return this._tentativas;
    }

    defChar(){
        let _ = [];
        for(let i = 0; i <= this._quantLetra - 1; i++){
            _.push("_");
        };
        return _;
    }

    setTeste(teste, jogo){
        for(let i = 0; i < this._quantLetra; i++){
            if(teste === this._palavra[i]){
                this._caracteres[i] = teste;
            }
        }
        if (teste === this.getPalavra() || this._caracteres.join('') === this._palavra.join('')){
            console.log(`Você Ganhou! A palavra é ${this._palavra.join('')}`);
            jogo.setAndamento(false);
        }
        else if(this._tentativas >= 9){
            console.log(`Você Perdeu! A palavra é ${this._palavra.join('')}`);
            jogo.setAndamento(false);
        }
        this._tentativas++;
        console.log(teste !== this.getPalavra() && jogo.getAndamento() === true ? this.getCaracteres() : this.getPalavra().split(""));
    }
};

class Jogo{
    constructor(){
        this.palavras = [];
        this._andamento = true;
    }

    getAndamento(){
        return this._andamento;
    }

    setAndamento(valor){
        this._andamento = valor;
    }
}

module.exports = {Palavra, Jogo};