describe('My first test', () => {
  it('visit test page and find "type"', () => {
    cy.visit('http://localhost:3000')
    
    cy.contains('Accounts').click()
    cy.url().should('include', '/AccountOverview')
    cy.get('td').contains('TestAccount1').click()
    cy.url().should('include', '/PlanningOverview?accountId=1')
  })
})