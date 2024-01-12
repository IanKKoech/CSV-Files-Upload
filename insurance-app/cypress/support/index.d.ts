import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;
      saveLocalStorage(): Chainable<void>;
      restoreLocalStorage(): Chainable<void>;
      navigate(path: string): Chainable<Element>;
    }
  }
}
