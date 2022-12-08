import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistStore } from 'redux-persist';
import persistReducer from './rootReducer';
import { client } from '../api/mainApi';

const store = createStore(persistReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client))));

const persistor = persistStore(store);

export { store, persistor };
