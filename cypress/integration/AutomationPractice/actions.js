/// <reference types="cypress" />

function validarUrl(url){
    return cy.url().should('eq', url);
}

function clickContains(text){
    return cy.contains(text).click()
}

function escrever(element,text){
    return cy.get(element).type(text)
}

function submitBtn(form){
    return cy.get(form).submit()
}

function screenshotHere(path){
    return cy.screenshot(path)
}

function validarExibicaoCarrinho(contains){
    return cy.get('tbody').contains(contains).should('be.visible')
}

function validarExibicao(contains){
    return cy.get('body').contains(contains).should('be.visible')
}

function scrollToElement(element){
    return cy.get(element).scrollIntoView().should('be.visible')
}

function scrollToElementContains(text){
    return cy.contains(text).scrollIntoView()
}
export {
    validarUrl,
    clickContains,
    escrever,
    submitBtn,
    screenshotHere,
    validarExibicao,
    validarExibicaoCarrinho,
    scrollToElement,
    scrollToElementContains
  };