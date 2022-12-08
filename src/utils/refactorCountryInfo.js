export const refactorCountryInfo = (country) => ({
  img: country.flags.png,
  name: country.name.common,
  info: [
    {
      title: 'Population',
      description: country.population.toLocaleString(),
    },
    {
      title: 'Region',
      description: country.region,
    },
    {
      title: 'Capital',
      description: country.capital.join(', '),
    },
  ],
});
