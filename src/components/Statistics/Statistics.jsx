import { StatisticBox } from './Statistics.styled';
import { Title } from '../StatsTitle/StatsTitle';
import { StatisticsList } from '../StatsList/StatsList';

export const Statistics = ({ data }) => {
  return (
    <StatisticBox>
      <Title />
      <StatisticsList data={data} />
    </StatisticBox>
  );
};
