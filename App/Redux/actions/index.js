import { FETCH_POKEMON, GOT_POKEMON } from '../constants';
import Api from '../../../API/Pokemon'

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

export function getPokemon(pokemon) {
  return (dispatch) => {
    dispatch(fetchPokemon())
    Api.getPokemon(pokemon).then((pokemon)=>{
      dispatch(gotPokemon(pokemon))
    }).catch((err) => {
      dispatch(fetchPokemonFailed(err))
    })
  }
}
