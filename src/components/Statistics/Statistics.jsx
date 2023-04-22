import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistic.module.css';

import { StatisticIl } from 'components/StatisticIl/StatisticIl';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticIl key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.array.isRequired,
};
