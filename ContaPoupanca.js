export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    let taxa = 1.5;
    const valorASacar = valor * taxa;
    if (this._saldo >= valorASacar) {
      this._saldo -= valorASacar;
      return valorASacar;
    }
  }
}
