import React from 'react';
import Header from '../Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import Main from '../Main/Main.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;