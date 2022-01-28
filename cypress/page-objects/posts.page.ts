export class PostsPage {
  btnToTop = '.to-top';
  category = '.category';
  footer = 'footer';
  inputSearch = 'input';
  noResult = '.text-center';
  post = '[href="/posts/3"]';
  textNoResult = 'Nenhum resultado encontrado.';
  textSearch = 'linux';
  url = '/posts';

  clickMenuPosts(): void {
    cy.get('ul.d-flex > :nth-child(2) > a').click();
  }

  validateLoading(): void {
    cy.get('.text-center').should('be.visible');
    cy.get('.text-center').should('not.exist');
  }

  validatePagePostDetails(): string {
    return `${Cypress.config().baseUrl}${this.url}/3`;
  }

  validatePagePosts(): string {
    return `${Cypress.config().baseUrl}${this.url}`;
  }
}
