import { HomePage } from '../../page-objects/home.page';

const homePage = new HomePage();

describe('Home page', () => {
  beforeEach(() => {
    cy.visit(homePage.url);
  });

  it('Should be able to navigate to home', () => {
    cy.url().should('equal', homePage.validatePageHome());
  });
});
