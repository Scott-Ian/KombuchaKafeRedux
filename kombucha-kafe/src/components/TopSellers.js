import React from 'react';
import PropTypes from 'prop-types';

function TopSellers(props) {
  const tempTopSellers = ["Honey Hibiscus", "Cheesy Chartruse", "Lavender Lemon"];

  return(
    <React.Fragment>
      <h2>Top Sellers:</h2>
      <ol>
        {tempTopSellers.forEach((entry, index) =>
          <li>{index}: {entry}</li>
        )}
      </ol>
    </React.Fragment>
  );
}

TopSellers.propTypes ={
  topSellers: PropTypes.array,
}

export default TopSellers;