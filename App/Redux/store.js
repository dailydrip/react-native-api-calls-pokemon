import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Immutable from 'immutable'
import Pokemon from '../../models/Pokemon'
import thunk from 'redux-thunk'


const initialState = Immutable.fromJS({ pokemon: new Pokemon(), loading: false, error: '' })

export default makeStore = () => {

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );

  console.log('creating store', store)

  return store
}
