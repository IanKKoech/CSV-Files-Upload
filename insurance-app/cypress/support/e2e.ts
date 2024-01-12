import './commands';

before(() => {
  cy.log('before all tests');
  cy.login();
});
