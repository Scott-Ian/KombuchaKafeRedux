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
      price: parseInt(event.target.price.value),
      imgURL: event.target.description.value,
      quantity: 124,
      numberOrdered: 0
    });
  }

  return(
    <React.Fragment>
      <form onSubmit = {handleNewKombuchaFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Kombucha Name'
          required
        />
        <textarea
          name='description'
          placeholder='Description'
          required
        />
        <input 
          type='text'
          name='brewery'
          placeholder='Brewery'
          required
        />
        <input 
          type='number'
          name='price'
          placeholder='Cost Per Pint'
          required
        />
        <input 
          type='text'
          name='imgURL'
          placeholder='Image URL'
        />
        <button type="submit">Add Kombucha!</button>
      </form>
    </React.Fragment>
  )
}

CreateKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
}

export default CreateKombuchaForm;