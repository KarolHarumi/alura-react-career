class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes = [].concat(this._negociacoes, negociacao);
        //this._negociacoes.push(negociacao);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        // truque: programacao defensiva: se alguem tentar alterar minha lista, vai alterar apenas a copia dela
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }


}