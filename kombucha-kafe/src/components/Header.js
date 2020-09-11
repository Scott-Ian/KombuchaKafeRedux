import React from 'react';

function Header() {
  const headerStyle = {
    gridArea: header
  }

  return(
    <React.Fragment>
      <div className = "grid-container">
        <div className= "header-label" style={headerStyle}>
          <h2>Kombucha Cafe</h2>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;