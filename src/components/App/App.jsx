// data
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
// ui
import { MainContent } from './App.styled';
import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <MainContent>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        ></Profile>
      </Container>
      <Container>
        <Statistics data={data} />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionsHistory transactions={transactions} />
      </Container>
    </MainContent>
  );
};
