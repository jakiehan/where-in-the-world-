import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledNotFound, Title, SubTitle, Button } from './NotFound.styled';
import { setClearCountry } from '../../store/details/detailsActions';
import { notFound } from '../../utils/constants/generalConstants';

const NotFound = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { title, subTitle, btn } = notFound;

  const handleClick = () => {
    navigate('/');
    localStorage.removeItem('cards');
    dispatch(setClearCountry());
  };

  return (
    <StyledNotFound>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Button onClick={handleClick}>{btn}</Button>
    </StyledNotFound>
  );
};

export default NotFound;
