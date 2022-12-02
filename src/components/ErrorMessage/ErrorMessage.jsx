import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styled.js';

const ErrorMessage = ({ children }) => {
  return (
    <StyledErrorMessage>
      <p>{children}</p>
    </StyledErrorMessage>
  );
};

export default ErrorMessage;
