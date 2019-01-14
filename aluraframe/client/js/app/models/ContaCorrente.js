class ContaCorrente extends Conta {


    atualiza(taxa) {

        // ContaCorrente soma taxa ao saldo
        this._saldo = this._saldo + taxa;

    }

}