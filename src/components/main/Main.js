import React from 'react';
import Banner from '../banner/banner';
import Workers from '../workers/workers';
import './main.css';

function Main() {
  return (
    <div className="main">
      <Banner />
      <Workers />
    </div>
  );
}

export default Main;
