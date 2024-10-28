import React, { useEffect, useState } from "react";
import dummyData from "../../api/dummy.json";
import OMDBMovieCard from "./OMDBMovieCard";
import { fetchMoviesByGenre } from "../../api/wikipediaMoviesAPI";
import { fetchMovieByTitle } from "../../api/omdbApi";

const MoviesRecommended = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(`genre: ${genre}`);
    let suggestedMovies = fetchMoviesByGenre(genre)


    // console.log(`suggestedMovies: ${suggestedMovies}`);
    fetchAllRecommendedMovies(suggestedMovies);
  }, []);
  const fetchRandomMovies = () => {
    let fastMovies = dummyData?.fast?.Search;
    let starMovies = dummyData?.star?.Search;

    fastMovies = fastMovies.length > 6 ? fastMovies.slice(0, 4) : fastMovies;
    starMovies = starMovies.length > 6 ? starMovies.slice(0, 4) : starMovies;
    Math.random() > 0.5 ? setMovies(starMovies) : setMovies(fastMovies);
  };
  const fetchAllRecommendedMovies = async (wikipediaMovies) => {

    let resMovies = [];
    for (let movie of wikipediaMovies) {
        if (resMovies.length >= 4) break;
        let fetchedMovie;

            fetchedMovie = await fetchMovieByTitle(movie.title);
        if (fetchedMovie.Response === "False") continue;
        resMovies.push(fetchedMovie);
    }

   
      setMovies(resMovies);
    
}


  
  return (
    <div className="container">
        <div className="row">
            
    <h2 className="movie__recommended--title">Recommended Movies</h2>
    <div className="movie__recommended--wrapper">
      {movies.map((movie) => {
        return (
          <OMDBMovieCard key={movie.imdbID} movie={movie} />
        )
      })}
    
        </div>
    </div>
  </div>
  )
};

export default MoviesRecommended;
