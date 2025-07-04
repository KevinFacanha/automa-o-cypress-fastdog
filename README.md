# 🐶 FastDog Natural Pet — Testes Automatizados com Cypress

Este projeto é uma automação E2E completa da **FastDog Natural Pet**, uma loja virtual de petiscos naturais para cães. Foi desenvolvido com foco em qualidade de software, boas práticas e simulação realista da jornada do usuário.

> 💡 Projeto pessoal criado por mim, **pensando como o cliente**, para garantir que a experiência de compra fosse fluida, funcional e livre de bugs.

---

## 🚀 Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) — Framework de testes E2E
- JavaScript
- Page Object Model (POM)
- VSCode

---

## 🧪 O que está sendo testado?

### ✅ Funcionalidades do Header
- Home
- Produtos (e seus submenus)
- Sobre
- Catálogos (com download de todos)
- Dark Mode
- Favoritos

### ✅ Página Inicial (Home)
- Navegação por categorias: cachorro pequeno, médio e grande
- Botão de chamada “Confira”
- Campo de busca por produto
- Redirecionamento pelo logo
- Link para o Instagram

### ✅ Carrinho de Compras
- Adição de produto
- Aplicação de cupom (válido e inválido)
- Inserção de CEP
- Finalização da compra via botão do WhatsApp

---

## 📁 Estrutura do Projeto

cypress/
├── e2e/
│   └── fastdog/
│       ├── cart.cy.js
│       ├── header.cy.js
│       └── home.cy.js
├── POM/
│   ├── cartPage.js
│   ├── headerPage.js
│   └── homePage.js
├── support/
└── fixtures/

POM/ → Contém as classes com os seletores e métodos organizados por página.

e2e/ → Contém os arquivos de testes Cypress usando os métodos criados nas páginas.

🌐 Links Úteis
🔗 Loja: https://www.fastdognaturalpet.com.br

🧑‍💻 GitHub: https://github.com/seu-usuario/cypress-fastdog

