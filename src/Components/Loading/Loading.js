import React, { Component } from 'react';
import logo from './Loading-Logo-Red.png';
import './Loading.css';

class Loading extends Component {
  doit(){
    window.location.reload();
  }
  render() {
    return (
      <div className="Loading">
        <header className="Loading-Header">
          <img src={logo} className="Loading-logo" alt="logo" />
          <p>
            Loading
          </p>
        </header>
        <button 
          className="Loading-failed-button" 
          onClick={this.doit}
          >
          Taking too long? Think it's stalled? Click here to refresh the page...
        </button>
      </div>
    );
  }
}

export default Loading;
