import React from 'react';
import propTypes from 'prop-types';

import styles from './StatisticIl.module.css';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticIl = ({ label, percentage }) => {
  return (
    <li
      className={styles.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticIl.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};
