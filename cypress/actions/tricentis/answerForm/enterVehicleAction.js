/// <reference types="Cypress" />

class EnterVehicleAction {
  make(vehicleData) {
    cy.get('#make').select(vehicleData.make);
  }

  model(vehicleData) {
    cy.get('#model').select(vehicleData.model);
  }

  performance(vehicleData) {
    cy.get('#engineperformance').clear().type(vehicleData.performance);
  }

  cylinderCapacity(vehicleData) {
    cy.get('#cylindercapacity').clear().type(vehicleData.cylinderCapacity);
  }

  dateOfManufacture(vehicleData) {
    cy.get('#dateofmanufacture').clear().type(vehicleData.dateManufacture);
  }

  numberOfSeats(vehicleData) {
    cy.get('#numberofseats').select(vehicleData.numberOfSeats);
  }

  numberOfSeatsMotorCycle(vehicleData) {
    cy.get('#numberofseatsmotorcycle').select(
      vehicleData.numberOfSeatsMotorCycle
    );
  }

  fuelType(vehicleData) {
    cy.get('#fuel').select(vehicleData.fuelType);
  }

  payload(vehicleData) {
    cy.get('#payload').clear().type(vehicleData.payload);
  }

  totalWeight(vehicleData) {
    cy.get('#totalweight').clear().type(vehicleData.totalWeight);
  }

  listPrice(vehicleData) {
    cy.get('#listprice').clear().type(vehicleData.listPrice);
  }

  licenseNumber(vehicleData) {
    cy.get('#licenseplatenumber').clear().type(vehicleData.licenseNumber);
  }

  mileage(vehicleData) {
    cy.get('#annualmileage').clear().type(vehicleData.mileage);
  }

  next() {
    cy.get('#nextenterinsurantdata').click();
  }

  enterVehicleForm(vehicleData) {
    this.make(vehicleData);
    this.model(vehicleData);
    this.performance(vehicleData);
    this.cylinderCapacity(vehicleData);
    this.dateOfManufacture(vehicleData);
    this.numberOfSeats(vehicleData);
    this.numberOfSeatsMotorCycle(vehicleData);
    this.fuelType(vehicleData);
    this.payload(vehicleData);
    this.totalWeight(vehicleData);
    this.listPrice(vehicleData);
    this.licenseNumber(vehicleData);
    this.mileage(vehicleData);
    this.next();
  }
}
export default new EnterVehicleAction();
