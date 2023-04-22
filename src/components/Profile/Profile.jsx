import React from 'react';
import propTypes from 'prop-types';

import styles from './ProfileStyle.module.css';

import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import { Stats } from 'components/Stats/Stats';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

const title = 'Upload stats';
export const Profile = ({ user, data, friends, transactions }) => {
  return (
    <>
      <div className={styles.profile}>
        <ProfileDescription
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
        ></ProfileDescription>
        <Stats stats={user.stats}></Stats>
      </div>
      <Statistics title={title} stats={data}></Statistics>
      <Friends friends={friends}></Friends>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};

Profile.propTypes = {
  user: propTypes.shape({
    avatar: propTypes.string.isRequired,
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    stats: propTypes.object.isRequired,
  }),
  data: propTypes.array.isRequired,
  friends: propTypes.array.isRequired,
  transactions: propTypes.array.isRequired,
};
