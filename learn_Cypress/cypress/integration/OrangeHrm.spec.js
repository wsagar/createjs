/// <reference types="cypress" />

// USE TO ADD NEW COMMAND TO AVOID REPETATIVE CODING
// Cypress.commands.add('COMMAND NAME',()=>{
// details
// })

// Support folder contains commands folder in that commands to be written

describe("valid login details", () => {
  //   it("login with correct credentails", () => {
  //     cy.visit(
  //       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //     );
  //     cy.get('input[name="username"]').type("Admin");
  //     cy.get('input[name="password"]').type("admin123");
  //     cy.get('button[type="submit"]').click();
  //     cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", "PIM");
  //   });

  //   it("login with invalid credentials", () => {
  //     cy.visit(
  //       "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //     );
  //     cy.get('input[name="username"]').type("admin");
  //     cy.get('input[name="password"]').type("Admin123");
  //     cy.get('button[type="submit"]').click();
  //     cy.get(".oxd-alert-content-text").should(
  //       "have.text",
  //       "Invalid credentials"
  //     );
  //   });

  it.only("login with right credentials", () => {
    cy.login("Admin", "admin123");
    cy.get(".oxd-topbar-header-breadcrumb-module").should("have.text", "PIM");
  });

  it.only("Login with wrong details", () => {
    cy.login("admin", "Admin123");
    cy.get(".oxd-alert-content-text").should(
      "have.text",
      "Invalid credentials"
    );
  });
});
