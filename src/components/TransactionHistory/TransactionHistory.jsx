import React from 'react';
import propTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.td_head}>
        <tr className={styles.tr_head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.tr_item}>
            <td className={styles.td_item}>{type}</td>
            <td className={styles.td_item}>{amount}</td>
            <td className={styles.td_item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
};
