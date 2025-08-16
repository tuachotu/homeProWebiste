import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/product" className="nav-button">
        Product
      </Link>
      <Link to="/team" className="nav-button">
        Team
      </Link>
    </nav>
  )
}

export default Navigation