import React from 'react';
import { Link } from 'react-router';

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <Link  to='/'> HOME </Link>
        <Link  to='/launchers'>Launchers</Link>
      </div>
      <div> {props.children}</div>
    </div>
  )
}

export default NavBar;
