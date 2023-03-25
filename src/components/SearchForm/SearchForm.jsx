import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../SearchForm/SearchForm.module.css';

const SearchFrom = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    const { value } = e.currentTarget;

    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
    resetForm();
  };

  const resetForm = () => setQuery('');

  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <div className={styles.SearchFormButtonLabel}>Search</div>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name="query"
        value={query}
        onChange={handleSearchInput}
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchFrom;