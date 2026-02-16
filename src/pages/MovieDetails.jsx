import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {fetchMovieDetails, fetchMovieCast} from '../utils/api'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const [cast, setCast] = useState([])

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie)
    fetchMovieCast(id).then(data => setCast(data.cast))
  }, [id])

  if (!movie) return null

  return (
    <div className="details-page">
      <div className="movie-info">
        <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>⭐ {movie.vote_average}</p>
          <p>⏱ {movie.runtime} mins</p>
          <p>📅 {movie.release_date}</p>
        </div>
      </div>

      <h2>Cast</h2>
      <div className="grid">
        {cast.map(actor => (
          <div key={actor.id} className="cast-card">
            <img src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} />
            <h4>{actor.original_name}</h4>
            <p>{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
