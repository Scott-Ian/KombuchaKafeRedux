import React from 'react';

function SearchForm () {
  return (
    <React.Fragment>
      <form className="navbar-form navbar-right" action="/action_page.php">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <button type="submit" className ="btn btn-default">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default SearchForm;