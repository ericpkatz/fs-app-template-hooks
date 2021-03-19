import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
  const {logout, isLoggedIn, history, location} = props;
  const { pathname } = location;
  return (
    <div>
      <h1>FS-App-Template</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <a href="#" onClick={ ()=> logout(history) }>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login" className={ pathname === '/login' ? 'selected': ''}>Login</Link>
            <Link to="/signup" className={ pathname === '/signup' ? 'selected': ''}>Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};
