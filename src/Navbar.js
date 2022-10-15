import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1 className='appTitle'>Rancid Tomatillos</h1>
        <hr></hr>
        <p>Browse By Genre</p>
        <hr></hr>
        <ul className='genreList'>
            <li>Action</li>
            <li>Adventure</li>
            <li>Animated</li>
            <li>Comedy</li>
            <li>Crime</li>
            <li>Drama</li>
            <li>Fantasy</li>
            <li>Historical</li>
            <li>Horror</li>
            <li>Musical</li>
            <li>Romance</li>
            <li>Science Fiction</li>
            <li>Thriller</li>
            <li>Western</li>
        </ul>
    </div>
  )
};

export default Navbar;