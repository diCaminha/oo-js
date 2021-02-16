export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldoInicial = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor) {
    let taxa = 1;
    this._sacarComTaxa(taxa, valor);
  }

  _sacarComTaxa(taxa, valor) {
    const valorASacar = valor * taxa;
    if (this._saldo >= valorASacar) {
      this._saldo -= valorASacar;
      return valorASacar;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
