import './App.css';
import { Component } from 'react';
import { fetchAllMovies, fetchSingleMovie } from '../../apiCalls';
// import movieData from '../../dummy_data';
import MovieContainer from '../MovieContainer/MovieContainer';
import Navbar from '../Navbar/Navbar';
import SingleMovie from '../SingleMovie/SingleMovie';



class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      singleMovie: null
    }
  }

  componentDidMount() {
    fetchAllMovies()
      .then(movieData => this.setState({ allMovies: movieData.movies }))
  }

  expandView = (id) => {
    fetchSingleMovie(id)
      .then(movieData => {
        this.setState({ singleMovie: movieData.movie })
    })
  }

  goBack = () => {
    this.setState({ singleMovie: null })
  }

  render() {
    return (
      <main className="App">
        <Navbar allMovies={ this.state.allMovies } />
        <div className='Container'>
          <h1>search place holder</h1>
          {this.state.singleMovie && <SingleMovie 
            singleMovie={ this.state.singleMovie } 
            goBack={ this.goBack }
            />}
          {!this.state.singleMovie && <MovieContainer 
            allMovies={ this.state.allMovies }
            expandView={ this.expandView }
          />}
        </div>
      </main>
    )
  }
}

export default App;
