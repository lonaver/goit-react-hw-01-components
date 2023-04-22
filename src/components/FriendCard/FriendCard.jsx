import React from 'react';
import propTypes from 'prop-types';

import styles from './FriendCard.module.css';

export const FriendCard = ({ avatar, isOnline, name }) => {
  const classNames = [styles.status];
  if (isOnline) {
    classNames.push(styles.online);
  } else {
    classNames.push(styles.offline);
  }
  return (
    <li className={styles.item}>
      <span className={classNames.join(' ')}>{isOnline}</span>
      <div className={styles.thumb}>
        <img
          className={styles.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
      </div>
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendCard.propTypes = {
  avatar: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
};
