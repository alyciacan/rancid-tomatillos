import './App.css';
import { Component } from 'react';
import movieData from './dummy_data';
import MovieContainer from './MovieContainer';
import Navbar from './Navbar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData.movies
    }
  }
  render() {
    return (
      <main className="App">
        {console.log(this.state.allMovies[0])}
        <h1>Rancid Tomatillos</h1>
        <Navbar />
        <MovieContainer allMovies={ this.state.allMovies }
        />
      </main>
    )
  }
}

export default App;
