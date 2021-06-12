/// <reference types="cypress" />

export {changeBooks};

const payloadChangeBook = require('../payloads/change-book.json')


function changeBooks(idBook){
    return cy.request({
        method: 'PUT',
        url:`Books/${idBook}`,
        headers:{
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: payloadChangeBook
    });
}

