import PropTypes from 'prop-types';
import { avatarSize } from 'constants/index';
import {
  ProfileBox,
  UserInfoBox,
  Avatar,
  UserName,
  UserInfo,
  StatsList,
  StatsItem
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsLabels = Object.keys(stats);
  return (
    <ProfileBox>
      <UserInfoBox>
        <Avatar src={avatar} alt="User avatar" width={avatarSize.md} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserInfoBox>

      <StatsList>
        <StatsItem>
          <span>{statsLabels[0]}</span>
          <span>{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span>{statsLabels[1]}</span>
          <span>{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span>{statsLabels[2]}</span>
          <span>{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
