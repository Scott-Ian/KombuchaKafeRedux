import React from 'react';

function Header() {
  const headerStyle = {
    gridArea: "header"
  };

  const gridContainerStyle = {
    display: "grid"
  };

  return(
    <React.Fragment>
      <div className="grid-container" style={gridContainerStyle}>
        <div className= "header-label" style={headerStyle}>
          <h2>Kombucha Cafe</h2>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Header;