describe('Display Results', () => {
    it('display results from an API', () => {
        // visit the home page
        cy.visit('/');

        // intercept the GET request and provide the fixture as a response
        cy.intercept('GET', '**/search*', { fixture: 'itunes'})
        .as('getSearch')

        // type in the search field
        cy.get('.search__form')
        .find('input')
        .type('Daft Punk')
        .should('have.value', 'Daft Punk')

        // get the spinner that should be visible
        cy.get('.spinner')
        .should('be.visible')

        // wait while the search results come back then verify them
        cy.wait('@getSearch')
        .get('main')
        .contains('Homework')
        .should('be.visible')

        cy.contains('Explicit')
        .click();

        cy.get('article.album')
        .should('not.contain', 'Daft Club');

    })
})