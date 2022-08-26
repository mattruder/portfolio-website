import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='nav-header'>
        <h1>Matt Ruder</h1>
      </div>
      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/software">Software</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default NavBar
