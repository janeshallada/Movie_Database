import {useEffect, useState} from 'react'
import {fetchMovies} from '../utils/api'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const Popular = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchMovies('/movie/popular', page).then(data => setMovies(data.results))
  }, [page])

  return (
    <>
      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default Popular
