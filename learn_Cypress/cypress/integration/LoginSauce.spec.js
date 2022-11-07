/// <reference types="cypress" />

describe("Test Login of Saucedemolab", function () {
  it("Login with correct credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get(".btn_action").click();
    cy.get(".shopping_cart_link").should("be.visible");
  });

  it("login with incorrect credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_ur");
    cy.get("#password").type("secret_uce");
    cy.get(".btn_action").click();
    cy.get(".error-button").should("be.visible");
  });
});
