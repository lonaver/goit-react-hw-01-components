import React from 'react';
import propTypes from 'prop-types';

import styles from './ProfileDescription.module.css';

export const ProfileDescription = ({
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  username,
  tag,
  location,
}) => {
  return (
    <div className={styles.description}>
      <div className={styles.thumb}>
        <img src={avatar} alt="User avatar" className="avatar" />
      </div>
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

ProfileDescription.propTypes = {
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
};
