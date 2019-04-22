import React, { Component } from 'react';
import './App.css';
import LoadingIndicator from './Components/LoadingIndicator/LoadingIndicator';

class App extends Component {
  render() {
    return (
      <div className="App">
         <LoadingIndicator isLoading={true}>
          <div>ahoy!</div>
        </LoadingIndicator>
        <header className="App-header">
         App
        </header>
       
      </div>
    );
  }
}

export default App;
