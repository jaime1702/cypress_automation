/// <reference types="Cypress" />

class SendQuoteAction {
  email(sendQuoteData) {
    cy.get('#email').clear().type(sendQuoteData.email);
  }

  phone(sendQuoteData) {
    cy.get('#phone').clear().type(sendQuoteData.phone);
  }

  userName(sendQuoteData) {
    cy.get('#username').clear().type(sendQuoteData.userName);
  }

  password(sendQuoteData) {
    cy.get('#password').clear().type(sendQuoteData.password);
    cy.get('#confirmpassword')
      .clear()
      .type(sendQuoteData.password, { log: false });
  }

  comments(sendQuoteData) {
    cy.get('#Comments').clear().type(sendQuoteData.comments);
  }

  sendQuoteForm(sendQuoteData) {
    this.email(sendQuoteData);
    this.phone(sendQuoteData);
    this.userName(sendQuoteData);
    this.password(sendQuoteData);
    this.comments(sendQuoteData);
  }
}
export default new SendQuoteAction();
