import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from '../actions';

Given(/^que eu acesse ao site automation practice$/, () => {
    cy.visit("http://automationpractice.com/index.php")
    cy.get('.login', { timeout: 20000 }).should('be.visible')
    user.validarUrl("http://automationpractice.com/index.php")
    user.screenshotHere('../../Screen1')
    user.clickContains("Sign in")
});

And(/^depois va para pagina de login$/, () => {
    user.validarUrl("http://automationpractice.com/index.php?controller=authentication&back=my-account")
    user.screenshotHere('../../Screen2')

});

When(/^digitar no respectivos campos de email e senha$/, () => {
    user.escrever('#email',"teste2021@teste.com.br")
    user.escrever('#passwd',"teste")
    user.screenshotHere('../../Screen3')

});

And(/^clicar em Sign in$/, () => {
    cy.get("#SubmitLogin").click()
});

Then(/^login é realizado e pagina de my account é exibida$/, () => {
    user.validarUrl("http://automationpractice.com/index.php?controller=my-account")
    user.screenshotHere('../../Screen4')

});