import React from "react";
import PropTypes from "prop-types";

function KombuchaDetail(props) {
  const {kombucha} = props

  return(
    <React.Fragment>
      <h3>{kombucha.name} Details</h3>
      <hr />
      <p>{kombucha.description}</p>
      <p>{kombucha.brewery}</p>
      <p>${kombucha.price}</p>
      <p>Remaining: {kombucha.quantity}</p>

      <button className="btn btn-info" onClick={props.onClickingEdit}>Update Entry</button>
      <button className="btn btn-alert" onClick={() => props.onClickingDelete(kombucha.id)}>Delete</button>
      <hr />
    </React.Fragment>
  );
}

KombuchaDetail.propTypes ={
  kombucha: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default KombuchaDetail;