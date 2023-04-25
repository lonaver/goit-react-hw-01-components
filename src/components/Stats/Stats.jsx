import React from 'react';
import propTypes from 'prop-types';

import styles from './Stats.module.css';

export const Stats = ({ data }) => {
  return (
    <ul className={styles.stats}>
      <li className={styles.thumb}>
        <span className={styles.label}>followers</span>
        <span className={styles.quantity}>{data['followers']}</span>
      </li>
      <li className={styles.thumb}>
        <span className={styles.label}>views</span>
        <span className={styles.quantity}>{data['views']}</span>
      </li>
      <li className={styles.thumb}>
        <span className={styles.label}>likes</span>
        <span className={styles.quantity}>{data['likes']}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  data: propTypes.objectOf(propTypes.string),
};
