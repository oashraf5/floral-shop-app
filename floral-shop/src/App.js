import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import ImageList from './components/ImageList';
import PastWorkList from './components/PastWorkList';

import NavBar from './components/NavBar';

export default class App extends Component {

  render() {

    if (PastWorkList == undefined) {
      return <div></div>;
    }

    console.log(PastWorkList[0]);


    return (
      <div className="App">
        <div className="flower-card">
            <img className="flower-img" src={ImageList[PastWorkList[0].imageIdx]} />
            <p className="flower-text" >{PastWorkList[0].EventType}</p>
            <p className="flower-text" >${PastWorkList[0].Price}</p>
        </div>

        <NavBar />

      </div>
    );
  }
}

