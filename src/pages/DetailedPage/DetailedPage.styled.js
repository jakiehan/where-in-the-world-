import styled from 'styled-components';
import { StyledButton } from '../../styles/Button.styled.js';

export const StyledDetailedPage = styled.section`
  display: grid;
  justify-items: center;
  grid-row-gap: 60px;
  padding: 60px 0;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    padding: 40px 0;
    grid-row-gap: 40px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    padding: 45px 0;
    grid-row-gap: 45px;
  }
  
  @media (max-width: ${({theme}) => theme.media.portraitTablets.max}) and (min-width: ${({ theme }) => theme.media.portraitTablets.min}) {
    padding: 50px 0;
    grid-row-gap: 50px;
  }
`

export const BackBtn = styled(StyledButton).attrs({
  'aria-label': 'Back button',
})`
  justify-self: start;
  padding: 8px 25px;
  font-size: 14px;
  line-height: 15px;
  background-color: ${({ theme }) => theme.color.bgElem};
  box-shadow: ${({ theme }) => theme.color.shadow};
  color: ${({ theme }) => theme.color.text};
  border-radius: 4px;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.color.shadowHov};
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    padding: 7px 20px;
    font-size: 12px;
    line-height: 13px;
    border-radius: 2px;
  }
`