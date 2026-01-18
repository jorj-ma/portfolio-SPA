import './SearchBar.css';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search projects by Project Title"
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;