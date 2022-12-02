import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
  padding: 50px;
  text-align: center;
  
  & > p {
    font-size: 16px;
    line-height: 17px;
    color: red;
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    & > p {
      font-size: 14px;
      line-height: 15px;
    }
  }
`