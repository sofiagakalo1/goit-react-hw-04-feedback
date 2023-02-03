import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul className={css.ul}>
      <li className={css.li}>Neutral: {neutral}</li>
      <li className={css.li}>Bad: {bad}</li>
      <li className={css.li}>Good: {good}</li>
      <li className={css.li}>Total: {total}</li>
      <li className={css.li}>Positive feedback: {percentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
