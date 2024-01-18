describe("Display Mock Results", ()=> {
  beforeEach(()=> {
    cy.visit('/')
  })
  it('displays results from a mock API', ()=> {
    cy.intercept('GET', '**/search*', {fixture: 'itunes'})
    .as('getSearch');

    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // get the spinner that should be visible when waiting on result
    cy.get('.spinner')
     .should('be.visible');

    //wait while the search results come back and then verify them
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');
    cy.contains('Explicit')
      .click()
      
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  })
})