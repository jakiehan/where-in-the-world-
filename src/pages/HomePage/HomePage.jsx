import React, { useEffect } from 'react';
import { StyledHomePage } from './HomePage.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card.jsx';
import Controls from '../../components/Controls/Controls.jsx';
import ListCountries from '../../components/ListCountries/ListCountries.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import { loadCountries } from '../../store/countries/countriesActions.js';
import { selectVisibleCountries, selectAllCountries } from '../../store/countries/countriesSelectors.js';
import { selectRegion, selectSearch} from '../../store/controls/controlsSelectors.js';
import { refactorCountryInfo } from '../../utils/refactorCountryInfo.js';
import { useRenderingCardsByScreenWidthAndHeight } from '../../hooks/useRenderingCardsByScreenWidthAndHeight.js';
import { searchMsg } from '../../utils/constants/generalConstants.js';

const HomePage = () => {

  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const region = useSelector(selectRegion);
  const countries = useSelector(state => selectVisibleCountries(state, { search, region }));
  const { list, error, status } = useSelector(selectAllCountries);

  const { initialNumberOfCards } = useRenderingCardsByScreenWidthAndHeight();

  useEffect(() => {

    if (list.length === 0) {
      dispatch(loadCountries());
    }
  }, [])

  return (
    <StyledHomePage>
      <Controls />
      {status === 'rejected' && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
      {status === 'loading' && (
        <Preloader />
      )}
      {status === 'received' && (
        countries.length !== 0 ? (
          <ListCountries>
            {countries.slice(0, initialNumberOfCards).map((c) =>
              <li key={c.name.official}>
                <Card cardInfo={refactorCountryInfo(c)} numberCards={initialNumberOfCards} />
              </li>
            )}
          </ListCountries>
        ) : (
          <ErrorMessage>{searchMsg}</ErrorMessage>
        )
      )}
    </StyledHomePage>
  );
};

export default HomePage;
