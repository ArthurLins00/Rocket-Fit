import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu estou na página inicial do Rocket Fit", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get("img[alt='Rocket Fit Logo']").should("be.visible");
});
// --- Cenário 1: Adicionar Produto ---
When("eu clico no produto {string}", (nomeProduto: string) => {
  cy.contains(nomeProduto).scrollIntoView();
  cy.wait(1000);
  cy.contains(nomeProduto).click();
});

When("eu clico no botão {string}", (textoBotao: string) => {
  cy.wait(1000);
  cy.contains("button", textoBotao).click();
});

Then("o contador do carrinho no menu deve mostrar {string} item", (quantidade: string) => {
  cy.wait(1000);
  cy.get("nav a[href='/cart'] span").should("contain", quantidade);
});

Then("eu devo ver {string} listado na página do carrinho", (nomeProduto: string) => {
  cy.get("nav a[href='/cart']").click();
  cy.wait(1000);
  cy.contains(nomeProduto).should("be.visible");
  cy.wait(1000);
});

// --- Cenário 2: Carrinho Vazio ---
When("eu clico no ícone do carrinho no menu superior", () => {
  cy.wait(1000);
  cy.get("nav a[href='/cart']").click();
});

Then("eu devo ver a mensagem {string}", (mensagem: string) => {
  cy.wait(1000);
  cy.contains(mensagem).should("be.visible");
  cy.wait(1000);
});