import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import Sagas from './../Sagas'
import Immutable from 'immutable'
import Pokemon from '../../models/Pokemon'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const initialState = Immutable.fromJS({ pokemon: new Pokemon(), loading: false, error: '' })

export default makeStore = () => {
  var store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  )

  console.log('creating store', store)

  // then run the saga
  sagaMiddleware.run(Sagas)
  return store
}


