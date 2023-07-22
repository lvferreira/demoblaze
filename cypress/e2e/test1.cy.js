// cypress/e2e/demoBlazeTest.js

describe('DemoBlaze Test Suite', () => {
  it('Sign Up, Validate Modal, Log In, Log Out, and Invalid Login', () => {
    // Go to https://www.demoblaze.com/
    cy.visit('/');
    // Sign Up as a new user
    cy.contains('Sign up').click();
    cy.get('#sign-username').type('newuser123');
    cy.get('#sign-password').type('password123');
    cy.contains('Sign up').click();
    // Validate if you try signup with the same user, a modal will appear
    cy.contains('Sign up').click();
    cy.get('#sign-username').type('newuser123');
    cy.get('#sign-password').type('password123');
    cy.contains('Sign up').click();
    cy.contains('This user already exists.').should('be.visible');
    // Log In
    cy.contains('Log in').click();
    cy.get('#loginusername').type('newuser123');
    cy.get('#loginpassword').type('password123');
    cy.contains('Log in').click();
    // Log Out
    cy.contains('Log out').click();
    // Try logging in with an invalid user
    cy.contains('Log in').click();
    cy.get('#loginusername').type('invaliduser');
    cy.get('#loginpassword').type('invalidpassword');
    cy.contains('Log in').click();
    cy.contains('User does not exist.').should('be.visible');
  });
});
