describe("Cypress", () => {
  beforeEach(()=> {
    cy.visit('/');
  })
  it('is working', ()=> {
    expect(true).to.equal(true);
  })

  it('can visit the home page', ()=> {
  });
});