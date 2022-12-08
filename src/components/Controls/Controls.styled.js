import styled from 'styled-components';
import { StyledContainer } from '../../styles/Container.styled';

export const StyledControls = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    gap: 20px;
    padding: 35px 0 25px;
  }

  @media (max-width: ${({ theme }) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    flex-direction: column;
    gap: 25px;
    padding: 40px 0 30px;
  }
`