import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    
    <Link to={`/movie/${movie.id}`} className="movie">
    <figure className="img__movie--wrapper">
        <img
        src={movie.Poster}
        alt="poster"
        className="img__movie"
        />
    </figure>
    <h3 className="movie__title">{movie.Title}</h3>
    <p className="movie__description">{movie.Year}</p>
    <p className="movie__description">{movie.Type}</p>
    <p className="movie__description">{movie.Writer}</p>

    
    </Link>
    
  )
}

export default MovieCard