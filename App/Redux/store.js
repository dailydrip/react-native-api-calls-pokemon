import { createStore, compose } from 'redux'
import reducer from './reducers'
import Immutable from 'immutable'
import Pokemon from '../../models/Pokemon'

import * as Loop from 'redux-loop'

const initialState = Immutable.fromJS({ pokemon: new Pokemon(), loading: false, error: '' })

export default makeStore = () => {

  const store = createStore(reducer, initialState, Loop.install());

  console.log('creating store', store)

  return store
}
