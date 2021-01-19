import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Using navlink here to correctly link to correct paths
 * and to also highlight correct element.
 */
const Navigation = () => {
  return (
    <nav className="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/computers'>Computers</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navigation;