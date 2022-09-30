/// <reference types="Cypress" />

class HomePageAction {
  tricentisPage() {
    cy.intercept('http://sampleapp.tricentis.com/101/app.php').as('page');
    cy.visit('http://sampleapp.tricentis.com/101/app.php');
    cy.wait('@page');
  }
}
export default new HomePageAction();
