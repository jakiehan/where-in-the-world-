import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import persistReducer from '../store/rootReducer.js'
import { client } from '../api/mainApi';
import thunk from 'redux-thunk';

const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client))),
)

const persistor = persistStore(store);

export { store, persistor }