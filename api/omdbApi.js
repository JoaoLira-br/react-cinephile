import { ligatures } from "@fortawesome/free-solid-svg-icons/fa0";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
let requestURL = `https://www.omdbapi.com/?apikey=${apiKey}&`;

// function to append the query to the base URL
function appendToBaseURL(query) {
    requestURL = `https://www.omdbapi.com/?apikey=${apiKey}&${query}`;
    return requestURL;
}
function appendSearchQuery(query) {
    return appendToBaseURL(`s=${query}`);
}
function appendIDQuery(id) {
    return appendToBaseURL(`i=${id}`);
}
function appendTitleQuery(title){
    return appendToBaseURL(`t=${title}`);
}

// function to fetch the movies from the API
export async function fetchMovies(query) {
  // console.log(`fetchMovies ${query}`);
  const response = await fetch(appendSearchQuery(query));
  return await response.json();
}

// function to fetch the movie details from the API
export async function fetchMovieDetails(imdbID) {
  const response = await fetch(appendIDQuery(imdbID));
  return await response.json();
}
export async function fetchMovieByTitle(title){
  try{

    const response = await fetch(appendTitleQuery(title));
    return await response.json();

  }catch(error){
    console.log(`Error: ${error}`);
  }

}


