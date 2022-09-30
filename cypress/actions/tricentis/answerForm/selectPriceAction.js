/// <reference types="Cypress" />

class SelectPriceAction {
  selectPrice(selectPriceData) {
    cy.get(selectPriceData.price).parent().click();
  }

  next() {
    cy.get('#nextsendquote').click();
  }

  selectPriceForm(selectPriceData) {
    this.selectPrice(selectPriceData);
    this.next();
  }
}
export default new SelectPriceAction();
