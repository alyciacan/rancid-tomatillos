describe('main page view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
   }
  )
  it('has the name of the app', () => {
   cy.contains('Rancid Tomatillos')
  })

  it('contains a navbar', () => {
    cy.get('.navbar').contains('Browse By Genre')
    cy.get('.genreList').contains('Action')
  })

  it('contains a movie container', () => {
    cy.get('.movieContainer').find('.movieCard')
  })

  it('displays movie titles in each card', () => {
    cy.get('.movieContainer').find('h2')
  })
})

