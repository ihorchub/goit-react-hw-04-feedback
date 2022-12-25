import PropTypes from 'prop-types';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { StatisticsBody } from 'components/StatisticsBody/StatisticsBody';
import { StatWrapper, Title } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatWrapper>
    <Title>Statistics</Title>
    {good !== 0 || neutral !== 0 || bad !== 0 ? (
      <StatisticsBody
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    ) : (
      <NotificationMessage />
    )}
  </StatWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
