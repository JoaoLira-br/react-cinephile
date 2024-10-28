import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import imgTheater from '/assets/denise-jans-2We0jzrMLYc-unsplash.jpg';
import MovieInfo from '../components/MovieInfo';
import { useParams } from 'react-router-dom';
import { fetchMovies, fetchMovieDetails } from "../../api/omdbApi";
import dummyData from "../../api/dummy.json";
import MoviesRecommended from '../components/MoviesRecommended';


const Movie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    // console.log(`id: ${id}`);
    fetchMovie()


  }, [id])
  const fetchMovie = async () => {
    const resMovie = await fetchMovieDetails(id)
    // console.log(`resMovie: ${resMovie.Response}`);
    setMovie(resMovie)

  }
  return (
    <div>
      <NavBar theme={"white"} background={imgTheater}/>
      <MovieInfo movie={movie}/>
      {movie.Genre && <MoviesRecommended genre={movie.Genre} />}
    </div>
  )
}

export default Movie