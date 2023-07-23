// cypress/e2e/categoryTest.js

describe('Category Test', () => {
    it('Validate Items in Subcategories', () => {
        // Log In
        cy.visit('/')
        cy.contains('Log in').click()
        cy.get('#loginusername').type('lahunakbal')
        cy.get('#loginpassword').type('password123')
        cy.contains('Log in').click()

        // Go to main categories level page (category tab on left)
        cy.contains('Categories').click()

        // Get all main categories
        cy.get('.list-group-item').each(($category) => {
            const categoryName = $category.text().trim()

            // Click on each main category to go to sub-category level
            cy.wrap($category).click()

            // Validate that main category level page contains all items from subcategories
            cy.get('.card-title').each(($item) => {
                const itemName = $item.text().trim()
                cy.contains(itemName).should('be.visible')
            });

            // Go back to main categories level
            cy.go('back')

        })

    })

});
