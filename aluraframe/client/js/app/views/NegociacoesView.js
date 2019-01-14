class NegociacoesView extends View {

    // Por padrão, quando uma classe herda outra, ela também herda seu construtor, pode remover
    // Existem situacoes em que o constructor eé necessario, porem nao e o caso
    constructor(elemento) {

        super(elemento);

    }

    template(model) {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>

                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join('')}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, n) => total += n.volume, 0.0)}
                    </td>
                </tr>
            </tfoot>
        </table>
        `;

    }

}