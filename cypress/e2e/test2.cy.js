// cypress/e2e/phoneCartTest.js

describe('Phone Cart Test', () => {
    it('Log in, Add Phones to Cart, Remove Item, and Place Order', () => {
        // Log In
        cy.visit('/');
        cy.contains('Log in').click();
        cy.get('#loginusername').type('your_username');
        cy.get('#loginpassword').type('your_password');
        cy.contains('Log in').click();
        // Go to Phones
        cy.contains('Phones').click();
        // Click on Any phone
        cy.get('.card-title').first().click();
        // Add to cart
        cy.contains('Add to cart').click();
        // Go to another phone and add it to cart
        cy.go('back');
        cy.get('.card-title').eq(1).click();
        cy.contains('Add to cart').click();
        // Go to cart and remove one item
        cy.get('#cartur').click();
        cy.contains('Delete').first().click();
        // Place order and populate modal
        cy.contains('Place Order').click();
        cy.get('#name').type('John Doe');
        cy.get('#country').type('United States');
        cy.get('#city').type('New York');
        cy.get('#card').type('1234567890');
        cy.get('#month').type('07');
        cy.get('#year').type('2025');
        cy.contains('Purchase').click();
        // Validate that the order was successful (optional)
        cy.contains('OK').click();
    });
});
