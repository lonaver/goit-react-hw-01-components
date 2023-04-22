import React from 'react';
import propTypes from 'prop-types';

import styles from './Friend.module.css';

import { FriendCard } from 'components/FriendCard/FriendCard';

export const Friends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, isOnline, name }) => (
        <FriendCard
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        ></FriendCard>
      ))}
    </ul>
  );
};

Friends.propTypes = {
  friends: propTypes.array.isRequired,
};
