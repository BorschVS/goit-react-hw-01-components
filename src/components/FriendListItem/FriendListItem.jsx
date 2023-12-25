import PropTypes from 'prop-types';

import { Friend, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ id, name, avatar, isOnline }) => {
    return (
      <Friend key={id}>
        <Status eventType={isOnline} />
        <img src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </Friend>
    );
  });
};

FriendListItem.propTypes = {
  friends: PropTypes.array.isRequired,
};
