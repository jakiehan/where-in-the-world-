import React from 'react';
import { useDispatch } from 'react-redux';
import { clearControls } from '../../store/controls/controlsActions.js';
import { StyledHeader, ContainerHeader, WrapperLink, Title } from './Header.styled';
import ModeSwitcher from '../ModeSwitcher/ModeSwitcher.jsx';

const Header = () => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearControls());
    localStorage.removeItem('cards');
  }

  return (
    <StyledHeader>
      <ContainerHeader>
        <WrapperLink>
          <Title onClick={handleClick}>
            Where in the world?
          </Title>
        </WrapperLink>
        <ModeSwitcher />
      </ContainerHeader>
    </StyledHeader>
  );
};

export default Header;
