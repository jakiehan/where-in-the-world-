import React from 'react';
import { StyledListCountries } from './ListCountries.styled';

const ListCountries = ({ children }) => (
  <StyledListCountries>{children}</StyledListCountries>
);

export default ListCountries;
