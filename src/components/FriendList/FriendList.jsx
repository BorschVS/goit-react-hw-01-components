import PropTypes from 'prop-types';

import { Friend, Name, FriendsBox, Online, Offline } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsBox>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <Friend key={id}>
            {isOnline ? <Online /> : <Offline />}
            <img src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </FriendsBox>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
