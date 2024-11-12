import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { faBars, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { fetchMovies, fetchMovieDetails } from "../../api/omdbApi";
import dummyData from "../../api/dummy.json";
import OMDBMovieCard from "../components/OMDBMovieCard";
import MovieNotFound from "../components/MovieNotFound";
import Skeleton from "../UI/Skeleton";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [movieFound, setMovieFound] = useState(false);

  const moviesParam = useParams();
  // console.log(moviesParam);

  const FILTERS = {
    LATEST: "LATEST",
    OLDEST: "OLDEST",
  };

  useEffect(() => {


    if (moviesParam.query && moviesParam.query !== "undefined") {

      searchMovie();

      return;
    }
    let fastMovies = dummyData?.fast?.Search;
    let starMovies = dummyData?.star?.Search;
    // let avengersMovies = dummyData?.avengers?.Search;

    // console.log(fastMovies);
    // console.log(starMovies);

    fastMovies = fastMovies.length > 8 ? fastMovies.slice(0, 8) : fastMovies;
    starMovies = starMovies.length > 8 ? starMovies.slice(0, 8) : starMovies;

    // harryPotterMovies = harryPotterMovies.length > 12 ? harryPotterMovies.slice(0, 12) : harryPotterMovies;
    Math.random() > 0.5 ? setMovies(starMovies) : setMovies(fastMovies);


  }, []);

  async function searchMovie() {
  
    const searchQuery = search || moviesParam.query;
    const newUrl = `/movies/search/${encodeURIComponent(searchQuery)}`;
    window.history.replaceState({}, "", newUrl);
    setLoading(true);
    const resMovies = await fetchMovies(searchQuery);
    if (resMovies.Response === "True") {
      let resMoviesDetailed = await Promise.all(
        resMovies.Search.map((movie) => fetchMovieDetails(movie.imdbID))
      );
      resMoviesDetailed =
        resMoviesDetailed.length > 8
          ? resMoviesDetailed.slice(0, 8)
          : resMoviesDetailed;
      setMovies(resMoviesDetailed);
    } else {
      setMovieFound(false);
      setMovies([]);
    }
    setLoading(false)
  }
  function filterMovies(e) {
    setFilter(e.target.value);
    switch (filter) {
      case FILTERS.OLDEST:
        movies.sort((a, b) => b.Year - a.Year);
        break;
      case FILTERS.LATEST:
        movies.sort((a, b) => a.Year - b.Year);
        break;
    }
  }

  return (
    <>
      <section id="landing__movie">
        <NavBar theme={"white"}></NavBar>
        <header className="header header__movie">
          <div className="row">
            <div className="header__container">
              <div className="header__browser--container">
                <input
                  type="text"
                  placeholder="Search by Name"
                  className="header__browser"
                  onChange={(e) => setSearch(e.target.value)}
                />

                <button className="btn bg--yellow" onClick={searchMovie}>
                  Browse Movies
                </button>
              </div>
            </div>
          </div>
        </header>
      </section>

      <section id="movies">
        <div className="container">
          <div className="row">
            <div className="movies__search">
              <h2 className="movies__search--title">
                Search for movies in the search bar{" "}
                <span className="spinner__container">
                  {loading && (
                    <FontAwesomeIcon icon={faSpinner} className="fa-spinner" />
                  )}
                </span>
              </h2>

              <select
                name="Pimba"
                id="filter"
                onChange={(e) => filterMovies(e)}
              >
                <option value="filter" selected disabled>
                  Filter
                </option>
                <option value="LATEST">Latest</option>
                <option value="OLDEST">Oldest</option>
              </select>
            </div>
            <div className="movies--container">
             {loading ? (<> {console.log(`loading`)}
             {Array.from({length: 8}).map((_, index) => (
            <Skeleton key={index} width={`250px`} height={`382px`} borderRadius={`4%`}></Skeleton>
             ))}
             </>) : (<>
              {movies.length === 0 ? (
                <MovieNotFound />
              ) : (
                <>
                  {movies.map((movie) => {
                    return <OMDBMovieCard key={movie.imdbID} movie={movie} />;
                  })}
                </>
              )}
             </>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
