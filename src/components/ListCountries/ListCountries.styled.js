import styled from 'styled-components';
import { StyledList } from '../../styles/List.styled.js';

export const StyledListCountries = styled(StyledList)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  justify-content: space-evenly;
  gap: 40px;
  padding: 10px 0;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    grid-template-columns: repeat(auto-fit, 235px);
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    grid-template-columns: repeat(auto-fit, 245px);
  }
`