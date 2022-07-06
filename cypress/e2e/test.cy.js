// Tests for each possible e2e routes of a user

// describe("Navigation", () => {
//   it("should be navigate all pages from nav bar", () => {
//     cy.visit("http://localhost:3000");
//     cy.get('a[href*="/clothes-condition/donate"]').click();
//     cy.url().should("include", "clothes-condition/donate");
//     cy.get("h2").contains("Donate");
//     cy.get('a[href*="/clothes-condition/recycle"]').click();
//     cy.url().should("include", "clothes-condition/recycle");
//     cy.get("h2").contains("Recycle");
//     cy.get('a[href*="/mend-options/diy"]').click();
//     cy.url().should("include", "mend-options/diy");
//     cy.get("h2").contains("DIY");
//     cy.get('a[href*="/mend-options/tailors"]').click();
//     cy.url().should("include", "mend-options/tailors");
//     cy.get("h2").contains("Tailors");
//   });
// });

// describe("Long way to DIY", () => {
//   it("can go from home to DIY via button and search to filter", () => {
//     cy.visit("http://localhost:3000");
//     cy.get(
//       '[alt="cartoon of a pair of jeans with a belt and a t-shirt with a smiley face, slighty worn condition"]'
//     ).click();
//     cy.url().should("eq", "http://localhost:3000/mend-options");
//     cy.get('[alt="Annimation of pink thread with a needle"]').click();
//     cy.url().should("include", "mend-options/diy");
//     cy.get("input").type("Shoe");
//     cy.get("form").submit();
//     cy.get("p").contains("Repair a shoe sole").click();
//    // Is there a way to if a new tab has been opened?
//   });
// });

describe("Long way to Tailors", () => {
  it("can go from home to Tailors via button and search", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="cartoon of a pair of jeans with a belt and a t-shirt with a smiley face, slighty worn condition"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/mend-options");
    cy.get('[alt="Annimation of blue jeans and a yellow t-shirt"]').click();
    cy.url().should("include", "mend-options/tailors");
    cy.get("input").type("n4 2rb");
    cy.get("form").submit();
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
