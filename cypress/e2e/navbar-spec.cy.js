describe('nav bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
   }
  )
  it('shows a list of the genres available', () => {
    cy.get('.genreList').children('li')
  })
  it('populates with the genres from the API movie data', () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401/movie", {
      id: 337401,
      title: "Mulan",
      poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      release_date: "2020-09-04",
      overview: "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
      genres: [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy"
      ],
      budget: 200000000,
      revenue: 57000000,
      runtime: 115,
      tagline: "",
      average_rating: 5.1
      })
      .get('.genreList').contains("Action")
    }
  )
})