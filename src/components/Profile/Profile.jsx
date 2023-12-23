import PropTypes from 'prop-types';
import { sizes } from 'constants/index';
import {
  ProfileBox,
  UserInfoBox,
  Avatar,
  UserName,
  UserInfo,
  StatsList,
  StatsItem,
  UserActivity,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsLabels = Object.keys(stats);
  return (
    <ProfileBox>
      <UserInfoBox>
        <Avatar src={avatar} alt="User avatar" width={sizes.avatarSize.md} />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserInfoBox>

      <StatsList>
        <StatsItem>
          <UserActivity>{statsLabels[0]}</UserActivity>
          <UserActivity>{stats.followers}</UserActivity>
        </StatsItem>
        <StatsItem>
          <UserActivity>{statsLabels[1]}</UserActivity>
          <UserActivity>{stats.views}</UserActivity>
        </StatsItem>
        <StatsItem>
          <UserActivity>{statsLabels[2]}</UserActivity>
          <UserActivity>{stats.likes}</UserActivity>
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
