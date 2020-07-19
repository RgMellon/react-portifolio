import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Aside from './components/aside';
import MenuMobile from './components/MenuMobile';

import GlobalStyles from './styles/global';

const src: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <MenuMobile />
        <Aside />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default src;
