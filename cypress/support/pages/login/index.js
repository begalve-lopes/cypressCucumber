// cypress/support/pages/login/index.js
export default {
  // 🔹 ABRIR PÁGINA (robusto contra page load timeout)
  go() {
    cy.visit("https://practicetestautomation.com/practice-test-login/", {
      failOnStatusCode: false,
      timeout: 120000,
    });

    cy.get("#username", { timeout: 15000 }).should("be.visible");
  },

  // 🔹 PREENCHER FORMULÁRIO
  form(email, password) {
    cy.get("#username").should("be.visible").clear().type(email);

    cy.get("#password").should("be.visible").clear().type(password);
  },

  // 🔹 SUBMIT LOGIN
  submit() {
    cy.get("#submit").should("be.visible").click();
  },

  // 🔹 LOGIN SUCESSO
  shouldBeLoggedIn(message) {
    cy.get(".post-title").should("be.visible").and("have.text", message);
  },

  // 🔹 MENSAGEM DE ERRO (LOGIN INVÁLIDO)
  shouldShowError(message) {
    cy.contains(message).should("be.visible");
  },

  // 🔹 LOGOUT
  logout() {
    cy.contains("Log out").should("be.visible").click();
  },

  // 🔹 VALIDAÇÃO PÓS-LOGOUT (título ou página)
  shouldBeLoggedOut(title) {
    cy.get("h2").should("be.visible").and("have.text", title);
  },
};
