// Exporta a classe Funcionario
export class Funcionario {
    // Construtor da classe Funcionario
    constructor(nome, salario, cpf) {
      // Define os atributos da classe Funcionario
      this._nome = nome;
      this._salario = salario;
      this._cpf = cpf;
  
      // Define a bonificação padrão para funcionários
      this._bonificacao = 1;
  
      // Define o atributo senha, que será usado para autenticar o funcionário
      this._senha;
    }
  
    // Método autenticar, que verifica se a senha informada é igual à senha cadastrada
    autenticar(senha) {
      return senha == this._senha;
    }
  
    // Método cadastrarSenha, que permite ao funcionário cadastrar uma senha
    cadastrarSenha(senha) {
      this._senha = senha;
    }
  }