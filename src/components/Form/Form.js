import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>
      {' '}
      Name:
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
    <br />
    <label>
      {' '}
      Phone num:
      <input
        className={styles.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </label>
    <br />
    <button type="submit" className={styles.button}>
      Add contact
    </button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Form;
