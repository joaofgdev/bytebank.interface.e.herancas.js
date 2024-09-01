// Importa a classe Conta do arquivo Conta.js
import { Conta } from "./Conta.js";

// Exporta a classe ContaPoupanca, que estende a classe Conta
export class ContaPoupanca extends Conta {
  // Construtor da classe ContaPoupanca, que chama o construtor da classe Conta
  constructor(saldoInicial, cliente, agencia) {
    // Chama o construtor da classe Conta, passando os parâmetros saldoInicial, cliente e agencia
    super(saldoInicial, cliente, agencia);
  }

  // Método sacar, que sobrescreve o comportamento do método sacar da classe Conta
  sacar(valor) {
    // Define a taxa de saque para contas poupança
    const taxa = 1.02;
    // Chama o método _sacar da classe Conta, passando a taxa de saque
    return this._sacar(valor, taxa);
  }
}