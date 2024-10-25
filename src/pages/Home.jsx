import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSpinner } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  let navigate = useNavigate();

  function browseMovie(){
    navigate(`/movies/search=${encodeURIComponent(search)}`);
  }
  return (
    <section id="landing">
    <NavBar></NavBar>
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>
              America`s <b className="yellow">most awarded</b> online movie
              discovery platform
            </h1>
            <h2>
              Find your next favorite movie with{" "}
              <span className="yellow">Cinephile</span>
            </h2>
          </div>
          <div className="header__browser--container">
            <input
              type="text"
              placeholder="Search by Name"
              className="header__browser"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="btn bg--yellow" onClick={browseMovie}>Browse Movies</button>
            <div className="spinner__container">
              {/* <!-- <div className="books">
                    <i className="fas fa-spinner books__loading--spinner"></i>
                  </div> --> */}
                <FontAwesomeIcon icon={faSpinner} className="loading--spinner" />
            </div>
          </div>
          <figure className="header__img--wrapper">
            <img src="/assets/undraw_movie_night_re_9umk.svg" alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Home;
