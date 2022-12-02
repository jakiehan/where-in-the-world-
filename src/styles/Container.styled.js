import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    padding: 0 16px;
  }
`
