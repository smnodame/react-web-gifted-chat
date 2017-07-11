import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GiftedChat} from 'react-web-gifted-chat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GiftedChat/>
      </div>
    );
  }
}

export default App;
