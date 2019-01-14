class MensagemView extends View {

    // Por padrão, quando uma classe herda outra, ela também herda seu construtor, pode remover
    // Existem situacoes em que o constructor eé necessario, porem nao e o caso
    constructor(elemento) {

        super(elemento);

    }

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : "";

    }

}