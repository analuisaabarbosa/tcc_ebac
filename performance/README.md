# K6_TEST

Este repositório contém testes de performance utilizando [K6](https://k6.io/), uma ferramenta open-source de teste de carga.

## Estrutura do Repositório

- **`data/`**: Contém os arquivos de dados necessários para os testes, como informações de usuários e parâmetros de configuração.
- **`server/`**: Arquivos e configurações relacionadas ao servidor. Isso pode incluir APIs ou submódulos que são necessários para rodar os testes.
- **`test/`**: Contém os scripts de teste, que são responsáveis por executar os cenários de performance com K6. 
  - **`test/requests/`**: Scripts de requisições para testar endpoints específicos, como login e produtos.
  - **`test/simulations/`**: Scripts de simulação que estruturam os cenários de teste.
  - **`test/dist/`**: Diretório onde os testes compilados ou processados são armazenados.
- **`utils/`**: Funções utilitárias para facilitar a execução dos testes, como funções para gerar URLs base ou manipular respostas de API.
- **`package.json`**: Contém as dependências e scripts para automatizar o processo de execução dos testes com K6.
- **`webpack.config.js`**: Configuração do Webpack para compilar os scripts de teste quando necessário.

## Como Rodar os Testes

Para rodar os testes de performance com K6, siga os seguintes passos:

### Pré-requisitos

1. **Instalar o K6**:
   Se você ainda não tem o K6 instalado, você pode seguir as instruções no [site oficial](https://k6.io/docs/getting-started/installation/).

2. **Instalar as dependências**:
   Caso ainda não tenha as dependências do projeto, basta rodar:

   ```bash
   npm install
   
3. **Rodar Testes Individuais**:
   Você pode rodar os testes de forma individual executando o comando abaixo:

   ```bash
   npm run test:p
   npm run test:c
