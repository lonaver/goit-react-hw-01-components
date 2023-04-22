import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionData.module.css';

export const TransactionData = ({ type, amount, currency }) => {
  return (
    <tr className={styles.tr_item}>
      <td className={styles.td_item}>{type}</td>
      <td className={styles.td_item}>{amount}</td>
      <td className={styles.td_item}>{currency}</td>
    </tr>
  );
};

TransactionData.propTypes = {
  type: propTypes.string.isRequired,
  amount: propTypes.string.isRequired,
  currency: propTypes.string.isRequired,
};
