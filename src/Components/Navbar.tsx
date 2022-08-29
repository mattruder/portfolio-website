import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-header'>
      <Link className='navlink' to="/"><h1>Matt Ruder</h1></Link>

      </div>
      <div className='nav-links'>


        <Link className='navlink' to="/"><p>Home</p></Link>
        <Link className='navlink' to="/music"><p>Music</p></Link>
        <Link className='navlink' to="/software"><p>Software</p></Link>
        <Link className='navlink' to="/contact"><p>Contact</p></Link>


      </div>
    </div>
  )
}

export default NavBar
