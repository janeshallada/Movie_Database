const API_KEY = '1234567890abcdef1234567890abcdef'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = (endpoint, page = 1) =>
  fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US&page=${page}`,
  ).then(res => res.json())

export const fetchMovieDetails = id =>
  fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`).then(res =>
    res.json(),
  )

export const fetchMovieCast = id =>
  fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`).then(res =>
    res.json(),
  )

export const searchMovies = (query, page = 1) =>
  fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  ).then(res => res.json())
