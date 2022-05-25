describe('history', () => {
    beforeEach(() => { 
        cy.visit('https://diag.nstst.net/')
    })

    it('entering', () => {
        cy.get('form > :nth-child(1) > input')
          .type('TTTTT')   
        cy.get(':nth-child(2) > input')  
          .type('Administrator')  
        cy.get(':nth-child(3) > input')  
          .type('YXmWwM8R')
        cy.get(':nth-child(6) > button').click()
        cy.get(':nth-child(3) > .item').click()
        cy.get('[data-interval="7"]').click()
        cy.get('[data-interval="30"]').click()
        cy.get('[data-interval="30"]').click()
        cy.get('[data-interval="180"]').click()
        
       })
})