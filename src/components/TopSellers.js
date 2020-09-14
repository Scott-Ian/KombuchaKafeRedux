import React from 'react';
import PropTypes from 'prop-types';

function TopSellers(props) {

  return(
    <React.Fragment>
      <h2>Top Sellers:</h2>
      <ol>
        {props.topSellers.map((entry) => 
          <li key={entry.id}>{entry.name}</li>
        )}
      </ol>
    </React.Fragment>
  );
}

TopSellers.propTypes ={
  topSellers: PropTypes.array,
}

export default TopSellers;