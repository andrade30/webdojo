
# 📘 Documentação de Testes Automatizados - WebDojo (Cypress)

Este repositório contém os testes automatizados da aplicação **WebDojo**, utilizando o framework [Cypress](https://www.cypress.io/).

## 📂 Estrutura do Projeto

```
WEBDOJO/
├── web/                          # Código da aplicação WebDojo
├── cypress/
│   ├── fixtures/                 # Arquivos de dados simulados (mock)
│   │   ├── cep.json
│   │   ├── consultancy.json
│   │   └── document.pdf
│   ├── support/
│   │   └── actions/
│   │       └── consultancy.actions.js
│   ├── commands.js              # Comandos customizados para Cypress
│   ├── e2e.js                   # Arquivos de testes E2E
│   ├── helper.js                # Funções auxiliares
│   └── utils.js                 # Funções utilitárias
```

## 🚀 Como Executar o Projeto

### 1. Instalação das Dependências

```bash
npm install
```

### 2. Executar a Aplicação Web

A aplicação WebDojo está incluída no mesmo repositório. Para executá-la:

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

---

## 🧪 Executando os Testes

### Testes em modo headless (linha de comando)

```bash
npm run test
```

### Testes com interface gráfica (modo interativo)

```bash
npm run test:ui
```

### Executar testes específicos

#### Login - Desktop
```bash
npm run test:login
```

#### Login - Mobile (viewport simulando dispositivo móvel)
```bash
npm run test:login:mobile
```

---

## 🗂️ Descrição das Pastas

- **fixtures/**: Contém dados estáticos utilizados nos testes (mocks).
- **support/actions/**: Agrupamento de ações reutilizáveis (ex: ações de consultoria).
- **commands.js**: Customização de comandos do Cypress.
- **e2e.js**: Entrada principal dos testes end-to-end.
- **helper.js**: Funções auxiliares para facilitar a escrita dos testes.
- **utils.js**: Funções utilitárias reutilizadas entre os testes.

---

## 📄 Dependências Relevantes

Certifique-se de que os seguintes pacotes estão instalados:

- `cypress`
- `serve` (para rodar a aplicação com `npm run dev`)

Instale com:

```bash
npm install cypress serve --save-dev
```

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias nos testes ou estrutura! Para isso, crie uma branch e envie um pull request.
