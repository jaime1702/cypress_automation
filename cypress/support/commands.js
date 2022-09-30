import 'cypress-file-upload';

Cypress.Commands.add('send', () => {
  cy.get('#sendemail').click();
});
