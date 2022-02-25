import React from 'react';
import PropTypes from "prop-types";
import styles from './nameItem.module.css';

const NameItem = ({ visibleContacts, onDeleteContact }) => (
    
    <>
        {visibleContacts.map(({ id, name, number }) => 
        <li key={id} className={styles.item}> {name}: {number} <button className={styles.button} onClick={() => onDeleteContact(id)}>Delete contact</button></li>)}
        
    </>
);

NameItem.propTypes = {
    contacts: PropTypes.array,
    filterResult: PropTypes.array,
}

export default NameItem;