///<reference types='cypress'/>

// Traverse Methods use to get childrens of dom elemant

describe("Intro to travesrse methods", () => {
  it("validate the current page URL", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.url is method to to play with URL adress

    cy.url().should("include", "orangehrmlive");
  });

  it("validate the URL of a a page", () => {
    cy.visit("https://www.amazon.in");
    cy.url().should("include", "amazon");
    cy.url().should("contain", "amazon");
  });

  it("validate The Title of a Page", () => {
    cy.visit("https://www.amazon.in");
    cy.title().should("include", "India");
  });

  it.only("validate the Title of a Page", () => {
    cy.visit("https://www.cricbuzz.com/");
    cy.get("#cricbuzz-plus-main-menu").click();
    cy.url().should("include", "premium-content");
  });

  it.only("to get children of dom element,use the.children()", () => {
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    cy.get(".traversal-breadcrumb").children().should("have.length", 3);
  });

  it.only("to get the first element of dom element,use the.first()", () => {
    cy.get(".traversal-breadcrumb")
      .children()
      .first()
      .should("contain", "Home");
  });
  it.only("to get the last element of dom element,use the.last()", () => {
    cy.get(".traversal-breadcrumb")
      .children()
      .last()
      .should("contain", "Contact Us");
  });

  it.only("to get the  element by index of dom element,use the.eq()", () => {
    cy.get(".traversal-breadcrumb")
      .children()
      .eq(1)
      .should("contain", "About Us");
  });
});
