import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 0.8px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 60px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
`;

export const Stats = styled.span`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  &:nth-of-type(3n - 2) {
    font-weight: 400;
    font-size: 16px;
  }
`;
