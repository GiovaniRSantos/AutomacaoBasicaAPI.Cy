/// <reference types="cypress" />

export {allBooks};

function allBooks(){
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false
    });
}

