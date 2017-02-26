import { FETCH_POKEMON, GOT_POKEMON } from '../constants';

export const fetchPokemon = (pokemon) => ({
  type: FETCH_POKEMON,
  pokemon
});

export const gotPokemon = (pokemon) => {
  return {
    type: GOT_POKEMON,
    pokemon,
  }
}

export const fetchPokemonFailed = (error) => {
  return {
    type: FETCH_POKEMON_FAILED,
    error,
  }
}
