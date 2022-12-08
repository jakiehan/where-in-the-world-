import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectDarkTheme } from '../../store/theme/themeSelectors';
import GlobalStyled from '../../styles/Global.styled';
import theme from '../../styles/theme';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import DetailedPage from '../../pages/DetailedPage/DetailedPage';
import NotFound from '../../pages/NotFoundPage/NotFound';

const App = () => {
  const darkMode = useSelector(selectDarkTheme);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalStyled />
      <Routes>
        <Route
          exact
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="country/:name"
            element={<DetailedPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
