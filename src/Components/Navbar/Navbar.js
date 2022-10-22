import './Navbar.css';
import logo from './logo.png';
import { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      searchBar: e.target.value
    })
    this.props.filterSearch(e.target.value)
  }

  clearInput = () => {
    this.setState({ searchBar: ""})
  }

  render() {
    return (
      <div className='navbar'>
          <img src={logo} alt="Rancid Tomatillos logo" className='appTitle' />
          <hr></hr>
          <p>Search by Title:</p>
          <input type="text" value={ this.state.searchBar } onChange={ this.handleChange } />
          <hr></hr>
          <p>Filter by Ratings:</p>
          <select name="ratings">
            <option value="7+">7+</option>
            <option value="5+">5+</option>
            <option value="under 5">4 or less</option>
          </select>
      </div>
    )
  }
};

export default Navbar;