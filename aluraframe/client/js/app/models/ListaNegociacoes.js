class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];

    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);

    }

    get negociacoes() {

        // truque: programacao defensiva: se alguem tentar alterar minha lista, vai alterar apenas a copia dela
        return [].concat(this._negociacoes);

    }

}