# 🚀 Rocket Fit

Projeto de e-commerce desenvolvido com **Vite + React + TypeScript + Tailwind CSS + pnpm**. 
O site permite navegação SPA (Single Page Application) rápida e fluida, com funcionalidades como busca de produtos, categorias, carrinho de compras, favoritos e login de usuário (front-end).

---

## 🌐 Demo Online

O projeto está hospedado e disponível para acesso em: 
[https://rocket-fit-xi.vercel.app/](https://rocket-fit-xi.vercel.app/)

---

## 📸 Funcionalidades

* 🛍️ Lista de produtos com detalhes individuais
* 🛒 Carrinho de compras usando Context API (estado global)
* ❤️ Sistema de favoritos
* 🔍 Busca de produtos por nome e por categoria
* 📂 Filtro por categorias com dropdown no menu
* 👤 Página de login (frontend)
* **✅ Cobertura de Testes E2E (BDD):** Testes de comportamento para o fluxo principal do carrinho.
* 🧭 Navegação SPA (Single Page Application)
* 📱 Interface responsiva com Tailwind CSS

---

## ⚙️ Tecnologias usadas

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router DOM](https://reactrouter.com/)
* [pnpm](https://pnpm.io/)
* [Lucide Icons](https://lucide.dev/)
* **Cypress:** Para automação de testes End-to-End.
* **Cucumber:** Para testes de comportamento (BDD) em Gherkin.

---

## 📚 Passo a passo para rodar o projeto

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ArthurLins00/Rocket-Fit.git](https://github.com/ArthurLins00/Rocket-Fit.git)
    cd Rocket-Fit
    ```

2.  **Instale as dependências:**
    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    pnpm dev
    ```

4.  **Acesse no navegador:**
    `http://localhost:5173` (ou a porta que o Vite informar)

---

## 🚀 Execução dos Testes E2E (BDD)

Os testes automatizados verificam o fluxo de adicionar itens ao carrinho.

1.  **Mantenha o servidor rodando** (`pnpm dev`) no primeiro terminal.
2.  **Inicie o Cypress:** Abra um novo terminal na raiz do projeto e execute:
    ```bash
    npx cypress open
    ```
3.  **Execute o Teste:** Na janela do Cypress, selecione **E2E Testing** e clique no arquivo `carrinho.feature`.

---

## Feito por [Arthur Borba Lins](https://www.linkedin.com/in/arthur-lins-1695b222b/)
