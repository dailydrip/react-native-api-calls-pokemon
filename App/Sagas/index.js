import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../../API/Pokemon'
import {
  GOT_POKEMON,
  SET_LOADING,
  FETCH_POKEMON,
  FETCH_POKEMON_FAILED,
} from '../Redux/constants'

// worker Saga: will be fired on FETCH_POKEMON action
function* fetchPokemon(action) {
   try {
      yield put({type: SET_LOADING, loading: true});
      const pokemon = yield call(Api.getPokemon, action.pokemon);
      yield put({type: GOT_POKEMON, pokemon: pokemon});
   } catch (e) {
      yield put({type: FETCH_POKEMON_FAILED, error: e});
   }
}

/*
  Starts fetchPokemon on each dispatched `FETCH_POKEMON` action.
  Allows concurrent fetches of Pokemon, but this is not the case
*/
function* mySaga() {
  yield takeEvery(FETCH_POKEMON, fetchPokemon);
}

export default mySaga;
