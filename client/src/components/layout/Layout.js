import React from 'react';
import Header from '../header/header'
import Main from '../main/main'
import Footer from '../footer/footer'
import './layout.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Layout() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
