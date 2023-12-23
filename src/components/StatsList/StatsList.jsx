import PropTypes from 'prop-types';
import { StatsList, StatsListItem, Stats } from './StatsList.styled';

export const StatisticsList = ({ data }) => {
  return (
    <StatsList>
      {data.map(({ id, label, percentage }) => {
        return (
          <StatsListItem key={id}>
            <Stats>{label}</Stats>
            <Stats>{percentage}%</Stats>
          </StatsListItem>
        );
      })}
    </StatsList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
