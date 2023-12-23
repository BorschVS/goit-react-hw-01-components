// data
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';
// ui
import { MainContent } from './App.styled';
import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  console.log(data);
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
        <Statistics data={data}></Statistics>
      </Container>
      <Container>
        <FriendList friends={friends}></FriendList>
      </Container>
      <Container>
        <TransactionsHistory transactions={transactions} />
      </Container>
    </MainContent>
  );
};
