import React from 'react'
import { Link } from 'react-router-dom'

const OMDBMovieCard = ({ movie }) => {
  return (
    
    <Link to={`/movies/${movie.imdbID}`} className="movie">
    <figure className="img__movie--wrapper">
        <img
        src={movie.Poster}
        alt="poster"
        className="img__movie"
        />
    </figure>
    <div className="movie__description--wrapper">

    <h3 className="movie__title">{movie.Title}</h3>
    <p className="movie__description"><b>Year:</b> {movie.Year}</p>
    <p className="movie__description"><b>Type:</b> {movie.Type}</p>
    <p className="movie__description"><b>Director:</b> {movie.Director}</p>
    <p className="movie__description"><b>Actors:</b> {movie.Actors}</p>
    <p className="movie__description"><b>Genre:</b> {movie.Genre}</p>
    </div>

    
    </Link>
    
  )
}

export default OMDBMovieCard