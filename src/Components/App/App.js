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
      error: null
    };
  }

  componentDidMount() {
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
    this.setState({ error: null })
    console.log(this.state.error)
  };

  checkError = () => {
    !this.state.error ? <MovieContainer allMovies={ this.state.allMovies } /> : <Error />
  }

  render() {
    return (
      <main className="App">
      <Navbar goBack={ this.goBack }/>
        <Switch>
          <Route
            exact path='/' 
            render={ () => (
              <div className='Container'>
                {!this.state.error ? <MovieContainer allMovies={ this.state.allMovies } /> : <Error />}
              </div>
            ) }>
          </Route>
          <Route
            path='/:id'
            render={ ({ match }) => {
              return (
              <div className="Container">
                {!this.state.error 
                ?  <SingleMovie
                    id={ match.params.id }
                    singleMovie={ this.state.singleMovie }
                    goBack={ this.goBack }
                    expandView={ this.expandView }
                  /> 
                : <Error />
                }
              </div>
    )}}>
          </Route>
        </Switch>
      </main>
    );
  }
};

export default App;
