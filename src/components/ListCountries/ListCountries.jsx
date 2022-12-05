import React from 'react';
import { StyledListCountries } from './ListCountries.styled.js';

const ListCountries = ({ children }) => {

  return (
    <StyledListCountries>
      {children}
    </StyledListCountries>
  );
};

export default ListCountries;
