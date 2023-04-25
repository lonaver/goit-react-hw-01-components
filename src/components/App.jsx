import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const title = 'Upload stats';
export const App = () => {
  return (
    <>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title={title} stats={data}></Statistics>
      <Friends friends={friends}></Friends>
      <TransactionHistory items={transactions}></TransactionHistory>
    </>
  );
};
