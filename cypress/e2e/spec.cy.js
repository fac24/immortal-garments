describe('Navigation', () => {
  it('should navigate to the about page', () => {
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

describe('User can search a post code on Recycle page', () => {
cy.visit('https://immortal-garments.vercel.app/recycle')
// fill in the form
// page contains expected output
}
)

describe('User is displayed an error if data cant be fetched on Recycle', () => {
  cy.visit('https://immortal-garments.vercel.app/recycle')
  // fill in the form
 // page contains expected output
}
)
