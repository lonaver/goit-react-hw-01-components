import React from 'react';
import PropTypes from 'prop-types';

import { Stats } from 'components/Stats/Stats';
import styles from './ProfileStyle.module.css';

export const Profile = ({ userName, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.thumb}>
          <img src={avatar} alt="User avatar" className="avatar" />
        </div>
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stats data={stats}></Stats>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
