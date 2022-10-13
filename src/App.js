import './App.css';
import { Component } from 'react';
import {movieData} from './dummy_data';
import MovieContainer from './MovieContainer';
import Navbar from './Navbar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: []
    }
  }
  render() {
    return (
      <main className="App">
        <h1>Rancid Tomatillos</h1>
      </main>
    )
  }
}

export default App;
