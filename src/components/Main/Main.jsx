import { StyledMain } from './Main.styled';
import { StyledContainer } from '../../styles/Container.styled.js';

const Main = ({ children }) => {
  return (
    <StyledMain>
      <StyledContainer>{children}</StyledContainer>
    </StyledMain>
  );
};

export default Main;
