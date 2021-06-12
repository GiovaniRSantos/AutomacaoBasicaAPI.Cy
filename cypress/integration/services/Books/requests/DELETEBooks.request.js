/// <reference types="cypress" />

export {deleteBooks};

function deleteBooks(idBook){
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false
    });
}

