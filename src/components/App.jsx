import { Profile } from 'components/Profile/Profile';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <Profile
      user={user}
      data={data}
      friends={friends}
      transactions={transactions}
    ></Profile>
  );
};
