export {};

describe('navigate to clients page', () => {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('should navigate using the nav link', () => {
    cy.navigate('/clients');
    cy.location('pathname').should('eq', '/clients');
    cy.contains('List all clients').should('be.visible');
    cy.get('input[type=search]').type('lameck{enter}', { delay: 100 });
    cy.contains(/Nyamukapa/i).should('be.visible');
    cy.contains(/view/i).first().click();
    cy.contains(/loan accounts/i).should('be.visible');
    cy.contains(/open loan/i)
      .first()
      .click();
  });
});
