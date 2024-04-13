describe('Display results', ()=> {
    it('displays results from an API', ()=> {
        cy.visit('/');

        cy.intercept('GET', '**/search*', {fixture: 'itunes'})
        .as('getSearch');

        cy.get('.search__form')
        .find('input')
        .type('Daft Punk')
        .should('have.value','Daft Punk');

        cy.get('.spinner')
        .should('be.visible');

        cy.wait('@getSearch')
        .get('main')
        .contains('Human After All')
        .should('be.visible');

        cy.contains('Explicit')
        .click();

        cy.get('article.album')
        .should('not.contain', 'Daft Club');
        
    })
})