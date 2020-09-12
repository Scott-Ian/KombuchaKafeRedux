import React from 'react';
import PropTypes from 'prop-types';

function EditKombuchaForm(props) {

  function handleEditKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onEditKombucha({...props.kombucha,
      name: event.target.name.value,
      description: event.target.description.value,
      brewery: event.target.description.value,
      price: parseInt(event.target.price.value),
      imgURL: event.target.description.value,
    });
  }

  return(
    <React.Fragment>
      <form onSubmit = {handleEditKombuchaFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder={props.kombucha.name}
        />
        <textarea
          name='description'
          placeholder={props.kombucha.description}
        />
        <input 
          type='text'
          name='brewery'
          placeholder={props.kombucha.brewery}
        />
        <input 
          type='number'
          name='price'
          placeholder={props.kombucha.price}
        />
        <input 
          type='text'
          name='imgURL'
          placeholder={props.kombucha.imgURL}
        />
        <button type="submit">Add Kombucha!</button>
      </form>
    </React.Fragment>
  )
}

EditKombuchaForm.propTypes = {
  onEditKombuchaCreation: PropTypes.func,

  name:PropTypes.string,
  description: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  imgURL: PropTypes.string
}

export default EditKombuchaForm;