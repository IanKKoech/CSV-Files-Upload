/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>;
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
//       dismiss(
//         subject: string,
//         options?: Partial<TypeOptions>
//       ): Chainable<Element>;
//       visit(
//         originalFn: CommandOriginalFn,
//         url: string,
//         options: Partial<VisitOptions>
//       ): Chainable<Element>;
//     }
//   }
// }

export {};

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add('login', () => {
  cy.visit(Cypress.env('baseUrl'));
  cy.location('pathname').should('eq', '/login');
  cy.get('input[name=email]').type(Cypress.env('email'), { delay: 100 });
  cy.get('.react-select__control')
    .click()
    .type('online{enter}{enter}', { delay: 100 });
  cy.get('input[name=password]').type(Cypress.env('password'), { delay: 100 });
  cy.get('button[type=submit]').click();
  cy.location('pathname').should('eq', '/');

  cy.saveLocalStorage();
});

Cypress.Commands.add('navigate', (path: string) => {
  cy.get(`a[href="${path}"]`).click();
});
