import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from '../actions';

Given(/^que eu acesse ao site automation practice$/, () => {
    cy.visit("http://automationpractice.com/index.php")
    user.screenshotHere('../../Screen1')
});

When(/^inserir o primeiro Produto ao carrinho de compras$/, () => {
    user.scrollToElement(".tab-content")
    user.clickContains('Faded Short Sleeve T-shirts')
    user.clickContains('Add to cart')
    user.screenshotHere('../../Screen2')
    cy.get('#layer_cart', { timeout: 20000 }).contains('Continue shopping').should('be.visible')
    user.clickContains('Continue shopping')
    cy.get('#header_logo').click()

    
});

And(/^adicionar o segundo produto ao carrinho de compras$/, () => {
    user.scrollToElement(".tab-content")
    user.clickContains('Printed Summer Dress')
    user.clickContains('Add to cart')
    user.screenshotHere('../../Screen3')
    cy.get('body', { timeout: 20000 }).contains('Proceed to checkout').should('be.visible')
    
});

And(/^avancar ate a tela de pagamento$/, () => {
    user.clickContains('Proceed to checkout')
    cy.scrollTo(0, 1000)
    cy.get('.cart_navigation > a > span').click()
    user.escrever('#email',"teste2021@teste.com.br")
    user.escrever('#passwd',"teste")
    cy.get("#SubmitLogin").click()
    user.screenshotHere('../../Screen3')
    cy.scrollTo(0, 1000)
    cy.get('button[name="processAddress"]').click()
    cy.get('[type="checkbox"]').first().check()
    cy.scrollTo(0, 1000)
    cy.get('button[name="processCarrier"]').click()    
});

Then(/^os itens devem ser exibidos corretamente no carrinho na tela de pagamento$/, () => {
    user.validarExibicaoCarrinho("Faded Short Sleeve T-shirts")
    user.validarExibicaoCarrinho("$16.51")
    user.validarExibicaoCarrinho("Printed Summer Dress")
    user.validarExibicaoCarrinho("$28.98")
    cy.get('tfoot').contains("$47.49").should('be.visible')
});

