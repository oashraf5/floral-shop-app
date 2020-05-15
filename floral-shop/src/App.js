import React, { Component } from 'react';
import './App.css';
import {Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/NavBar';

export default class App extends Component {

  render() {
    return (
      <div className="App">

        <NavBar />

      </div>
    );
  }
}

