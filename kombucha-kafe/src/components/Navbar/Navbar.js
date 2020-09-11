import React from 'react';
import SearchForm from './SearchForm';
import NavButtons from './NavButtons';

function Navbar () {
  return(
    <React.Fragment>
      <nav className="navbar navbar-inverse" backgroundColor="black">
        <NavButtons />
        <SearchForm/>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;
