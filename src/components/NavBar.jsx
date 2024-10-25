import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import MenuBackdrop from './MenuBackdrop'

const NavBar = ({ theme }) => {
    const [menu, setMenu] = useState(false);


    const openMenu = () => {
      setMenu(true);
    };
    const closeMenu = () => {
      setMenu(false);
    };
  return (
    <nav>
    <div className="nav__container">
      <figure className="logo--wrapper">
        <Link to={"/"}>
          <img className="logo" src={theme === "white" ? "/assets/cinephile-white.png": "/assets/cinephile.png" } alt="" />
        </Link>
      </figure>
      <ul className="nav__links">
        <li>
          <Link to="/" className={`nav__link link__hover-effect ${theme === "white" && "white"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className={`nav__link link__hover-effect ${theme === "white" && "white"}`}>
            Find a movie
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`nav__link nav__link--primary link__contact ${theme === "white" && "white"}`}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* openMenu() */}
      <button className="btn__menu">
        <FontAwesomeIcon icon={faBars} onClick={openMenu} />
      </button>
      {(menu) && (
        <MenuBackdrop closeMenu={closeMenu} openMenu={openMenu}/>
      )}
    </div>
  </nav>
  )
}

export default NavBar