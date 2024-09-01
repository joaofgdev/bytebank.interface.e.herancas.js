// Importa a classe Funcionario do arquivo Funcionario.js
import { Funcionario } from "./Funcionario.js";

// Exporta a classe Gerente, que estende a classe Funcionario
export class Gerente extends Funcionario {
  // Construtor da classe Gerente, que chama o construtor da classe Funcionario
  constructor(nome, salario, cpf) {
    // Chama o construtor da classe Funcionario, passando os parâmetros nome, salario e cpf
    super(nome, salario, cpf);
    // Define a bonificação específica para gerentes
    this._bonificacao = 1.1;
  }
}