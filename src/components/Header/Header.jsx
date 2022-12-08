import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { clearControls } from '../../store/controls/controlsActions';
import ModeSwitcher from '../ModeSwitcher/ModeSwitcher';
import { headerTitle } from '../../utils/constants/generalConstants';
import {
  StyledHeader,
  ContainerHeader,
  WrapperLink,
  Title,
} from './Header.styled';

const Header = () => {
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearControls());
    localStorage.removeItem('cards');
  };

  return (
    <StyledHeader>
      <ContainerHeader>
        <WrapperLink>
          <Title onClick={handleClick}>{headerTitle}</Title>
        </WrapperLink>
        <ModeSwitcher />
      </ContainerHeader>
    </StyledHeader>
  );
};

export default memo(Header);
