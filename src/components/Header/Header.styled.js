import styled from 'styled-components';
import { StyledContainer } from '../../styles/Container.styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  min-height: 100px;
  background-color: ${({ theme }) => theme.color.bgElem};
  display: flex;
  align-items: center;
  box-shadow: ${({theme}) => theme.color.shadow};
`

export const ContainerHeader = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperLink = styled(Link).attrs({
  to: '/'
})`
  text-decoration: none;
  color: ${({ theme }) => theme.color.text};
  opacity: 1;
  
  &:hover {
    opacity: .7;
    transition: opacity 0.2s ease;
  }
`

export const Title = styled.h1`
  font-size: 18px;
  line-height: 20px;
  font-weight: 800;
  margin: 0;
  text-shadow: ${({ theme }) => theme.color.shadowText};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 15px;
    line-height: 17px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 16px;
    line-height: 17px;
  }
`