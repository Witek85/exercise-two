import React from 'react';
import Header from '../header/header'
import Main from '../main/main'
import Footer from '../footer/footer'
import './layout.css';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
