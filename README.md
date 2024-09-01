Repositório de Exemplo de Classes em JavaScript

Este repositório contém exemplos de código em JavaScript que demonstram a criação de classes e compartilhamento em programação orientada a objetos.

O que é aprendido nesse código

Nesse repositório, você aprenderá sobre:

Criação de classes em JavaScript, incluindo construtores, atributos e métodos.
Herança em programação orientada a objetos, onde uma classe pode herdar atributos e métodos de outra classe.
Uso de super() para chamar o construtor da classe pai.
Arquivos do Repositório

Funcionario.js: Contém a classe Funcionariocom atributos e métodos para representar um funcionário.
Gerente.js: Contém uma classe Gerenteque estende a classe Funcionarioe adiciona uma bonificação específica para gerentes.
Como rodar o código

Para rodar o código, você precisará de um ambiente de desenvolvimento JavaScript, como o Node.js. Aqui estão os passos para rodar o código:

Clone o repositório para sua máquina local.
Abra o terminal e navegue até a pasta do repositório.
Execute o comando node Gerente.jspara rodar o código da classe Gerente.
Você pode criar instâncias das classes Funcionarioe Gerentechamar seus métodos para testar o código.
Exemplo de uso

Aqui está um exemplo de como criar uma instância da classe Gerentee chamar seus métodos:
```
const gerente = new Gerente('João', 5000, '123456789');
gerente.cadastrarSenha('minhaSenha');
console.log(gerente.autenticar('minhaSenha')); // true
console.log(gerente._bonificacao); // 1.1
```
