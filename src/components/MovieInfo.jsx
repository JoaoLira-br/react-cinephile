import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import dummyData from "../../api/dummy.json";


import OMDBMovieCard from "./OMDBMovieCard";


const MovieInfo = ({ movie }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="movie__info--container">
          <figure className="movie__poster--wrapper">
            <img src={movie.Poster} alt="" className="movie__poster--img" />
          </figure>
          <div className="movie__info">
            <h2 className="movie__title">{movie.Title}</h2>
            <p className="movie__description">
              <b>Year:</b> {movie.Year}
            </p>
            <p className="movie__description">
              <b>Rated:</b> {movie.Rated}
            </p>
            <p className="movie__description">
              <b>Released:</b> {movie.Released}
            </p>
            <p className="movie__description">
              <b>Runtime:</b> {movie.Runtime}
            </p>
            <p className="movie__description">
              <b>Genre:</b> {movie.Genre}
            </p>
            <p className="movie__description">
              <b>Director:</b> {movie.Director}
            </p>
            <p className="movie__description">
              <b>Writer:</b> {movie.Writer}
            </p>
            <p className="movie__description">
              <b>Actors:</b> {movie.Actors}
            </p>
            <p className="movie__description">
              <b>Plot:</b> {movie.Plot}
            </p>
            <p className="movie__description">
              <b>Language:</b> {movie.Language}
            </p>
            <p className="movie__description">
              <b>Country:</b> {movie.Country}
            </p>
            <p className="movie__description">
              <b>Awards:</b> {movie.Awards}
            </p>
            <p className="movie__description">
              <b>IMDB Rating:</b> {movie.imdbRating}
            </p>
            <p className="movie__description">
              <b>IMDB Votes:</b> {movie.imdbVotes}
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default MovieInfo;
