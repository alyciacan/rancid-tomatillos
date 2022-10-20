import './Navbar.css';

const Navbar = (props) => {
  const genresList = ['Action', 'Adventure', 'Drama', 'Fantasy', 'Thriller', 'Comedy', 'Crime', 'Horror', 'Romance', 'Animation', 'Family', 'Music', 'Western', 'Science Fiction', 'War', 'History' ]
  const genres = genresList.sort().map(genre => {
    return <li className="genre">{genre}</li>
  })
  return (
    <div className='navbar'>
        <h1 className='appTitle'>Rancid Tomatillos</h1>
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