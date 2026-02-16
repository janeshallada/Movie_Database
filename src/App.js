import {useEffect, useState, useCallback} from 'react'

const API_KEY = '1234567890abcdef1234567890abcdef'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const getPopularMovies = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
    const data = await response.json()
    setMovies(data.results)
  }, [page])

  useEffect(() => {
    getPopularMovies()
  }, [getPopularMovies])

  const onSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${page}`,
    )
    const data = await response.json()
    setMovies(data.results)
  }

  const onClickNext = () => {
    setPage(prevPage => prevPage + 1)
  }

  const onClickPrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1)
    }
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
            <h1>{movie.title}</h1>
            <p>{movie.vote_average}</p>
            <button type="button">View Details</button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          margin: '20px',
        }}
      >
        <button type="button" onClick={onClickPrev} disabled={page === 1}>
          Prev
        </button>

        <p>{page}</p>

        <button type="button" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default App
