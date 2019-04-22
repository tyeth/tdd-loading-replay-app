import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingIndicator from './Components/LoadingIndicator/LoadingIndicator.js';
import Loading from './Components/Loading/Loading.js'
class App extends Component {
  state = {
    isLoading: true,
  };

  props = {
    resetTimerPaused:false,
  }

  componentDidMount() {
    if(!this.props.resetTimerPaused){
      this._timer = setTimeout(
        () => this.setState({ isLoading: false }),
        3000
      );
    }
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div style={{ backgroundColor: 'white',  color: 'blue'  }}>
            <pre>isLoading: {String(this.state.isLoading)}</pre>
            <LoadingIndicator isLoading={this.state.isLoading}>
              <div>ahoy!</div>
            </LoadingIndicator>
            {/* <Loading isLoading={true}><div>classy</div></Loading> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;