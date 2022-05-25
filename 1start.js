
describe('login', () => {
    beforeEach(() => { 
        cy.visit('https://diag.nstst.net/')
    })

    it('entering', () => {
     const Company = 'TTTTT'
     const Login = 'Administrator'
     const Password = 'YXmWwM8R'

     cy.get('form > :nth-child(1) > input').type(`${Company}`)   
     cy.get(':nth-child(2) > input')  
       .type(`${Login}`)  
     cy.get(':nth-child(3) > input')  
       .type(`${Password}{enter}`)
     //cy.get(':nth-child(6) > button').click()
    // cy.get('.login-version-link > a').should('have.text','Go to new version with 2 fields >>')
     //cy.get(':nth-child(3) > .product > .auth-checkbox').click()
     
     /*cy.get(':nth-child(3) > .item').click()
     cy.get('[data-interval="7"]').click()
     cy.get('[data-interval="30"]').click()
     cy.get('[data-interval="30"]').click()
     cy.get('[data-interval="180"]').click()
     */
    })
})