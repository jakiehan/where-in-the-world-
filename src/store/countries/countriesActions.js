import { ALL_COUNTRIES } from '../../utils/constants/apiConstants.js';

export const SET_COUNTRIES = 'SET_COUNTRIES';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries
})

const setError = (error) => ({
  type: SET_ERROR,
  payload: error
})

const setLoading = () => ({
  type: SET_LOADING,
})

export const loadCountries = () => (dispatch, _, client) => {
  dispatch(setLoading())
  client.get(ALL_COUNTRIES)
    .then(countries => dispatch(setCountries(countries)))
    .catch(err => dispatch(setError(err.message)))
}