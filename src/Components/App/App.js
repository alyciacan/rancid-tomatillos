import './App.css';
import { Component } from 'react';
import { fetchAllMovies, fetchSingleMovie } from '../../apiCalls';
import Navbar from '../Navbar/Navbar';
import MovieContainer from '../MovieContainer/MovieContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: null,
      genresList: [],
      error: ''
    }
  }

  getGenres = () => {
    this.state.allMovies.forEach(film => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${film.id}`)
        .then(resp => resp.json())
        .then(data => { data.movie.genres.filter(genre => {
          if(!this.state.genresList.includes(genre)) {
            this.setState({ genresList: [...this.state.genresList, genre] })
          }
          return this.state.genresList
        })
      })
    })
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movieData => this.setState({ allMovies: movieData.movies }))
      .then(() => this.getGenres())
      .catch(error => this.setState({ error: error.message }))
  }

  expandView = (id) => {
    fetchSingleMovie(id)
      .then(movieData => this.setState({ singleMovie: movieData.movie }))
      .catch(error => this.setState({ error: error.message }))
  }

  goBack = () => {
    this.setState({ singleMovie: null })
  }

  render() {
    return (
      <main className="App">
        <Navbar getGenres={ this.getGenres } genresList={ this.state.genresList }/>
        <div className='Container'>
          <h1>search place holder</h1>
          {this.state.singleMovie && <SingleMovie 
            singleMovie={ this.state.singleMovie } 
            goBack={ this.goBack }
            />}
          {((!this.state.singleMovie && !this.state.error) && 
            <MovieContainer 
              allMovies={ this.state.allMovies }
              expandView={ this.expandView } 
            />) || (this.state.error && <Error />)
          }
        </div>
      </main>
    )
  }
}

export default App;
