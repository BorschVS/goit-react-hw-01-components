import styled from '@emotion/styled';

function getRandomHexColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}

export const ProfileBox = styled.div`
  margin-top: 40px;
  padding: 10px 20px;
  background-color: #F8F9EB;
  box-shadow: 0px 0.8px 2px 0px rgba(0,0,0,0.75);`;

export const UserInfoBox = styled.div`
  padding: 5px;
`;

export const Avatar = styled.img`
  background-color: #${getRandomHexColor};
`;

export const UserName = styled.p`
  padding: 10px 5px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid rgb(0,0,0,0.5);
`;

export const UserInfo = styled.p`
text-align: center;
padding: 4px 2px;
color: #5C5C5C;
font-size: 16px;
`

export const StatsList = styled.ul`
display: flex;
justify-content: space-around;
align-items: center;
`

export const StatsItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 5px;
padding: 5px 15px;
font-size: 18px;
&:not(:last-child) {
    border-right: 1px solid rgb(0,0,0,0.5);
}
`