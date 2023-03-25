import PropTypes from 'prop-types';
import SearchFrom from '../SearchForm/SearchForm';

import styles from '../SearchBar/SearchBar.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={styles.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func,
};

export default Searchbar;