import './App.css';
import { Component } from 'react';
import { fetchAllMovies, fetchSingleMovie } from '../../apiCalls';
import Navbar from '../Navbar/Navbar';
import MovieContainer from '../MovieContainer/MovieContainer';
import SingleMovie from '../SingleMovie/SingleMovie';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      allMovies: [],
      singleMovie: null,
      error: '',
      filteredMovies: []
    };
  }

  filterSearch = (searchTerm) => {
    this.setState({ filteredMovies: this.state.allMovies.filter(movie => 
       movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) })

  }

  componentDidMount = () => {
    fetchAllMovies()
      .then(movieData => this.setState({ allMovies: movieData.movies }))
      .catch(error => this.setState({ error: error.message }));
  }

  expandView = (id) => {
    fetchSingleMovie(id)
      .then(movieData => this.setState({ singleMovie: movieData.movie }))
      .catch(error => this.setState({ error: error.message }));
  };

  goBack = () => {
    this.setState({ singleMovie: null });
  };

  slidesToShow = () => {
    const numFilteredMovies = this.state.filteredMovies.length;
    return (numFilteredMovies < 4 && numFilteredMovies > 0 ? numFilteredMovies : 4)
  }

  render() {
    return (
      <main className="App">
      <Navbar filterSearch={ this.filterSearch } />
        <Switch>
          <Route
            exact path='/' 
            render={ () => (
              <div className='Container'>
                  <MovieContainer
                    allMovies={ !this.state.filteredMovies.length 
                      ? this.state.allMovies 
                      : this.state.filteredMovies }
                    slidesToShow={ this.slidesToShow }
                  />
              </div>
            ) }>
          </Route>
          <Route
            path='/:id'
            render={ ({ match }) => {
              return (
              <div className="Container">
                  <SingleMovie
                    id={ match.params.id }
                    singleMovie={ this.state.singleMovie }
                    goBack={ this.goBack }
                    expandView={ this.expandView }
                  />
              </div>
    )} }>
          </Route>
        </Switch>
      </main>
    );
  }
};

export default App;
