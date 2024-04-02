import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import SearchField from "./components/SearchField";
import pokemonList from "./assets/pokemonDataBase";

function App() {
  let [pokemonIndex, setPokemonIndex] = useState(1);
  let [currentPokemon, setCurrentPokemon] = useState(pokemonList[0]);

  const handleClickNext = () => {
    let fails = true;
    while (fails) {
      setPokemonIndex(++pokemonIndex);
      for (let pokemon of pokemonList) {
        if (pokemon.id === pokemonIndex) {
          setCurrentPokemon(pokemon);
          fails = false;
        }
      }
    }
  };

  const handleClickPrevious = () => {
    let fails = true;
    while (fails) {
      setPokemonIndex(--pokemonIndex);
      for (let pokemon of pokemonList) {
        if (pokemon.id === pokemonIndex) {
          setCurrentPokemon(pokemon);
          fails = false;
        }
      }
    }
  };

  const search = (event) => {
    if (isNaN(event.target.value)) {
      for (let pokemon of pokemonList) {
        if (
          event.target.value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase() ===
            pokemon.name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase() ||
          event.target.value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase() ===
            pokemon.frenchName
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
        ) {
          setCurrentPokemon(pokemon);
          setPokemonIndex(pokemon.id);
          break;
        } else if (
          pokemon.name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .startsWith(
              event.target.value
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            ) ||
          pokemon.frenchName
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .startsWith(
              event.target.value
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            )
        ) {
          setCurrentPokemon(pokemon);
          setPokemonIndex(pokemon.id);
        }
      }
    } else {
      for (let pokemon of pokemonList) {
        if (pokemon.id === parseInt(event.target.value)) {
          setCurrentPokemon(pokemon);
          setPokemonIndex(pokemon.id);
        }
      }
    }
  };

  return (
    <div id="app-grid">
      <h1 id="main-title">Pokédex</h1>
      <SearchField search={search} />
      <NavBar
        pokemonIndex={pokemonIndex}
        handleClickNext={handleClickNext}
        handleClickPrevious={handleClickPrevious}
        pokemonList={pokemonList}
      />
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
}

export default App;
