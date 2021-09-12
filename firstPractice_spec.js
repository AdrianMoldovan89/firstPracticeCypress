/// <reference types="cypress" />

const { multiply } = require("lodash")

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://www.google.com/')
    })
    it('.click() - click on a DOM element', () => {
      cy.contains('Sunt de acord').click({multiple: true})
      cy.get('.RNNXgb').click().type('Banca Transilvania')
      cy.contains('Căutare Google').click()
      cy.contains('Banca Transilvania').click()
      cy.get('.btn-ac').click()
      cy.contains('Carduri').click({force: true})
      cy.get('page title').find('[class="page-title"]').check()
      
    })
})