import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/">home</Link>
      <Link to="/workers">workers</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Header;
