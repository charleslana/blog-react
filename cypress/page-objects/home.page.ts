export class HomePage {
  url = '/';

  validatePageHome(): string {
    return `${Cypress.config().baseUrl}${this.url}`;
  }
}
