import PropTypes from 'prop-types';

import { Friend, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ status, avatar, name }) => {
  return (
    <Friend>
      <Status eventType={status} />
      <img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Friend>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
