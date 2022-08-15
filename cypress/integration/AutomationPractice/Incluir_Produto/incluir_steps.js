import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from '../actions';

Given(/^que eu acesse ao site automation practice$/, () => {
    cy.visit("http://automationpractice.com/index.php")
    user.screenshotHere('../../Screen1')
});

When(/^selecionar o Produto$/, () => {
    user.scrollToElement(".tab-content")
    user.clickContains('Printed Summer Dress')
    user.screenshotHere('../../Screen2')
});

And(/^na pagina do produto adicionar ao carrinho de compras$/, () => {
    user.clickContains('Add to cart')
    cy.get('body', { timeout: 20000 }).contains('Proceed to checkout').should('be.visible')
    user.clickContains('Proceed to checkout')
    user.screenshotHere('../../Screen3')
});

Then(/^o item deve ser exibido no carrinho de compras$/, () => {
    user.validarExibicaoCarrinho("Printed Summer Dress")
    user.validarExibicaoCarrinho("$28.98")
});

