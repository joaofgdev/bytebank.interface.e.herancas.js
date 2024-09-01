// Exporta a classe Cliente para que possa ser utilizada em outros arquivos
export class Cliente {
    // Define um getter para a propriedade cpf, que retorna o valor de _cpf
    get cpf() {
      // Retorna o valor de _cpf
      return this._cpf;
    }
  
    // Construtor da classe Cliente, chamado quando um novo objeto é criado
    constructor(nome, cpf, senha) {
      // Atribui o valor de nome ao atributo nome do objeto
      this.nome = nome;
      // Atribui o valor de cpf ao atributo _cpf do objeto
      this._cpf = cpf;
      // Atribui o valor de senha ao atributo _senha do objeto
      this._senha = senha;
    }
  
    // Método autenticar, que atualmente retorna sempre true
    autenticar() {
      // Retorna true, indicando que a autenticação foi bem-sucedida
      return true;
    }
  }