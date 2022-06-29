describe('Navigation bar', () => {
  it('checks the links on the nav bar', () => {
    // Visit landing page
    cy.visit('https://immortal-garments.vercel.app/')
    // Click on the donate tab
    cy.get('a[href*="donate"]').click()
    // The new url should include "/donate"
    cy.url().should('include', '/donate')
    // The loaded page should contain an h1 with "something" ADD HERE
    // Repeat for all nav links
    cy.get('a[href*="recycle"]').click()
    cy.url().should('include', '/recycle')
    // The loaded page should contain an h1 with "something" ADD HERE
    cy.get('a[href*="diy"]').click()
    cy.url().should('include', '/diy')
    cy.get('a[href*="tailors"]').click()
    cy.url().should('include', '/tailors')
    // The loaded page should contain an h1 with "something" ADD HERE
  })
})