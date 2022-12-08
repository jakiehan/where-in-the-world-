import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHomePage } from './HomePage.styled';
import Card from '../../components/Card/Card';
import Controls from '../../components/Controls/Controls';
import ListCountries from '../../components/ListCountries/ListCountries';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Preloader from '../../components/Preloader/Preloader';
import { loadCountries } from '../../store/countries/countriesActions';
import { selectVisibleCountries, selectAllCountries } from '../../store/countries/countriesSelectors';
import { selectRegion, selectSearch } from '../../store/controls/controlsSelectors';
import { refactorCountryInfo } from '../../utils/refactorCountryInfo';
import { useRenderingCardsByScreenWidthAndHeight } from '../../hooks/useRenderingCardsByScreenWidthAndHeight';
import { searchMsg } from '../../utils/constants/generalConstants';

const HomePage = () => {
  
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);
  const countries = useSelector((state) => selectVisibleCountries(state, { search, region }));
  const { list, error, status } = useSelector(selectAllCountries);

  const { initialNumberOfCards } = useRenderingCardsByScreenWidthAndHeight();

  useEffect(() => {
    if (!list.length) {
      dispatch(loadCountries());
    }
  }, []);

  return (
    <StyledHomePage>
      <Controls />
      {status === 'rejected' && <ErrorMessage>{error}</ErrorMessage>}
      {status === 'loading' && <Preloader />}
      {status === 'received' &&
        (countries.length !== 0 ? (
          <ListCountries>
            {countries.slice(0, initialNumberOfCards).map((c) => (
              <li key={c.name.official}>
                <Card
                  cardInfo={refactorCountryInfo(c)}
                  numberCards={initialNumberOfCards}
                />
              </li>
            ))}
          </ListCountries>
        ) : (
          <ErrorMessage>{searchMsg}</ErrorMessage>
        ))}
    </StyledHomePage>
  );
};

export default HomePage;
