// cypress/e2e/phoneCartTest.js

describe('Phone Cart Test', () => {
    it('Log in, Add Phones to Cart, Remove Item, Place Order, and Validate Confirmation Popup', () => {
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
        // Store the charged amount for validation later
        let chargedAmount;
        cy.get('.modal-body').within(() => {
            chargedAmount = Cypress.$('p:nth-child(2)').text().split(':')[1].trim();
        });
        cy.contains('Purchase').click();
        // Validate that the order was successful and information in the confirmation popup is correct
        cy.get('#orderModal').should('be.visible');
        cy.get('#orderModal').within(() => {
            cy.contains('Amount:').should('have.text', `Amount: ${chargedAmount}`);
            cy.contains('Name:').should('have.text', 'Name: John Doe');
            cy.contains('Country:').should('have.text', 'Country: United States');
            cy.contains('City:').should('have.text', 'City: New York');
            cy.contains('Card:').should('have.text', 'Card Number: 1234567890');
        });
        // Close the confirmation popup
        cy.contains('OK').click();
    });
});
