import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ChannelSection from './components/channels/ChannelSection'

class App extends Component {
  constructor(props){
    this.state = {
      channels: []
    }
  }

  addChannel = (name) => {
    let {channels} = this.state
    channels.push({id: channels.length, name})
    this.setState({channels})
    // TODO: Send to server
  }

  setChannel = (activeChannel) => {
    this.setState({activeChannel})
    // TODO: Get Channels Messages
  }

  render() {
    return (
      <div className="App">
        <ChannelSection 
          channels={this.state.channels}
          addChannel={this.addChannel}
        />
      </div>
    );
  }
}

export default App;
