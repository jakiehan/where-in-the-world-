import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { themeReducer } from './theme/themeReducer.js';
import { countriesReducer } from './countries/countriesReducer.js';
import { controlsReducer } from './controls/controlsReducer.js';
import { detailsReducer } from './details/detailsReducer.js';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['countries']
};

const countriesPersistConfig = {
  key: 'country',
  storage: storage,
  blacklist: ['theme']
};

const rootReducer = combineReducers({
  countries: persistReducer(countriesPersistConfig, countriesReducer),
  theme: themeReducer,
  controls: controlsReducer,
  details: detailsReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
