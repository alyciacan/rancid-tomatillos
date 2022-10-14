import './App.css';
import { Component } from 'react';
import movieData from './dummy_data';
import MovieContainer from './MovieContainer';
import Navbar from './Navbar';
import SingleMovie from './SingleMovie';



class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies,
      singleMovie: null
    }
  }

  expandView = (id) => {
    this.setState({
      singleMovie: this.state.allMovies.find(movie => movie.id === id)
    })
  }

  goBack = () => {
    this.setState({ singleMovie: null })
  }

  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        <Navbar />
        {this.state.singleMovie && <SingleMovie 
          singleMovie={ this.state.singleMovie } 
          goBack={ this.goBack }
          />}
        {!this.state.singleMovie && <MovieContainer 
          allMovies={ this.state.allMovies }
          expandView={ this.expandView }

        />}
      </main>
    )
  }
}

export default App;
