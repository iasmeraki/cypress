//plano de testes

const { it } = require("mocha")

describe('devFinance', () => {
    //seguir o fluxo da aplicação 
    //mapear os elementos 
    //descrever as interações com cypress
    //adicionar as asserções(expect's) que forem necessárias 

    //suite de testes

    it('cadastrar entradas', () => {
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#transition .button').click()
        cy.get('#description').type('Mesada')
        cy.get('[name+amount]').type('120')
        cy.get('[type=date]').type('2024-07-24')
        cy.get('.button').contains('Salvar').click
    })

    it('cadastrar saídas', () => {
        cy.visit('https://dev-finance.netlify.app/')
        cy.get('#transition .button').click()
        cy.get('#description').type('Restaurante')
        cy.get('[name+amount]').type('-120')
        cy.get('[type=date]').type('2024-07-24')
        cy.get('.button').contains('Salvar').click
    })
})