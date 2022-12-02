import styled, { keyframes } from 'styled-components';
import { StyledButton } from '../../styles/Button.styled';

const sunnyAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const moonAnimation = keyframes`
  0% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    transform: rotate3d(0, 0, 1, 30deg);
  }
  35% {
    transform: rotate3d(0, 0, 1, -30deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, 25deg);
  }
  65% {
    transform: rotate3d(0, 0, 1, -20deg);
  }
  75% {
    transform: rotate3d(0, 0, 1, 15deg);
  }
  85% {
    transform: rotate3d(0, 0, 1, -10deg);
  }
  95% {
    transform: rotate3d(0, 0, 1, 5deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`

export const StyledModeSwitcher = styled.div`
  padding: 2px;
`

export const Button = styled(StyledButton)`
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 1;
  
  &:hover {
    opacity: .7;
    transition: opacity 0.2s ease;

    svg {
      transform-origin: ${({ darkMode }) => darkMode ? 'top center' : 'center'};
      animation: ${({ darkMode }) => darkMode ? moonAnimation : sunnyAnimation} 1s ${({ darkMode }) => darkMode ? '' : 'linear'} ${({ darkMode }) => darkMode ? 'both' : 'infinite'};
    }
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    gap: 5px;
    
    & > svg {
      width: 13px;
      height: 13px;
    }
  }
`

export const Span = styled.span`
  font-size: 15px;
  line-height: 17px;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    font-size: 12px;
    line-height: 13px;
  }

  @media (max-width: ${({theme}) => theme.media.tablet.max}) and (min-width: ${({ theme }) => theme.media.tablet.min}) {
    font-size: 13px;
    line-height: 14px;
  }
`