```mermaid
graph TD;
    ET[Estratégia de Testes] --> FT[Fases de Testes];
    ET[Estratégia de Testes] --> PA[Plataformas Alvo];
    ET[Estratégia de Testes] --> AT[Abordagem de Testes];
    ET[Estratégia de Testes] --> TIT[Tipos de Testes];
    ET[Estratégia de Testes] --> TT[Técnicas de Testes];
    ET[Estratégia de Testes] --> PP[Padrões e Politícas];
    ET[Estratégia de Testes] --> FF[Ferramentas e Frameworks];
    PA[Plataformas Alvo] --> WEB[Web]
    PA[Plataformas Alvo] --> API[API]
    PA[Plataformas Alvo] --> MOBILE[Mobile]
    AT[Abordagem de Testes] --> UX[Manual para Exploratório e UX]
    AT[Abordagem de Testes] --> AR[Automatizado para regressão]
    FT[Fases de Testes] --> PJ[Planejamento]
    FT[Fases de Testes] --> DG[Design]
    FT[Fases de Testes] --> EXEC[Execução]
    FT[Fases de Testes] --> RR[Relatório e Reteste]
    FT[Fases de Testes] --> AC[Automação Contínua]
    TIT[Tipos de Testes] --> USAB[Usabilidade]
    TIT[Tipos de Testes] --> FUNC[Funcional]
    TIT[Tipos de Testes] --> CD[Carga e Desempenho]
    TIT[Tipos de Testes] --> REG[Regressão]
    TIT[Tipos de Testes] --> EXP[Exploratório]
    TT[Técnicas de Testes] --> AVL[Analise do Valor Limite]
    TT[Técnicas de Testes] --> BR[Baseadas em requisitos]
    TT[Técnicas de Testes] --> PDE[Partição de Equivalência]
    TT[Técnicas de Testes] --> TESTE[Testes Exploratórios]
    PP[Padrões e Politícas] --> DDP[Definição de Pranto]
    PP[Padrões e Politícas] --> CAB[Critérios de aceitação baseados em histórias de usuários]
    PP[Padrões e Politícas] --> GHE[Uso de Gherkin]
    FF[Ferramentas e Frameworks] --> JIRA[Jira: Gestão do Projeto]
    FF[Ferramentas e Frameworks] --> CY[Cypress: Testes Web / API automatizados]
    FF[Ferramentas e Frameworks] --> WEBIO[Webdriver.IO: Testes Mobile automatizados]
    FF[Ferramentas e Frameworks] --> POST[Postman: Testes de API manual]
    FF[Ferramentas e Frameworks] --> SAUCE[SauceLabs: Device cloud]
    FF[Ferramentas e Frameworks] --> APPIUM[Appium Inspector: Inspecionador de elementos para a aplicação mobile]
    FF[Ferramentas e Frameworks] --> JENK[Jenkins: CI/CD]

