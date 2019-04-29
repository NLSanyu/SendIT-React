import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div>
        <nav>
            {props.home ? <Link to='/'>{props.home}</Link> : ''}
            {props.login ? <Link to='/login'>{props.login}</Link> : ''}
            {props.signup ? <Link to='/signup'>{props.signup}</Link> : ''}
            {props.logout ? <Link to='/'>{props.logout}</Link> : ''}
        </nav>
    </div>
  )
}

export default NavBar;
