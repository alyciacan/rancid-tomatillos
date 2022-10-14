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
  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
        <Navbar />
        {this.state.singleMovie && <SingleMovie singleMovie={ this.state.singleMovie } />}
        <MovieContainer allMovies={ this.state.allMovies }
        />
      </main>
    )
  }
}

export default App;
