const apiKey = "fdbbfd20";
let requestURL = `https://www.omdbapi.com/?apikey=${apiKey}&`;

// function to append the query to the base URL
function appendToBaseURL(query) {
    requestURL = `https://www.omdbapi.com/?apikey=${apiKey}&${query}`;
    return requestURL;
}

// function to fetch the movies from the API
async function fetchMovies() {
  const response = await fetch(requestURL);
  return await response.json();
}

// function to fetch the movie details from the API
async function fetchMovieDetails(id) {
  const response = await fetch(appendToBaseURL(`i=${id}`));
  return await response.json();
}

export { fetchMovies, fetchMovieDetails, appendToBaseURL };
