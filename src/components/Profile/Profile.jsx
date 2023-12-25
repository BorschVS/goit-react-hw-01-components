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

import { IconContext } from 'react-icons';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileBox>
      <UserInfoBox>
        <Avatar src={avatar} alt="User avatar" width={sizes.avatarSize.md} />
        <UserName>{username}</UserName>
        <UserInfo>
          <IconContext.Provider
            value={{ style: { verticalAlign: 'middle', paddingRight: '4px' } }}
          >
            <FaTelegramPlane />@{tag}
          </IconContext.Provider>
        </UserInfo>
        <UserInfo>
          <IconContext.Provider
            value={{ style: { verticalAlign: 'top', paddingRight: '4px' } }}
          >
            <FaLocationDot />
          </IconContext.Provider>
          {location}
        </UserInfo>
      </UserInfoBox>

      <StatsList>
        <StatsItem>
          <UserActivity>Followers</UserActivity>
          <UserActivity>{stats.followers}</UserActivity>
        </StatsItem>
        <StatsItem>
          <UserActivity>Views</UserActivity>
          <UserActivity>{stats.views}</UserActivity>
        </StatsItem>
        <StatsItem>
          <UserActivity>Likes</UserActivity>
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
