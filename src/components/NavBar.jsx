import PropTypes from "prop-types";

function NavBar({
  pokemonIndex,
  handleClickNext,
  handleClickPrevious,
  pokemonList,
}) {
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : (
        <></>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        <></>
      )}
    </div>
  );
}

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  handleClickNext: PropTypes.func.isRequired,
  handleClickPrevious: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavBar;
