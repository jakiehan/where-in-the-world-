import React from 'react';
import { StyledMain } from './Main.styled';
import { StyledContainer } from '../../styles/Container.styled';

const Main = ({ children }) => (
  <StyledMain>
    <StyledContainer>{children}</StyledContainer>
  </StyledMain>
);

export default Main;
