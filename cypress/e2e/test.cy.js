// Tests for each possible e2e routes of a user

describe("Navigation", () => {
  it("should be navigate all pages from nav bar", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href*="/clothes-condition/donate"]').click();
    cy.url().should("include", "clothes-condition/donate");
    // cy.get('h2').contains('Donate') ---- uncomment after we have added h2
    cy.get('a[href*="/clothes-condition/recycle"]').click();
    cy.url().should("include", "clothes-condition/recycle");
    // cy.get('h2').contains('Recycle') ---- uncomment after we have added h2
    cy.get('a[href*="/mend-options/diy"]').click();
    cy.url().should("include", "mend-options/diy");
    cy.get("h2").contains("DIY");
    cy.get('a[href*="/mend-options/tailors"]').click();
    cy.url().should("include", "mend-options/tailors");
    // cy.get('h2').contains('Tailors') ---- uncomment after we have added h2
  });
});

describe("Long way to DIY", () => {
  it("can go from home to DIY via button and search to filter", () => {
    cy.visit("http://localhost:3000");
    // ADD: click on the care and repair button (will be easier once we have an image to target)
    // THEN: remove the cy.visit on the line below
    cy.visit("http://localhost:3000/mend-options");
    cy.url().should("eq", "http://localhost:3000/mend-options");
    cy.get('[alt="Annimation of pink thread with a needle"]').click();
    cy.url().should("include", "mend-options/diy");
    cy.get("h2").contains("DIY");
    cy.get("input").type("Shoe");
    cy.get("form").submit();
    cy.get("p").contains("Repair a shoe sole").click();
    cy.url().should("include", "www.youtube.com/watch?v=IdM-a8be7QM");
  });
});

describe("Long way to Tailors", () => {
  it("can go from home to Tailors via button and search", () => {
    cy.visit("http://localhost:3000");
    // ADD: click on the care and repair button (will be easier once we have an image to target)
    // THEN: remove the cy.visit on the line below
    cy.visit("http://localhost:3000/mend-options");
    cy.url().should("eq", "http://localhost:3000/mend-options");
    cy.get('[alt="Annimation of blue jeans and a yellow t-shirt"]').click();
    cy.url().should("include", "mend-options/tailors");
    // cy.get("h2").contains("DIY");
    // cy.get("input").type("n4 2rb");
    // cy.get("form").submit();
    // grab a piece of text newly rendered on the page
    // check the map is there?
  });
});

// describe("Long way to Recyle", () => {
//   it("can go from home to Recyle via button and search", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

// describe("Long way to Donate", () => {
//   it("can go from home to Donate via button and search", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

// Test the breadcumbs!
