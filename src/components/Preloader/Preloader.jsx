import React from 'react';
import { StyledPreloader, Span } from './Preloader.styled.js';
import { preloaderMsg } from '../../utils/constants/generalConstants.js';

const Preloader = () => {
  return (
    <StyledPreloader>
      <Span>
        {preloaderMsg}
      </Span>
    </StyledPreloader>
  );
};

export default Preloader;
