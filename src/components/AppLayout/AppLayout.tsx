import React from 'react';
import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

function AppLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Popup />
    </>
  );
}

export default AppLayout;
