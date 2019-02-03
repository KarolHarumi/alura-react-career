class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes = [].concat(this._negociacoes, negociacao);
    }

    get negociacoes() {
        // truque: programacao defensiva: se alguem tentar alterar minha lista, vai alterar apenas a copia dela
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

    get volumeTotal() {
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
     }
}