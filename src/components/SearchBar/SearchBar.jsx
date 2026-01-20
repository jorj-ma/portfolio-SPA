import './SearchBar.css';

const SearchBar = ({ onSChange }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search projects by Project Title"
        onChange={(e) => onSChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;