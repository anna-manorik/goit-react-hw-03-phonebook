import React from 'react';
import PropTypes from "prop-types";
import styles from './nameList.module.css';

const NameList = ({ children }) => (
    <ul className={styles.list}>
        {children}
    </ul>
)

NameList.propTypes = {
    children: PropTypes.element,
}

export default NameList; 