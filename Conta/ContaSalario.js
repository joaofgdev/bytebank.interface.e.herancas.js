// Importa a classe Conta do arquivo Conta.js
import { Conta } from "./Conta.js";

// Exporta a classe ContaSalario, que estende a classe Conta
export class ContaSalario extends Conta {
  // Construtor da classe ContaSalario, que chama o construtor da classe Conta
  constructor(cliente) {
    // Chama o construtor da classe Conta, passando o saldo inicial como 0, o cliente e a agência 100
    super(0, cliente, 100);
  }

  // Método sacar, que sobrescreve o comportamento do método sacar da classe Conta
  sacar(valor) {
    // Define a taxa de saque para contas salário
    const taxa = 1.01;
    // Chama o método _sacar da classe Conta, passando a taxa de saque
    return this._sacar(valor, taxa);
  }
}