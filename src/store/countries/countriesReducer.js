import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from './countriesActions';

const initialState = {
  list: [],
  error: null,
  status: 'idle',
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }
    case SET_COUNTRIES: {
      return {
        ...state,
        status: 'received',
        list: payload,
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: payload,
        status: 'rejected',
      };
    }
    default: {
      return state;
    }
  }
};
