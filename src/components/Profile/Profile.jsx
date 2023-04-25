import React from 'react';
import propTypes from 'prop-types';

import { Stats } from 'components/Stats/Stats';
import styles from './ProfileStyle.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.thumb}>
          <img src={avatar} alt="User avatar" className="avatar" />
        </div>
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <Stats data={stats}></Stats>
    </div>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.string),
};
