describe('Text Input', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.search__form')
        .find('input')
        .as('searchField');
    });

    it('accepts text input', ()=> {
        cy.get('@searchField')
        .type('Carrie Underwood', { delay: 100 })
        .should('have.value', 'Carrie Underwood');
    });

    it('can handle backspace', ()=> {
        cy.get('@searchField')
        .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
        .should('have.value', 'Bee Gees');
    })
})