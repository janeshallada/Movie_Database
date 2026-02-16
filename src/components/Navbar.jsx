import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (search.trim()) navigate(`/search/${search}`)
  }

  return (
    <nav className="navbar">
      <h2>movieDB</h2>

      <div className="nav-links">
        <Link to="/">Popular</Link>
        <Link to="/top-rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming</Link>
      </div>

      <div className="search-box">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  )
}

export default Navbar
