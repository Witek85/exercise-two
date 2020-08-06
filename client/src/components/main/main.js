import React from 'react';
import Banner from '../banner/banner';
import Workers from '../workers/workers';
import './main.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from '../fib/fib';
import About from '../about/about';

function Main() {
  return (

      <div className="main">
        <Banner />
        <Route exact path="/" component={About} />
        {/* <Route exact path="/" component={Fib} /> */}
        <Route exact path="/workers" component={Workers} />
        <Route exact path="/about" component={About} />
      </div>

  );
}

export default Main;
