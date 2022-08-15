import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from '../actions';

Given(/^que eu acesse ao site automation practice$/, () => {
    cy.visit("http://automationpractice.com/index.php")
    cy.get('.login', { timeout: 20000 }).should('be.visible')
    user.validarUrl("http://automationpractice.com/index.php")
    user.screenshotHere('../../Screen1')
});

When(/^digitar no campo de busca o item desejado e submeter$/, () => {
    user.escrever('#search_query_top','Faded Short Sleeve T-shirts')
    user.screenshotHere('../../Screen2')
    user.submitBtn('#searchbox')
});

Then(/^o item deve ser exibido na lista de resultados$/, () => {
    user.validarExibicao("Faded Short Sleeve T-shirts")
    user.screenshotHere('../../Screen4')
});