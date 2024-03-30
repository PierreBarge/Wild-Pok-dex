import PropTypes from "prop-types";

function NavBar({ handleClick, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button onClick={handleClick} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
};

export default NavBar;
