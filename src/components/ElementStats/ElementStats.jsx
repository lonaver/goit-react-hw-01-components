import React from 'react';
import propTypes from 'prop-types';

import styles from './ElementStats.module.css';

export const ElementStats = ({ label, quantity }) => {
  return (
    <li className={styles.thumb}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};
ElementStats.propTypes = {
  label: propTypes.string.isRequired,
  quantity: propTypes.number.isRequired,
};
