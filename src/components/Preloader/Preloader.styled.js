import styled, {keyframes} from 'styled-components';

const preloaderAnimation = keyframes`
  50% {
    transform: rotate(calc(180deg * var(--direction)));
  }
  100% {
    transform: rotate(calc(360deg * var(--direction)));
  }
`

export const StyledPreloader = styled.div`
  width: 180px;
  height: 250px;
  margin: 100px auto 0;
  font-size: 25px;
  box-sizing: border-box;
  border-top: 0.3em solid hotpink;
  border-radius: 50%;
  position: relative;
  animation: ${preloaderAnimation} 2s ease-in-out infinite;
  --direction: 1;
  
  &:before {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
    border-top: 0.3em solid dodgerblue;
    transform: rotate(120deg);
  }
  
  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    box-sizing: border-box;
    top: -0.2em;
    border-top: 0.3em solid gold;
    transform: rotate(240deg);
  }

  @media (max-width: ${({theme}) => theme.media.mobile}) {
    width: 110px;
    height: 150px;
    font-size: 15px;
    margin: 50px auto 0;
  }
`

export const Span = styled.span`
  position: absolute;
  color: ${({theme}) => theme.color.text};
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: 10em;
  animation: ${preloaderAnimation} 2s linear infinite;
  --direction: -1;
`