/// <reference types="cypress" />
import EnterVehicleAction from '../../../actions/tricentis/answerForm/enterVehicleAction';
import EnterInsurantAction from '../../../actions/tricentis/answerForm/enterInsurantAction';
import EnterProductAction from '../../../actions/tricentis/answerForm/enterProductAction';
import SelectPriceAction from '../../../actions/tricentis/answerForm/selectPriceAction';
import SendQuoteAction from '../../../actions/tricentis/answerForm/sendQuoteAction';
import '@testing-library/cypress/add-commands';
import EnterVehicle from '../../../factories/answerForm/enterVehicleFactories';
import EnterInsurant from '../../../factories/answerForm/enterInsurantFactories';
import EnterProduct from '../../../factories/answerForm/enterProductFactories';
import SelectPrice from '../../../factories/answerForm/selectPriceFactories';
import SendQuote from '../../../factories/answerForm/sendQuoteFactories';

And(/^I fill in the required fields during the steps.$/, () => {
  EnterVehicleAction.enterVehicleForm(EnterVehicle.vehicleData);
  EnterInsurantAction.enterInsurantForm(EnterInsurant.insurantData);
  EnterProductAction.enterProductForm(EnterProduct.productData);
  SelectPriceAction.selectPriceForm(SelectPrice.selectPriceData);
  SendQuoteAction.sendQuoteForm(SendQuote.sendQuoteData);
});

When(/^I click send.$/, () => {
  cy.send();
});

Then(/^I can see success message.$/, () => {
  cy.findByText('Sending e-mail success!').should('be.visible');
});
