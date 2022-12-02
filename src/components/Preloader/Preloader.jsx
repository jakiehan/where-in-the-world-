import React from 'react';
import { StyledPreloader, Span } from './Preloader.styled.js';

const Preloader = () => {
  return (
    <StyledPreloader>
      <Span>
        Loading...
      </Span>
    </StyledPreloader>
  );
};

export default Preloader;
