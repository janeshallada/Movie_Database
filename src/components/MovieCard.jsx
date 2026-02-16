import {Link} from 'react-router-dom'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({movie}) => (
  <div className="movie-card">
    <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>⭐ {movie.vote_average}</p>
    <Link to={`/movie/${movie.id}`}>
      <button>View Details</button>
    </Link>
  </div>
)

export default MovieCard
