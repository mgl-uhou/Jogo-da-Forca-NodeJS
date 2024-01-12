class Palavra {
    constructor(palavra){
        this._palavra = palavra.split('');
        this._quantLetra = this.getPalavra().length;
        this._caracteres = this.defChar();
    }

    getPalavra(){
        return this._palavra;
    }

    getPropriedades(){
        return this._caracteres;
    }

    defChar(){
        let _ = [];
        for(let i = 0; i <= this._quantLetra - 1; i++){
            _.push("_");
        };
        return _;
    }

    setTeste(teste, jogo){
        for(let i = 0; i <= this._palavra; i++){
            if(teste == this._palavra[i]){
                this._caracteres[i] = teste;
            }
        }
        if (teste == this._palavra.join('')){
            console.log(`You Win! The word is ${this._palavra.join('')}`);
        }
        else if(tentativas > 10){
            console.log(`You Loose! The word is ${this._palavra.join('')}`);
            jogo.Andamento = false;
        }
    }
};

class Jogo{
    constructor(){
        this._andamento = true;
    }

    get Andamento(){
        return this._andamento;
    }

    set Andamento(valor){
        this._andamento = valor;
    }
}

module.exports = {Palavra, Jogo};