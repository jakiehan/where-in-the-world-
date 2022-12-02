import { SET_COUNTRY, SET_ERROR, SET_NEIGHBORS, SET_CLEAR_COUNTRY, SET_LOADING } from './detailsActions';

const initialState = {
  error: null,
  country: null,
  neighbors: null,
  status: 'idle',
}

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: payload
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      }
    }
    case SET_COUNTRY: {
      return {
        ...state,
        status: 'received',
        error: null,
        country: payload,
      }
    }
    case SET_NEIGHBORS: {
      return {
        ...state,
        error: null,
        neighbors: payload
      }
    }
    case SET_CLEAR_COUNTRY: {
      return initialState
    }
    default: {
      return state
    }
  }
}