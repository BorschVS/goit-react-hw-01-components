import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 40px;
  padding: 10px 20px;
  background-color: #f8f9eb;
  box-shadow: 0px 0.8px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const UserInfoBox = styled.div`
  padding: 5px;
`;

export const Avatar = styled.img`
  background-color: #${props => props.theme.colors.getRandomHexColor()};
`;

export const UserName = styled.p`
  padding: 10px 5px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid ${props => props.theme.colors.lightGrey};
`;

export const UserInfo = styled.p`
  text-align: center;
  padding: 4px;
  color: #5c5c5c;
  font-size: 16px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 52px;

  padding: 6px 16px;

  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

export const UserActivity = styled.span`
  text-transform: capitalize;
  font-size: 14px;
  &:nth-of-type(2) {
    font-weight: 500;
    font-size: 16px;
  }
`;
