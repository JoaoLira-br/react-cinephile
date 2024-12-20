import movies1970 from './movies-1970s.json';
import movies1980 from './movies-1980s.json';
import movies1990 from './movies-1990s.json';
import movies2000 from './movies-2000s.json';
import movies2010 from './movies-2010s.json';
import movies2020 from './movies-2020s.json';

export const fetchMoviesByGenre = (genreString) => {
    // console.log(`genreString: ${genreString}`);

    const allMovies = [
        // ...movies1970,
        // ...movies1980,
        // ...movies1990,
        ...movies2000,
        ...movies2010,
        ...movies2020
    ];

    // const genres = genreString.split(',').map(genre => genre.trim().toLowerCase());
    const genres = genreString.toLowerCase();

    const filteredMovies = allMovies.filter(movie => 
        movie.genres.some(movieGenre => genres.includes(movieGenre.toLowerCase()))
    );
    allMovies.length = 0;

    const shuffledMovies = filteredMovies.sort(() => Math.random() - 0.5);
    console.log(`shuffledMovies length: ${shuffledMovies.length}`);

    return shuffledMovies;
}