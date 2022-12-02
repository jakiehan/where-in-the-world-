import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StyledNotFound, Title, SubTitle, Button } from './NotFound.styled.js';
import { setClearCountry } from '../../store/details/detailsActions.js';

const NotFound = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate('/');
    localStorage.removeItem('cards');
    dispatch(setClearCountry());
  }

  return (
    <StyledNotFound>
      <Title>
        404
      </Title>
      <SubTitle>
        Not Found...
      </SubTitle>
      <Button onClick={handleClick}>
        На главную
      </Button>
    </StyledNotFound>
  );
};

export default NotFound;
