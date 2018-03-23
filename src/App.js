import React, { Component } from 'react';
import './css/App.css';
import Header from "./components/header/Header.js"
import Rubrique from './components/main/Rubrique.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="global">
          <Rubrique montitleone="Ëtes vous une crêche" />
          <Rubrique montitleone="Ëtes vous un parent" />
        </div>

      </div>
    );
  }
}

export default App;
