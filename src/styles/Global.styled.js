import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyled = createGlobalStyle`
  ${normalize}
  
  body {
    background-color: ${({theme}) => theme.color.bgBody};
    font-family: 'Nunito Sans', Arial, sans-serif;
    font-weight: ${({theme}) => theme.fontWeight.small};;
    line-height: 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyled;