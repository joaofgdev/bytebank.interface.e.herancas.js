// Classe abstrata Conta, que não deve ser instanciada diretamente
export class Conta {
    // Construtor da classe Conta, que verifica se a classe está sendo instanciada diretamente
    constructor(saldoInicial, cliente, agencia) {
      // Verifica se a classe está sendo instanciada diretamente
      if (this.constructor == Conta) {
        // Se a classe está sendo instanciada diretamente, lança um erro
        throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
      }
  
      // Atribui o valor de saldoInicial ao atributo _saldo do objeto
      this._saldo = saldoInicial;
      // Atribui o valor de cliente ao atributo _cliente do objeto
      this._cliente = cliente;
      // Atribui o valor de agencia ao atributo _agencia do objeto
      this._agencia = agencia;
    }
  
    // Setter para o atributo cliente, que verifica se o novo valor é uma instância de Cliente
    set cliente(novoValor) {
      // Verifica se o novo valor é uma instância de Cliente
      if (novoValor instanceof Cliente) {
        // Se o novo valor é uma instância de Cliente, atribui-o ao atributo _cliente do objeto
        this._cliente = novoValor;
      }
    }
  
    // Getter para o atributo cliente, que retorna o valor do atributo _cliente do objeto
    get cliente() {
      // Retorna o valor do atributo _cliente do objeto
      return this._cliente;
    }
  
    // Getter para o atributo saldo, que retorna o valor do atributo _saldo do objeto
    get saldo() {
      // Retorna o valor do atributo _saldo do objeto
      return this._saldo;
    }
  
    // Método abstrato sacar, que lança um erro se não for implementado por uma classe filha
    sacar(valor) {
      // Lança um erro se o método não for implementado por uma classe filha
      throw new Error("O método Sacar da conta é abstrato")
    }
  
    // Método _sacar, que realiza a lógica de saque de uma conta
    _sacar(valor, taxa) {
      // Calcula o valor a ser sacado com base na taxa
      const valorSacado = taxa * valor;
      // Verifica se o saldo da conta é suficiente para realizar o saque
      if (this._saldo >= valorSacado) {
        // Se o saldo é suficiente, subtrai o valor sacado do saldo da conta
        this._saldo -= valorSacado;
        // Retorna o valor sacado
        return valorSacado;
      }
  
      // Se o saldo não é suficiente, retorna 0
      return 0;
    }
  
    // Método depositar, que adiciona um valor ao saldo da conta
    depositar(valor) {
      // Adiciona o valor ao saldo da conta
      this._saldo += valor;
    }
  
    // Método transferir, que transfere um valor de uma conta para outra
    tranferir(valor, conta) {
      // Realiza o saque do valor da conta atual
      const valorSacado = this.sacar(valor);
      // Deposita o valor sacado na conta destino
      conta.depositar(valorSacado);
    }
  }