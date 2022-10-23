import './Navbar.css';
import logo from './logo.png';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
    }
  }
  handleChange = (e) => {
    e.target.id === 'title' && this.setState({
      searchBar: e.target.value
    })
    this.props.filterSearch(e.target.value, e.target.id);
  }

  clearInput = (e) => {
    this.setState({ searchBar: ""});
    this.handleChange(e);
  }

  render() {
    return (
      <div className='navbar'>
          <Link to="/" className='appTitle' onClick={ this.props.goBack } >
            <img src={logo} role="button" alt="Rancid Tomatillos logo" />
          </Link>
          <hr></hr>
          <div className="title-search">
            <p>Search by Title:</p>
            <input type="text" id="title" value={ this.state.searchBar } onChange={ this.handleChange } />
            <button type="button" onClick={ this.clearInput }>Clear</button>
          </div>
          <hr></hr>
          <p>Filter by Ratings:</p>
          <select name="ratings" id="average_rating" onChange={ this.handleChange }>
            <option value="All">All</option>
            <option value="7+">7+</option>
            <option value="5+">5+</option>
            <option value="3+">3+</option>
          </select>
      </div>
    )
  }
};

export default Navbar;