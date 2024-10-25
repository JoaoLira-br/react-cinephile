import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { faBars, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchParams, useLocation, useParams } from 'react-router-dom';
import {}


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");

    const moviesParam = useParams();
    console.log(moviesParam);



    console.log(`moviesParam: ${moviesParam}`);
    const FILTERS = {

        OLDEST: "OLDEST",
        NEWEST: "NEWEST",
        RATING: "RATING",
      };


    useEffect(() => {
      if(moviesParam){
        setSearch(moviesParam);
      }
      
        
    }, [])

    function searchMovie(){
        console.log("searchMovie");
    }
    function filterMovies(e){
        console.log(e.target.value);
    }
  return (
    <>
    
    <section id="landing__movie">
      <NavBar theme={"white"}></NavBar>
      <header className="header header__movie">
        <div className="row">
            <div className="header__container">
                <div className="header__browser--container">
                    <input type="text" placeholder="Search by Name" className="header__browser" />
        
                    <button className="btn bg--yellow" onClick={searchMovie}>Browse Movies
                    </button>
                    <div className="spinner__container">
                        {/* <!-- <div className="books">
                            <i className="fas fa-spinner books__loading--spinner"></i>
                          </div> --> */}
                <FontAwesomeIcon icon={faSpinner} className="loading--spinner" />

                    </div>
                </div>
            </div>
        </div>
      </header>
    </section>
    <div className="spinner__container">
      <i className="fas fa-spinner loading--spinner"></i>
    </div>
    <section id="movies">
      <div className="container">
        <div className="row">
            <div className="movies__search">
                <h2 className="movies__search--title">Search for movies in the search bar</h2>
                <select name="Pimba" id="filter" onChange={(e) => filterMovies(e)}>
                  <option value="filter" selected disabled>Filter</option>
                  <option value="OLDEST">Oldest to Latest</option>
                  <option value="NEWEST">Latest to Oldest</option>
                </select>
            </div>
          <div className="movies--container">
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Movies