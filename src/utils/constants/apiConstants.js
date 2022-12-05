import { BASE_URL } from './generalConstants.js';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';
export const detailedCountryInfo = (name) => BASE_URL + 'name/' + name;
export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');