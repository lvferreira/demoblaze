// cypress/e2e/demoBlazeTest.js

describe('DemoBlaze Test Suite', () => {
  it('Sign Up As A New User', () => {
    // Go to https://www.demoblaze.com/
    cy.visit('/')
    // Sign Up as a new user
    cy.contains('Sign up').click()
    cy.get('#sign-username').type('lahunakbal')
    cy.get('#sign-password').type('password123')
    cy.contains('Sign up').click()
  })

  it('Sign Up As A Duplicate User', () => {
    // Go to https://www.demoblaze.com/
    cy.visit('/')
    // Validate if you try signup with the same user, a modal will appear
    cy.contains('Sign up').click()
    cy.get('#sign-username').type('lahunakbal')
    cy.get('#sign-password').type('password123')
    cy.contains('Sign up').click()
    cy.contains('This user already exists.').should('be.visible')
  })

  it.only('Log in AS A Valid User', () => {
    // Go to https://www.demoblaze.com/
    cy.visit('/')
    // Log In
    cy.get('#login2').click()
    cy.wait(3000)
    cy.get('#loginusername').type('lahunakbal')
    cy.get('#loginpassword').type('password123')
    cy.get("button[onclick='logIn()']", { force: true }).click()
    cy.wait(3000)
    // Log Out
    cy.contains('Log out').click()
  })

  it('Log in As An Invalid User', () => {
    // Go to https://www.demoblaze.com/
    cy.visit('/')
    // Try logging in with an invalid user
    cy.get('#login2').click()
    cy.wait(3000)
    cy.get('#loginusername').type('invaliduser')
    cy.get('#loginpassword').type('invalidpassword')
    cy.contains('Log in').click()
    cy.wait(3000)
    cy.contains('User does not exist.').should('be.visible')
  })

})
