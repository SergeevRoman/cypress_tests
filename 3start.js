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
        cy.get(':nth-child(13) > .item').click()
        cy.get('.nav > :nth-child(3) > .nav-link').click()
        cy.get('.p-card-content > .p-dropdown > .p-dropdown-label').click()
        cy.get('[aria-label="Deutsch (Deutschland)"]').click()
        cy.get('.p-card-content > .p-text-right > :nth-child(3)').click()
        cy.get(':nth-child(3) > .item').click()
        cy.get('[data-connection-id="c261373e-67f8-4648-ad1c-d10d2448bc48"] > [data-index="0"] > input').click()
        cy.get('.mb-3 > :nth-child(1) > .btn').click()
        cy.get('.dropdown.show > .dropdown-menu > ul > :nth-child(3) > a').click()
        cy.get('[value="true"]').click()

   
    })
})