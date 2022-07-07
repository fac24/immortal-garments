// Tests for each possible e2e routes of a user

// ✅ ------ PASSING -------
describe("Navigation", () => {
  it("should be navigate all pages from nav bar", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href*="/clothes-condition/donate"]').click();
    cy.url().should("include", "clothes-condition/donate");
    cy.contains("h2", "Donate");
    cy.get('a[href*="/clothes-condition/recycle"]').click();
    cy.url().should("include", "clothes-condition/recycle");
    cy.contains("h2", "Recycle");
    cy.get('a[href*="/mend-options/diy"]').click();
    cy.url().should("include", "mend-options/diy");
    cy.contains("h2", "DIY");
    cy.get('a[href*="/mend-options/tailors"]').click();
    cy.url().should("include", "mend-options/tailors");
    cy.contains("h2", "Tailors");
  });
});

// ✅ ------ PASSING ------- (but I would like to add a final check new window is opened)
describe("Long way to DIY", () => {
  it("can go from home to DIY via button and search to filter", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="cartoon of a pair of jeans with a belt and a t-shirt with a smiley face, slighty worn condition"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/mend-options");
    cy.get('[alt="Gold needle and thread"]').click();
    cy.url().should("include", "mend-options/diy");
    cy.get("#search").type("Shoe");
    cy.get("form").submit();
    cy.get("p").contains("Repair a shoe sole").click();
    // Is there a way to if a new tab has been opened?
  });
});

// ✅ ------ PASSING -------
describe("Long way to Tailors", () => {
  it("can go from home to Tailors via button and search", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="cartoon of a pair of jeans with a belt and a t-shirt with a smiley face, slighty worn condition"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/mend-options");
    cy.get('[alt="Seamstress sewing green fabric"]').click();
    cy.url().should("include", "mend-options/tailors");
    cy.get("#input").type("n4 2rb");
    cy.get("form").submit({ force: true });
    // these is only renders on a successfull fetch
    cy.contains("witch distance to");
    cy.contains("Show more");
    cy.contains("London");
    // these is only renders on a failed fetch
    cy.get("#input").type("hello testing");
    cy.get("form").submit();
    cy.contains(
      "p",
      "Could not execute search, try specifying a more exact location."
    );
  });
});

// ✅ ------ PASSING -------
describe("Long way to Recyle", () => {
  it("can go from home to Recyle via button and search", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="Cartoon of a pink t-shirt with a while heart in good contion half inside a yellow box"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/clothes-condition");
    cy.get('[alt="a tatted a blue jumper with sewn on patches"]').click({
      force: true,
    });
    cy.url().should("include", "clothes-condition/recycle");
    cy.get("#search").type("n4 2rb");
    cy.get("form").submit();
    //these is only renders on a successfull fetch
    cy.contains("p", "London");
    cy.contains("London");
    // these is only renders on a failed fetch
    cy.get("#search").type("hello testing");
    cy.get("button").contains("Search").click();
    cy.contains("p", "Oops, something went wrong. Please try again.");
  });
});

// ✅ ------ PASSING -------
describe("Long way to Donate", () => {
  it("can go from home to Donate via button and search", () => {
    cy.visit("http://localhost:3000");
    cy.get(
      '[alt="Cartoon of a pink t-shirt with a while heart in good contion half inside a yellow box"]'
    ).click();
    cy.url().should("eq", "http://localhost:3000/clothes-condition");
    cy.get('[alt="image of a T-shirt and clothes with sparkles"]').click({
      force: true,
    });
    cy.url().should("include", "clothes-condition/donate");
    cy.get("#input").type("n4 2rb");
    cy.get("form").submit();
    // these is only renders on a successfull fetch
    cy.contains("p", "miles");
    cy.contains("p", "London");
    cy.contains("London");
    // these is only renders on a failed fetch
    cy.get("#input").type("hello testing");
    cy.get("form").submit();
    cy.contains(
      "Could not execute search, try specifying a more exact location."
    );
  });
});

// Shall we test the breadcumbs!
