import React from 'react';
import { StyledPreloader, Span } from './Preloader.styled';
import { preloaderMsg } from '../../utils/constants/generalConstants';

const Preloader = () => (
  <StyledPreloader>
    <Span>{preloaderMsg}</Span>
  </StyledPreloader>
);

export default Preloader;
