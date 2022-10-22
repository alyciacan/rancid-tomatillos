describe('main page view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'allMovies' });
    // });
    // cy.fixture('allMovies').then(data => {
    //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', console.log(data.movies));
    // });
    // cy.visit('http://localhost:3000/');
  });

  it('should have the name of the app', () => {
    cy.get('[data-cy="movie-card"]').should('have.length', 5);
  });

  // it('contains a navbar', () => {
  //   cy.get('.navbar').contains('Browse By Genre');
  //   cy.get('.genreList').contains('Action');
  // });

  // it('contains a movie container', () => {
  //   cy.get('.movieContainer').find('.movieCard');
  // });

  // it('displays movie titles in each card', () => {
  //   cy.get('.movieContainer').find('h2');
  // });
})

