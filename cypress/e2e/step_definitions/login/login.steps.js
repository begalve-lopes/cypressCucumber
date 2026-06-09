import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import pageLogin from "../../../support/pages/login/index";

Given("Acessar a pagina de login", () => {
  pageLogin.go();
});

When(
  "Preencher o campo email {string} e password {string}",
  (email, password) => {
    pageLogin.form(email, password);
  },
);

When("clico no botão Entrar", () => {
  pageLogin.submit();
});

Then("devo visualizar a página inicial com a mensagem {string}", (message) => {
  pageLogin.shouldBeLoggedIn(message);
});


When("clicar no botão Sair", () => {
  pageLogin.logout();
});

Then("visualisa a pagina e o titulo {string}", (texto) => {
  pageLogin.shouldBeLoggedOut(texto);
});

Then("devo visualizar a mensagem de erro {string}", (message) => {
  pageLogin.shouldShowError(message);
});