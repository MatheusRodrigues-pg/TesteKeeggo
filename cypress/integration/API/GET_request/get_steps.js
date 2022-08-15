import { Given,And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as getApi from '../get';

Given(/^que o request seja feito e nao esta vazio$/, () => {
    
    describe('GET Request', () =>{
        getApi.dados().should((response) => {
            expect(response.body).to.be.not.null;
        })
    });
    
});

When(/^receber o response deve exibir o nome$/, () => {
    describe('GET Request', () =>{
        getApi.dados().should((response) => {
            cy.log(response.body.data.list.name)
        })
    });
});


Then(/^status code deve ser validado$/, () => {
    describe('GET Request', () =>{
        getApi.dados().should((response) => {
            expect(response.status).to.eq(200);
        })
    });
});

