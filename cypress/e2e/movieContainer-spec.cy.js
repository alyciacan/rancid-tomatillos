import { click } from '@testing-library/user-event/dist/click';
import ids from '../fixtures/ids';
describe('movie container', () => {
  beforeEach(() => {
    let movies = [{
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      title: "Money Plane",
      average_rating: 6.875,
      release_date: "2020-09-29"
      },
      {
      id: 337401,
      poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      title: "Mulan",
      average_rating: 5.1,
      release_date: "2020-09-04"
      },
      {
      id: 718444,
      poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
      title: "Rogue",
      average_rating: 7.333333333333333,
      release_date: "2020-08-20"
      }]
    
    cy.visit('http://localhost:3000/')
  })
  it('contains movie cards', () => {
    cy.get('.movieContainer').contains('Money Plane')
  })

  it('populates the movie cards based on retrieved API data', () => {
    cy.get('.movieContainer').contains("Money Plane")
    })
  
  it('should be able to navigate the user to a single movie view', () => {
    cy.get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]')
    .click()
    cy.get('.movie-details').should('be.visible')
    cy.get('.movieCard').should('not.exist')
    
  })
})
