import React from 'react';
import propTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

import { TransactionData } from 'components/TransactionData/TransactionData';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionData
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionData>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
};
