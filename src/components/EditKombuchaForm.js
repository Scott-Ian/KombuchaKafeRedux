import React from 'react';
import PropTypes from 'prop-types';

function EditKombuchaForm(props) {

  const { kombucha } = props;

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
          placeholder={kombucha.name}
        />
        <textarea
          name='description'
          placeholder={kombucha.description}
        />
        <input 
          type='text'
          name='brewery'
          placeholder={kombucha.brewery}
        />
        <input 
          type='number'
          name='price'
          placeholder={kombucha.price}
        />
        <input 
          type='text'
          name='imgURL'
          placeholder={kombucha.imgURL}
        />
        <button type="submit">Add Kombucha!</button>
      </form>
    </React.Fragment>
  )
}

EditKombuchaForm.propTypes = {
  onEditKombucha: PropTypes.func,
  kombucha: PropTypes.object,
  // name:PropTypes.string,
  // description: PropTypes.string,
  // brewery: PropTypes.string,
  // price: PropTypes.number,
  // imgURL: PropTypes.string
}

export default EditKombuchaForm;