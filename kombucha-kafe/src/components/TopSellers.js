import React from 'react';
import PropTypes from 'prop-types';

function TopSellers(props) {
  return(
    <React.Fragment>
      <ol>
        {props.topSellers.forEach((kombucha) =>
          <li>{kombucha.name}</li>
        )};
      </ol>
    </React.Fragment>
  );
}

TopSellers.propTypes ={
  topSellers: PropTypes.array,
}

export default TopSellers;