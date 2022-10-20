import './Navbar.css';
import logo from './logo.png';

const Navbar = (props) => {
  const genresList = ['Action', 'Adventure', 'Drama', 'Fantasy', 'Thriller', 'Comedy', 'Crime', 'Horror', 'Romance', 'Animation', 'Family', 'Music', 'Western', 'Science Fiction', 'War', 'History' ]
  const genres = genresList.sort().map(genre => {
    return <li className="genre">{genre}</li>
  })
  return (
    <div className='navbar'>
        <img src={logo} alt="Rancid Tomatillos logo" className='appTitle' />
        <hr></hr>
        <p>Browse By Genre</p>
        <hr></hr>
        <ul className='genreList'>
        { genres }
        </ul>
    </div>
  )
};

export default Navbar;