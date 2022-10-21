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
      error: ''
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
  };

  render() {
    return (
      <main className="App">
        <Switch>
          <Route
            exact path='/'
            render={ () => (
              <div>
                <Navbar
                  getGenres={ this.getGenres }
                  genresList={ this.state.genresList }
                />
                <div className='Container'>
                  <MovieContainer
                    allMovies={ this.state.allMovies }
                  />
                </div>
              </div>
            ) }>
          </Route>
          <Route
            path='/:id'
            render={ ({ match }) => {
              console.log(match);
              return <div>
                <Navbar
                  getGenres={ this.getGenres }
                  genresList={ this.state.genresList }
                />
                <div className='Container'>
                  <h1>search place holder</h1>
                  <SingleMovie
                    id={ match.params.id }
                    singleMovie={ this.state.singleMovie }
                    goBack={ this.goBack }
                    expandView={ this.expandView }
                  />
                </div>
              </div>;
            } }>
          </Route>
          {/* <Navbar
          getGenres={ this.getGenres } 
          genresList={ this.state.genresList }
          />
          <div className='Container'>
            <h1>search place holder</h1>
            { this.state.singleMovie && <SingleMovie
              singleMovie={ this.state.singleMovie }
              goBack={ this.goBack }
            /> }
            { ((!this.state.singleMovie && !this.state.error) &&
              <MovieContainer
                allMovies={ this.state.allMovies }
                expandView={ this.expandView }
              />) || 
            }
          </div> */}
        </Switch>
      </main>
    );
  }
};

export default App;
