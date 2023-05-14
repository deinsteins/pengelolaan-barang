import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        className='search-input'
        type="text"
        placeholder="Search Barang"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  
}

export default SearchBar;
