/// <reference types="Cypress" />

class EnterProductAction {
  startDate(productData) {
    cy.get('#startdate').clear().type(productData.startDate);
  }
  insuranceSum(productData) {
    cy.get('#insurancesum').select(productData.insuranceSum);
  }
  meritRating(productData) {
    cy.get('#meritrating').select(productData.meritRating);
  }
  damageInsurance(productData) {
    cy.get('#damageinsurance').select(productData.damageInsurance);
  }
  optionalProducts(productData) {
    cy.get(productData.optionalProducts).parent().click();
  }
  courtesyCar(productData) {
    cy.get('#courtesycar').select(productData.courtesyCar);
  }

  next() {
    cy.get('#nextselectpriceoption').click();
  }
  enterProductForm(productData) {
    this.startDate(productData);
    this.insuranceSum(productData);
    this.meritRating(productData);
    this.damageInsurance(productData);
    this.optionalProducts(productData);
    this.courtesyCar(productData);
    this.next();
  }
}
export default new EnterProductAction();
