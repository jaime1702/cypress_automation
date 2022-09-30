/// <reference types="Cypress" />

class EnterInsurantAction {
  firstName(insurantData) {
    cy.get('#firstname').clear().type(insurantData.firstName);
  }

  lastName(insurantData) {
    cy.get('#lastname').clear().type(insurantData.lastName);
  }

  birthdate(insurantData) {
    cy.get('#birthdate').clear().type(insurantData.birthdate);
  }

  gender(insurantData) {
    cy.get(insurantData.gender).parent().click();
  }

  streetAddress(insurantData) {
    cy.get('#streetaddress').clear().type(insurantData.streetAddress);
  }

  country(insurantData) {
    cy.get('#country').select(insurantData.country);
  }

  zipCode(insurantData) {
    cy.get('#zipcode').clear().type(insurantData.zipCode);
  }

  city(insurantData) {
    cy.get('#city').clear().type(insurantData.city);
  }

  occupation(insurantData) {
    cy.get('#occupation').select(insurantData.occupation);
  }

  hobbies(insurantData) {
    cy.get(insurantData.hobbies).parent().click();
  }

  webSite(insurantData) {
    cy.get('#website').clear().type(insurantData.webSite);
  }

  picture() {
    cy.get('#picturecontainer').attachFile('imagemTeste.jpg');
  }

  next() {
    cy.get('#nextenterproductdata').click();
  }

  enterInsurantForm(insurantData) {
    this.firstName(insurantData);
    this.lastName(insurantData);
    this.birthdate(insurantData);
    this.gender(insurantData);
    this.streetAddress(insurantData);
    this.country(insurantData);
    this.zipCode(insurantData);
    this.city(insurantData);
    this.occupation(insurantData);
    this.hobbies(insurantData);
    this.webSite(insurantData);
    this.picture();
    this.next();
  }
}
export default new EnterInsurantAction();
