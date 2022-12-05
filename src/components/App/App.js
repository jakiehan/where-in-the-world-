import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDarkTheme } from '../../store/theme/themeSelectors.js';
import GlobalStyled from '../../styles/Global.styled.js';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme.js';
import Layout from '../Layout/Layout.jsx';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import DetailedPage from '../../pages/DetailedPage/DetailedPage.jsx';
import NotFound from '../../pages/NotFoundPage/NotFound.jsx';

const App = () => {

  const darkMode = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalStyled />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="country/:name" element={<DetailedPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
