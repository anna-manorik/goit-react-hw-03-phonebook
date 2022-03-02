import React from 'react';
import PropTypes from 'prop-types';
import styles from './nameItem.module.css';

const NameItem = ({ visibleContacts, onDeleteContact }) => (
  <>
    {visibleContacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDeleteContact(id)}>
          Delete contact
        </button>
      </li>
    ))}
  </>
);

NameItem.propTypes = {
  visibleContacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default NameItem;
