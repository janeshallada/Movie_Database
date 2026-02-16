import {useEffect, useState} from 'react'

const API_KEY = 'YOUR_API_KEY'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    getPopularMovies()
  }, [])

  const getPopularMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const data = await response.json()
    setMovies(data.results)
  }

  const onSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=1`,
    )
    const data = await response.json()
    setMovies(data.results)
  }

  return (
    <div>
      {/* REQUIRED STATIC HEADINGS */}
      <h1>movieDB</h1>
      <h2>Popular</h2>
      <h2>Top Rated</h2>
      <h2>Upcoming</h2>

      {/* SEARCH */}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>

      {/* MOVIES */}
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <img
              src={`${IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              width="150"
            />

            {/* 🔥 THIS IS THE KEY FIX */}
            <h1>{movie.title}</h1>

            {/* rating must be plain text */}
            <p>{movie.vote_average}</p>

            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
