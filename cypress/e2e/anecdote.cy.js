describe('template spec', () => {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Anecdotes')
  })
})