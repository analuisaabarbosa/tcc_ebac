# Testes Automatizados iOS - Fluxo de Compras

Este repositório contém a implementação de uma suíte de testes automatizados para dispositivos iOS, com o objetivo de validar o fluxo de compras de um aplicativo de e-commerce.

## Fluxo de Teste
* Os testes simulam as seguintes etapas no aplicativo iOS:

1. *Login*: O usuário faz login com credenciais válidas.
2. *Acesso à área de busca*: O usuário acessa a área de busca (Browse).
3. *Seleção de produto*: O usuário escolhe um produto da lista e o seleciona.
4. *Adicionar ao carrinho*: O produto é adicionado ao carrinho de compras.
5. *Pagamento*: O usuário vai para a área de pagamento.
6. *Checkout*: O fluxo de checkout é completado.

## Tecnologias Utilizadas
* *WebDriverIO*: Framework para automação de testes de aplicativos móveis.
* *Appium Inspector*: Ferramenta para inspecionar e interagir com elementos.
* *Mocha*: Framework para estruturar e organizar os testes.
* *Sauce Labs*: Plataforma de testes na nuvem para rodar os testes em dispositivos reais.

## Estrutura do Projeto
``` bash
/test
  /screenobjects         # Contém as páginas de teste, que encapsulam elementos e ações
  /specs                 # Contém os testes
/wdio.conf.js            # Configuração do WebDriverIO
/package.json            # Gerenciamento de dependências e scripts
/package-lock.json       # Lock file de dependências
``` 
## Como Executar os Testes
1. Clone o repositório:
``` bash
git clone https://github.com/analuisaabarbosa/mobileIOS_test
```
2. Instale as dependências:
``` bash
npm install
```
3. Rode os testes:
``` bash 
npm test
```

Os testes serão executados no Sauce Labs, utilizando um dispositivo iOS configurado para automação.
