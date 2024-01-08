class Palavra {
    constructor(palavra){
        this._palavra = palavra.split('');
        this._quantLetra = this.getPalavra().length;
        this._caracteres = this.caracteres();
    }

    getPalavra(){
        return this._palavra;
    }

    getPropriedades(){
        return this._caracteres;
    }

    caracteres(){
        let _ = '';
        for(let i = 0; i <= this._quantLetra - 1; i++){
            _ += "_";
        };
        return _;
    }
};

module.exports = Palavra;