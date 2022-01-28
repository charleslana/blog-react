import { PostsPage } from '../../page-objects/posts.page';

const postsPage = new PostsPage();

describe('Posts page', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl ?? '');
  });

  it('Should be able to navigate to posts', () => {
    postsPage.clickMenuPosts();
    cy.url().should('equal', postsPage.validatePagePosts());
  });

  it('Should be able to search a post', () => {
    postsPage.clickMenuPosts();
    cy.url().should('equal', postsPage.validatePagePosts());
    postsPage.validateLoading();
    cy.get(postsPage.inputSearch).type(postsPage.textSearch);
    cy.get(postsPage.category)
      .first()
      .should('contain.text', postsPage.textSearch);
  });

  it('Should be able to scroll to the bottom of the page and click on the icon to go up the page', () => {
    postsPage.clickMenuPosts();
    cy.url().should('equal', postsPage.validatePagePosts());
    postsPage.validateLoading();
    cy.get(postsPage.footer).scrollIntoView();
    cy.get(postsPage.btnToTop)
      .should('not.be.hidden')
      .click()
      .should('be.hidden');
  });

  it('Should be able to navigate to post details', () => {
    postsPage.clickMenuPosts();
    cy.url().should('equal', postsPage.validatePagePosts());
    postsPage.validateLoading();
    cy.get(postsPage.post).click();
    cy.url().should('equal', postsPage.validatePagePostDetails());
  });
});
