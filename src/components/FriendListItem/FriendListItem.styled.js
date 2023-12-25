import styled from '@emotion/styled';

export const Friend = styled.li`
  position: relative;

  display: flex;
  align-items: center;
  width: 250px;
  padding: 5px;
  margin-bottom: 10px;

  box-shadow: 0px 0.8px 2px 0px rgba(0, 0, 0, 0.75);

  background-color: ${props => props.theme.colors.primaryWhite};
`;

export const Name = styled.p`
  padding-left: 10px;
  font-size: 18px;
`;

const statusOnline = props => {
  return props.eventType
    ? props => props.theme.colors.green
    : props.theme.colors.grey;
};

export const Status = styled.span`
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    left: -20px;
    padding: 5px;
    border-radius: 50%;
    background-color: ${statusOnline};
  }
`;
