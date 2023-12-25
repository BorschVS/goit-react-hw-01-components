import { StatsSection } from './Statistics.styled';
import {
  StatsTitle,
  StatsList,
  StatsListItem,
  Stats,
} from './Statistics.styled';

const title = 'Upload stats';

export const Statistics = ({ data }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
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
    </StatsSection>
  );
};
