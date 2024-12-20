import React, { useEffect, useState } from "react";
import dummyData from "../../api/dummy.json";
import OMDBMovieCard from "./OMDBMovieCard";
import { fetchMoviesByGenre } from "../../api/wikipediaMoviesAPI";
import { fetchMovieByTitle } from "../../api/omdbApi";
import { fetchRecommendedTitles } from '../../api/flaskAPI';
import Skeleton from "../UI/Skeleton";

const MoviesRecommended = ({ genre, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let suggestedMovies
    const fetchTitles = async (title) => {
      suggestedMovies = await fetchRecommendedTitles(title);
      if(suggestedMovies === undefined || suggestedMovies.length === 0){
        // console.log(title);
        suggestedMovies = fetchMoviesByGenre(genre);
      }

      fetchAllRecommendedMovies(suggestedMovies);
    }
    fetchTitles(title);

  }, []);
 
  const fetchRandomMovies = () => {
    let fastMovies = dummyData?.fast?.Search;
    let starMovies = dummyData?.star?.Search;

    fastMovies = fastMovies.length > 6 ? fastMovies.slice(0, 4) : fastMovies;
    starMovies = starMovies.length > 6 ? starMovies.slice(0, 4) : starMovies;
    Math.random() > 0.5 ? setMovies(starMovies) : setMovies(fastMovies);
  };
  const fetchAllRecommendedMovies = async (movies) => {

    setLoading(true);
    let resMovies = [];
    for (let movie of movies.reverse()) {
      if (resMovies.length >= 4) break;
      let fetchedMovie;

      fetchedMovie = await fetchMovieByTitle(movie.title || movie);
      if (fetchedMovie.Response === "False") continue;
      resMovies.push(fetchedMovie);
    }

    setMovies(resMovies);
    setLoading(false)
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="movie__recommended--title">Recommended Movies</h2>
        <div className="movie__recommended--wrapper">
          {loading ? (<> 
          {new Array(4).fill(0).map((_, index) => (
            <Skeleton key={index} width={`250px`} height={`382px`} borderRadius={`4%`}></Skeleton>

          ))}
          </>) : (<>
          
          {movies.map((movie) => {
            return <OMDBMovieCard key={movie.imdbID} movie={movie} />;
          })}
          </>)}
        </div>
      </div>
    </div>
  );
};

export default MoviesRecommended;
