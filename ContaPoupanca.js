import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
      this._sacarComTaxa(1.3,valor);
  }
}
