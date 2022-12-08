import { detailedCountryInfo, filterByCode } from '../../utils/constants/apiConstants';

export const SET_COUNTRY = 'details/SET_COUNTRY';
export const SET_LOADING = 'details/SET_LOADING';
export const SET_ERROR = 'details/SET_ERROR';
export const SET_NEIGHBORS = 'details/SET_NEIGHBORS';
export const SET_CLEAR_COUNTRY = 'details/SET_CLEAR_COUNTRY';

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  payload: neighbors,
});

export const setClearCountry = () => ({
  type: SET_CLEAR_COUNTRY,
});

export const loadCurrentCountry = (name) => (dispatch, _, client) => {
  dispatch(setLoading());
  client
    .get(detailedCountryInfo(name))
    .then((data) => dispatch(setCountry(data[0])))
    .catch((err) => dispatch(setError(err.message)));
};

export const loadNeighboringCountries = (n) => (dispatch, _, client) => {
  client
    .get(filterByCode(n))
    .then((data) => dispatch(setNeighbors(data.map((country) => country.name.common))))
    .catch((err) => console.log(err.message));
};
