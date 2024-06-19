import products from '../../../__mocks__/products.json';

const productContainerSelector = '[data-testid="product-card"]';
const userAvatarSelector = '[data-testid="usericon"]';
const userAvatarSpinnerSelector = '[data-testid="usericon-spinner"]';
const productCardSelector = '[data-testid="product-card"]';
const productNameSelector = '[data-testid="product-name"]';
const productBuynowSelector = '[data-testid="product-buy-now"]';
const productBuyNowLinkSelector = '[data-testid="product-buy-now-link"]';
const navigationBarSelector = '[data-testid="navigition-bar"]';

describe('Product page', () => {
  beforeEach(() => {
    cy.visit('/en/US/product');
  });

  it('should contain all products', () => {
    // Product container should loaded
    cy.get(productContainerSelector).should('exist');

    //User profile should be loaded
    cy.get(userAvatarSpinnerSelector).should('exist');
    cy.get(userAvatarSelector).should('exist');
    cy.get(userAvatarSpinnerSelector).should('not.exist');

    // product related test
    cy.get(productCardSelector).first().find(productNameSelector);
    cy.get(productCardSelector)
      .first()
      .find(productBuynowSelector)
      .contains('Buy Now');
    cy.get(productCardSelector)
      .first()
      .find(productBuyNowLinkSelector)
      .should('exist');
    cy.get(productCardSelector).should('have.length', products.length);

    //on scroll menu should hide and show
    cy.scrollTo(0, 700);
    cy.wait(500); //Animation delay

    // Menu should be hidden
    cy.get(navigationBarSelector).then($el => {
      if (Cypress.dom.isVisible($el)) {
        throw new Error('Element is not hidden');
      }
    });

    //Menu should be showing
    cy.scrollTo(0, 100);
    cy.wait(500); //Animation delay

    cy.get(navigationBarSelector).then($el => {
      if (!Cypress.dom.isVisible($el)) {
        throw new Error('Element is hidden');
      }
    });
  });
});
