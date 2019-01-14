class ContaPoupanca extends Conta {

    atualiza(taxa) {
     
        // ContaPoupanca somando o dobro da taxa
        this._saldo = this._saldo + (taxa * 2);

    }

}