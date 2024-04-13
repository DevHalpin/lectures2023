describe('Cypress', ()=> {
    it('is working', ()=> {
        expect(true).to.be.equal(true);
    });
    it('can visit the home page', () => {
        cy.visit('http://localhost:8765');
    })
});