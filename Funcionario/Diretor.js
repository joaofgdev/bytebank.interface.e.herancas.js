// Importa a classe Funcionario do arquivo Funcionario.js
import { Funcionario } from "./Funcionario.js";

// Exporta a classe Diretor, que estende a classe Funcionario
export class Diretor extends Funcionario {
  // Construtor da classe Diretor, que chama o construtor da classe Funcionario
  constructor(nome, salario, cpf) {
    // Chama o construtor da classe Funcionario, passando os parâmetros nome, salario e cpf
    super(nome, salario, cpf);
    // Define a bonificação específica para diretores
    this._bonificacao = 2;
  }
}