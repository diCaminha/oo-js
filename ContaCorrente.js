import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    this._sacarComTaxa(1, valor);
  }
}
