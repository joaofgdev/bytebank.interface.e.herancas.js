// Importa a classe Conta do arquivo Conta.js
import { Conta } from "./Conta.js";

// Exporta a classe ContaCorrente, que estende a classe Conta
export class ContaCorrente extends Conta {
  // Atributo estático que armazena o número de contas correntes criadas
  static numeroDeContas = 0;

  // Construtor da classe ContaCorrente, que chama o construtor da classe Conta
  constructor(cliente, agencia) {
    // Chama o construtor da classe Conta, passando o saldo inicial como 0
    super(0, cliente, agencia);
    // Incrementa o número de contas correntes criadas
    ContaCorrente.numeroDeContas += 1;
  }

  // Método sacar, que sobrescreve o comportamento do método sacar da classe Conta
  sacar(valor) {
    // Define a taxa de saque para contas correntes
    let taxa = 1.1;
    // Chama o método _sacar da classe Conta, passando a taxa de saque
    return this._sacar(valor, taxa);
  }
}