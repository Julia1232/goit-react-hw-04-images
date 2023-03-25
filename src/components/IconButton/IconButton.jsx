import PropTypes from 'prop-types';
import styles from '../IconButton/IconButton.module.css';

const IconButton = ({ children, onSubmit, ...allyProps }) => (
  <button
    type="button"
    className={styles.IconButton}
    onClick={onSubmit}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;