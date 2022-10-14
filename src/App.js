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
      <main className='App'>
        <Navbar />
        <div className='Container'>
          <h1>search place holder</h1>
          <MovieContainer allMovies={ this.state.allMovies }/>
        </div>
      </main>
    )
  }
}

export default App;
