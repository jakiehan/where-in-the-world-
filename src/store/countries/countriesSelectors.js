export const selectAllCountries = (state => state.countries);

// eslint-disable-next-line arrow-body-style
export const selectVisibleCountries = (state, { search = '', region ='' }) => {
  return state.countries.list.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase())
  )
}