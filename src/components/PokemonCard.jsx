import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  const pokemonImg = function () {
    if (pokemon.imgSrc) {
      return (
        <img
          id="pokemon-image"
          src={pokemon.imgSrc}
          alt={pokemon.name}
          // width="300px"
        />
      );
    } else {
      return <p>???</p>;
    }
  };

  return (
    <figure id="pokemon-card">
      {pokemonImg()}
      <figcaption id="pokemon-id">{pokemon.id}</figcaption>
      <figcaption id="pokemon-name">{pokemon.name}</figcaption>
      <figcaption id="pokemon-french-name">{pokemon.frenchName}</figcaption>
    </figure>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    frenchName: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
