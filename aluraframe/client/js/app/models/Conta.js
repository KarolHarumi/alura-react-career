class Conta {

    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }

    atualiza(taxa) {

        throw new Error('Nao deve chamar o metodo sem ter uma classe filha');
        
    }

}