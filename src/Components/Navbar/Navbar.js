import './Navbar.css';

const Navbar = (props) => {
  const genres = props.genresList.sort().map(genre => {
    return <li>{genre}</li>
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