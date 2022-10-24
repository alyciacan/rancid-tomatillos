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
      error: null,
      filteredMovies: [],
      searching: false
    };
  }

  filterByRating = (searchTerm) => {
    return searchTerm === 'All' ? this.state.allMovies : (this.state.allMovies.filter(movie =>
      movie.average_rating >= Number(searchTerm.slice(0, 1))
    ));
  };

  filterByTitle = (searchTerm) => {
    return this.state.allMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  filterSearch = (searchTerm, filterBy) => {
    const movies = filterBy === 'title' ? this.filterByTitle(searchTerm) : this.filterByRating(searchTerm);
    this.setState({ filteredMovies: movies });
    this.setState({ searching: searchTerm });
  };

  componentDidMount = () => {
    fetchAllMovies()
      .then(movieData => this.setState({ allMovies: movieData.movies }))
      .catch(error => this.setState({ error: error.message }));
  };

  expandView = (id) => {
    fetchSingleMovie(id)
      .then(movieData => this.setState({ singleMovie: movieData.movie }))
      .catch(error => this.setState({ error: error.message }));
  };

  goBack = () => {
    this.setState({ singleMovie: null });
    this.setState({ error: null });
  };

  slidesToShow = () => {
    const numFilteredMovies = this.state.filteredMovies.length;
    return (numFilteredMovies < 4 && numFilteredMovies > 0 ? numFilteredMovies : 4);
  };



  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact path='/'
            render={ () => (
              <div className="main-view">
                <Navbar filterSearch={ this.filterSearch } goBack={ this.goBack } />
                <div className='Container'>
                  { !this.state.error
                    ? <MovieContainer
                      moviesToRender={ !this.state.searching
                        ? this.state.allMovies
                        : this.state.filteredMovies }
                      slidesToShow={ this.slidesToShow }
                    />
                    : <Error />
                  }
                </div>
              </div>
            ) }>
          </Route>
          <Route
            path='/:id'
            render={ ({ match }) => (
              <div className="Container">
                { !this.state.error
                  ? <SingleMovie
                    id={ match.params.id }
                    singleMovie={ this.state.singleMovie }
                    goBack={ this.goBack }
                    expandView={ this.expandView }
                  />
                  : <Error />
                }
              </div>
            ) }>
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
