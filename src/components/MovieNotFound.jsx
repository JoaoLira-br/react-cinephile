import React from 'react'

const MovieNotFound = () => {
  return (
    <div className="movies--not-found">
    <figure className="movies__not-found--wrapper">
        <img
            src="/assets/undraw_void_-3-ggu.svg"
            alt="not found"
            className="movies__not-found--img"
            />
    </figure>
  </div>
  )
}

export default MovieNotFound