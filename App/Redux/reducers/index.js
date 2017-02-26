import { GOT_POKEMON, SET_LOADING, FETCH_POKEMON_FAILED, FETCH_POKEMON } from '../constants';
import { loop, Effects } from 'redux-loop';
import Api from '../../../API/Pokemon'
import * as Actions from '../actions'

fetchPokemon = (pokemon) => {
  return Api.getPokemon(pokemon).then((pokemon)=>{
    return Actions.gotPokemon(pokemon)
  }).catch((err) => {
    Actions.fetchPokemonFailed(err)
  })
}

export default function reducer(state, action) {
  switch(action.type) {
    case FETCH_POKEMON:
      return loop(
        state.set('loading', true),
        Effects.promise(fetchPokemon(action.pokemon))
        )
    case GOT_POKEMON:
      return loop(
        state.set('pokemon', action.pokemon).set('loading', false),
        Effects.none()
        )
    case SET_LOADING:
      return loop(
        state.set('loading', true),
        Effects.none()
      )
    case FETCH_POKEMON_FAILED:
      return loop(
        state.set('error', action.error).set('loading', false),
        Effects.none()
        )
    default:
      return state
  }
}
