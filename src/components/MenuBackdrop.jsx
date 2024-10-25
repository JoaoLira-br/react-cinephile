import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'



const MenuBackdrop = ({closeMenu, openMenu}) => {

  return (
    <div className="menu__backdrop">
    {/* closeMenu() */}

    <button className="btn__menu btn__menu--close">
      <FontAwesomeIcon icon={faTimes} onClick={closeMenu} />
    </button>
    <ul className="menu__links">
      <li className="menu__list">
        {/* closeMenu() */}
        <Link to="/" className="menu__link"  onClick={closeMenu}>
          Home
        </Link>
      </li>
      <li className="menu__list">
        {/* closeMenu() */}
        <Link to="/movies" className="menu__link" onClick={closeMenu}>
          Find a Movie
        </Link>
      </li>
      <li className="menu__list">
        <Link to="/" className="menu__link link__contact no-cursor">Contact</Link>
      </li>
    </ul>
  </div>
  )
}

export default MenuBackdrop