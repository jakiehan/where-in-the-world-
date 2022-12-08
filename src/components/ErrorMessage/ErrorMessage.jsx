import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styled';

const ErrorMessage = ({ children }) => (
  <StyledErrorMessage>
    <p>{children}</p>
  </StyledErrorMessage>
);

export default ErrorMessage;
