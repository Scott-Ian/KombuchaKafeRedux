import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function CreateKombuchaForm(props) {
  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({
      id: v4(),
      name: event.target.name.value,
      description: event.target.description.value,
      brewery: event.target.description.value,
      price: parseInt(event.target.cost.value),
      imgURL: event.target.description.value,
      quantity: 124,
      numberOrdered: 0
    });

  }

  return(
    <React.Fragment>
      <form onSubmit = {CreateKombuchaForm}>
        <input type='text'/>
      </form>
    </React.Fragment>
  )
}

export default CreateKombuchaForm;