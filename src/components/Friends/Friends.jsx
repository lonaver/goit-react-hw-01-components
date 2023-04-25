import React from 'react';
import PropTypes from 'prop-types';

import styles from './Friend.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <li key={id} className={styles.item}>
          <span
            className={
              isOnline
                ? [styles.status, styles.online].join(' ')
                : [styles.status, styles.offline].join(' ')
            }
          >
            {isOnline}
          </span>
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
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
