class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
        
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);

    }

    esvazia() {

        this._negociacoes = [];
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);

    }

    get negociacoes() {

        // truque: programacao defensiva: se alguem tentar alterar minha lista, vai alterar apenas a copia dela
        return [].concat(this._negociacoes);

    }

}