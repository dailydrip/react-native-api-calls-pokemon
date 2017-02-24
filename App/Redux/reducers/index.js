import { GOT_POKEMON, SET_LOADING, FETCH_POKEMON_FAILED } from '../constants';

export default function reducer(state, action) {
  switch(action.type) {
    case GOT_POKEMON:
      return state.set('pokemon', action.pokemon).set('loading', false)
    case SET_LOADING:
      return state.set('loading', true)
    case FETCH_POKEMON_FAILED:
      return state.set('error', action.error).set('loading', false)
    default:
      return state
  }
}
