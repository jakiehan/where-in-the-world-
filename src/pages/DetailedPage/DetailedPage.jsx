import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledDetailedPage, BackBtn } from './DetailedPage.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetails } from '../../store/details/detailsSelectors.js';
import { loadCurrentCountry, setClearCountry } from '../../store/details/detailsActions.js';
import DetailsCountry from '../../components/Details/DetailsCountry.jsx';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import Preloader from '../../components/Preloader/Preloader.jsx';
import { refactorCurrentCountryInfo } from '../../utils/refactorCurrentCountryInfo.js';

const DetailedPage = () => {

  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { country, status, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCurrentCountry(name))

    return () => {
      dispatch(setClearCountry());
    }
  }, [name])

  const handleClick = () => {
    navigate(-1);
  }

  return (
    <StyledDetailedPage>
      {status === 'rejected' && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
      {status === 'loading' && (
        <Preloader />
      )}
      {status === 'received' && (
        <>
          <BackBtn onClick={handleClick}>
            ← Back
          </BackBtn>
          <DetailsCountry country={refactorCurrentCountryInfo(country)} push={navigate} />
        </>
      )}
    </StyledDetailedPage>
  );
};

export default DetailedPage;
