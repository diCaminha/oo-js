import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  constructor(saldoInicial, cliente, agencia) {
    super(saldoInicial, cliente, agencia);
  }

  sacar(valor) {
    let taxa = 1.0;
    const valorASacar = valor * taxa;
    if (this._saldo >= valorASacar) {
      this._saldo -= valorASacar;
      return valorASacar;
    }
  }
}
