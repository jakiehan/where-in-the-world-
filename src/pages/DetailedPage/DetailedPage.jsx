import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { StyledDetailedPage, BackBtn } from './DetailedPage.styled';
import { selectDetails } from '../../store/details/detailsSelectors';
import { loadCurrentCountry, setClearCountry } from '../../store/details/detailsActions';
import DetailsCountry from '../../components/DetailsCountry/DetailsCountry';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Preloader from '../../components/Preloader/Preloader';
import { refactorCurrentCountryInfo } from '../../utils/refactorCurrentCountryInfo';
import { backBtn } from '../../utils/constants/generalConstants';

const DetailedPage = () => {
  
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { country, status, error } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCurrentCountry(name));

    return () => {
      dispatch(setClearCountry());
    };
  }, [name]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <StyledDetailedPage>
      {status === 'rejected' && <ErrorMessage>{error}</ErrorMessage>}
      {status === 'loading' && <Preloader />}
      {status === 'received' && (
        <>
          <BackBtn onClick={handleClick}>{backBtn}</BackBtn>
          <DetailsCountry
            country={refactorCurrentCountryInfo(country)}
            push={navigate}
          />
        </>
      )}
    </StyledDetailedPage>
  );
};

export default DetailedPage;
