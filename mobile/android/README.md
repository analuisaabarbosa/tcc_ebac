# Projeto de Automação de Testes Mobile para Aplicativo E-commerce
Este projeto foi desenvolvido para realizar automação de testes no aplicativo e-commerce da Ebac, utilizando WebdriverIO, Appium, Appium Inspector e Android Studio. O objetivo principal é validar as funcionalidades Login e Cadastro de Usuários, garantindo a integridade de seu funcionamento no sistema operacional Android.

## Ferramentas Utilizadas

- **WebdriverIO (WDIO):** Framework de automação para execução dos testes. WDIO foi escolhido pela sua flexibilidade, suporte a múltiplas plataformas e integração nativa com ferramentas como Appium.

- **Appium:** Utilizado como a camada de automação para interagir com o aplicativo móvel.

- **Appium Inspector:** Ferramenta que ajuda a inspecionar e interagir com a interface do usuário do aplicativo para identificar elementos e criar scripts de teste mais eficazes.

- **Android Studio:** Ambiente de desenvolvimento integrado (IDE) utilizado para configurar o emulador Android, configurar o Appium e realizar a análise dos logs e relatórios de teste.

## Funcionalidades Testadas

- **Fluxo de Cadastro de Usuário:** Automação do processo de registro de novos usuários no app, testando o cenário positivo.

- **Autenticação:** Testes de login, testando o cenário positivo.

## Estrutura do Projeto

- **test/specs/:** Contém os arquivos de teste, organizados por funcionalidades (login.e2e.js, signUpUser.e2e.js).

- **test/screenobjects/:** Contém as Screen Objects, implementando os elementos da interface e métodos de interação.

- **wdio.conf.js:** Arquivo de configuração do WebdriverIO, com integração ao Android Studio, capacidades de execução em um dispositivo Android, e outras configurações globais.

## Execução dos Testes

Os testes podem ser executados localmente utilizando o Android Studio. Relatórios Allure são gerados automaticamente ao final de cada execução, permitindo a visualização clara dos resultados.
