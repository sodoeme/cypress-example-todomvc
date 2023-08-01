describe('template spec', () => {
  beforeEach(function () {
    // By default Cypress will automatically
    // clear the Local Storage prior to each
    // test which ensures no todos carry over
    // between tests.
    //
    // Go out and visit our local web server
    // before each test, which serves us the
    // TodoMVC App we want to test against
    //
    // We've set our baseUrl to be 
    // which is automatically prepended to cy.visit
    //
    // https://on.cypress.io/api/visit
    cy.visit('http://localhost:8888')
  })


    it('should add three todo items', () => {
    cy.get('.new-todo').type('Make every second count{enter}')
    cy.get('.new-todo').type('Invest in yourself{enter}')
    cy.get('.new-todo').type('Learn Cypress{enter}')
    cy.get('.todo-list').children().should('have.length', 3)
  })





})