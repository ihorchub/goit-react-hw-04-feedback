import PropTypes from 'prop-types';
import { StatisticsElement } from './StatisticsBody.styled';

export const StatisticsBody = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <StatisticsElement>Goog: {good}</StatisticsElement>
    <StatisticsElement>Neutral: {neutral}</StatisticsElement>
    <StatisticsElement>Bad: {bad}</StatisticsElement>
    <StatisticsElement>Total: {total}</StatisticsElement>
    <StatisticsElement className="positive">
      Positive feedback: {positivePercentage}%
    </StatisticsElement>
  </div>
);

StatisticsBody.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
