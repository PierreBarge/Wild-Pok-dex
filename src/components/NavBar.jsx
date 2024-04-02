import PropTypes from "prop-types";

function NavBar({ pokemonIndex, handleClickNext, handleClickPrevious }) {
  return (
    <div id="nav-bar">
      {pokemonIndex > 1 ? (
        <button onClick={handleClickPrevious}>Previous</button>
      ) : (
        <button onClick={handleClickPrevious} disabled>
          Previous
        </button>
      )}
      {pokemonIndex < 151 ? (
        <button onClick={handleClickNext}>Next</button>
      ) : (
        <button onClick={handleClickNext} disabled>
          Next
        </button>
      )}
    </div>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrevious: PropTypes.func.isRequired,
};

export default NavBar;
