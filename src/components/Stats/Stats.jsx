import React from 'react';
import propTypes from 'prop-types';

import styles from './Stats.module.css';

import { ElementStats } from 'components/ElementStats/ElementStats';

export const Stats = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      <ElementStats
        label="followers"
        quantity={stats['followers']}
      ></ElementStats>
      <ElementStats label="views" quantity={stats['views']}></ElementStats>
      <ElementStats label="likes" quantity={stats['likes']}></ElementStats>
    </ul>
  );
};

Stats.propTypes = {
  stats: propTypes.object.isRequired,
};
