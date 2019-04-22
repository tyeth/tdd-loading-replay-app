import React, { Component } from 'react';
import './App.css';
import LoadingIndicator from './Components/LoadingIndicator/LoadingIndicator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         App
        </header>
        <LoadingIndicator isLoading={false}>
          <div>ahoy!</div>
        </LoadingIndicator>
      </div>
    );
  }
}

export default App;
