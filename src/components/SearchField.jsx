import PropTypes from "prop-types";

function SearchField({ search }) {
  return (
    <input
      id="search-field"
      type="text"
      placeholder="Search pokémon by name or id"
      onChange={search}
    />
  );
}

SearchField.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchField;
