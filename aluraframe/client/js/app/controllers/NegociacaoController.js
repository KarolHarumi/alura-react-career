class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind (
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');
        
        this._mensagem = new Bind (
            new Mensagem(), 
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacoes());
        this._mensagem.texto = 'Negociacao adicionada com sucesso!';
        this._limpaFormulario();
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociacoes apagadas com sucesso!';

    }

    _criaNegociacoes() {
        return new Negociacao (
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    // apenas essa classe pode chamar essa metodo
    _limpaFormulario() {

        this._inputData.value = "";
        this._inputQuantidade.value = "1";
        this._inputValor.value = "0";

        this._inputData.focus();

    }
}