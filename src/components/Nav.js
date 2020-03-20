import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className="Nav">
    <div className="Nav--Container container">
      <Link to="/">
        <Logo color="white" />
      </Link>
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/about/" exact>
        About
      </NavLink>
      <NavLink to="/blog/" exact>
        Nyheter
      </NavLink>
      <NavLink to="/contact/" exact>
        Contact
      </NavLink>
    </div>
  </nav>
)
