import styled from 'styled-components';

export const StyledListCountries = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  justify-content: space-evenly;
  gap: 40px;
  padding: 10px 0;
  margin: 0;
  list-style-type: none;

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    grid-template-columns: repeat(auto-fit, 235px);
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    grid-template-columns: repeat(auto-fit, 245px);
  }
`