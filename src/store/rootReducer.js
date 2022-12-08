import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeReducer } from './theme/themeReducer';
import { countriesReducer } from './countries/countriesReducer';
import { controlsReducer } from './controls/controlsReducer';
import { detailsReducer } from './details/detailsReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['countries'],
};

const countriesPersistConfig = {
  key: 'country',
  storage,
  blacklist: ['theme'],
};

const rootReducer = combineReducers({
  countries: persistReducer(countriesPersistConfig, countriesReducer),
  theme: themeReducer,
  controls: controlsReducer,
  details: detailsReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
