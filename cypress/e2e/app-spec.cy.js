describe('Rancid Tomatillos Testing', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'allMovies' });
    cy.visit('http://localhost:3000/');
  });

  it('should display the main page on load', () => {
    cy.get('.appTitle');
    cy.get('.navbar');
    cy.get('[data-cy="movie-container"]');
    cy.get('[data-cy="movie-card"]');
  });

  it('should display a nav bar with an app logo', () => {
    cy.get('.navbar').find('.appTitle');
  });

  it('should have search options', () => {
    cy.get('.navbar').contains('Search by Title');
    cy.get('.navbar').find('input');
    cy.get('.navbar').find('button');
    cy.get('.navbar').contains('Filter by Ratings');
    cy.get('.navbar').find('select');
  });

  it('should have a container of movie cards with movie image and title', () => {
    cy.get('[data-cy="movie-card"]').should('be.visible');
    cy.get('[data-cy="movie-card"]').find('img');
    cy.get('[data-cy="movie-container"]').should('be.visible');
    cy.get('[data-cy="single-movie"]').should('not.exist');
  });

  it('should show a single movies details when you click on a movie card', () => {
    cy.get('[data-index="1"] > :nth-child(1) > a > [data-cy="movie-card"]').click();
    cy.get('[data-cy="single-movie"]').should('be.visible');
    cy.get('[data-cy="movie-container"]').should('not.exist');
    cy.get('[data-cy="movie-card"]').should('not.exist');
    cy.get('.Container').find('.poster');
    cy.get('.Container').contains('Mulan');
    cy.get('.Container').contains('Runtime');
    cy.get('.Container').contains('Adventure');
    cy.get('.Container').find('.backArrow');
  });

  it('should update the url when on a single movies details view', () => {
    cy.url('http://localhost:3000/337401');
  });

  it('should return to the main page view when you click on the back arrow', () => {
    cy.get('[data-index="1"] > :nth-child(1) > a > [data-cy="movie-card"]').click();
    cy.get('.backArrow').click();
  });
})

