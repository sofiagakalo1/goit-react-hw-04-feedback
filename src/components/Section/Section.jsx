import PropTypes from 'prop-types';
import css from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.wrapper}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
