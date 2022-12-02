export const refactorCurrentCountryInfo = (country) => {

  const currencies = [];

  for (let key in country.currencies) {
    currencies.push(country.currencies[key].name)
  }

  return {
    img: country.flags.png,
    name: country.name.common,
    mainInfo: [
      {
        title: 'Native Name:',
        description: country[Object.keys(country)[0]].common,
      },
      {
        title: 'Population:',
        description: country.population.toLocaleString(),
      },
      {
        title: 'Region:',
        description: country.region,
      },
      {
        title: 'Capital:',
        description: country.capital?.join(', ') || 'No information',
      },
    ],
    additionalInfo: [
      {
        title: 'Top Level Domain:',
        description: country.tld.join(', '),
      },
      {
        title: 'Currencies:',
        description: currencies,
      },
      {
        title: 'Languages:',
        description: country.languages ? Object.values(country.languages).join(', ') : 'No information',
      },
    ],
    borders: country.borders || []
  }
}
