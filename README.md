**Teste desafio** trata-se de um repositório de automação de testes E2E, utilizando o framework cypress.io

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

## 🔧 Instalação

Realizar a instalação do Node (LTS) em seu ambiente de trabalho

<a href="https://nodejs.org/en/download/" target="_blank"> <img src="https://nodejs.org/static/images/logo.svg" alt="node" width="80" height="80"/> </a>

Realizar a instalação do Visual Studio Code em seu ambiente de trabalho

<a href="https://code.visualstudio.com/download" target="_blank"> <img src="https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode" width="80" height="80"/> </a>

Realizar a instalação do gerenciador de pacotes _YARN_ atráves do gerenciador de pacotes NPM:

```bash
npm install --global yarn
```

# ⚙️ Executando os testes

## Como executar os testes automatizados.

### 🔩 Instalar os pacotes para a execução do projeto

Esse comando ira permitir instalar todos os pacotes utilizados na automação

abra o terminal na pasta raiz do projeto e execute

```bash
yarn install
```

### 🔩 Executar o Cypress em modo interface

Após realizar a instalação dos pacotes esse comando ira permitir abrir o cypress em modo interface

abra o terminal na pasta raiz do projeto e execute

```bash
yarn cypress open
```

### 🔩 Executar o Cypress em modo headless

Após realizar a instalação dos pacotes esse comando ira permitir abrir o cypress em modo headless

abra o terminal na pasta raiz do projeto e execute

```bash
yarn cypress run
```

# 🛠️ Construído com

## Ferramentas utilizadas para o desenvolvimento

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress) - Framework de Automação
- [Yarn](https://classic.yarnpkg.com/en/) - Gerenciador de Pacotes
- [Eslint](https://eslint.org/) - Ferramenta de análise de código
- [Prettier](https://prettier.io/) - Ferramenta de formatação de código
