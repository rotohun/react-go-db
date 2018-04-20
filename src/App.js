import React, { Component } from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//Custom Css
import './App.css';

// Components
import ChannelSection from './components/channels/ChannelSection'
import UserSection from './components/users/UserSection'
import MessageSection from './components/messages/MessageSection'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      channels: [],
      users: [],
      messages: [],
      activeChannel: {},
      activeUser: {}
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

  addUser = (name) => {
    let {users} = this.state
    users.push({id: users.length, name})
    this.setState({users})
    // TODO: Send to server
  }

  setUser = (activeUser) => {
    this.setState({activeUser})
    // TODO: Get Users Messages
  }

  sendMessage = (message) => {
    let {messages} = this.state
    messages.push({id: messages.length, message})
    this.setState({message})
  }

  render() {
    return (
       <div className='app'>
        <div className='nav'>
          <ChannelSection 
            {...this.state}
            addChannel={this.addChannel.bind(this)}
            setChannel={this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            addUser={this.addUser.bind(this)}
            setUser={this.setUser.bind(this)}
          />     
        </div>
        <MessageSection
          {...this.state}
          sendMessage={this.sendMessage.bind(this)}
        />
       </div>
    );
  }
}

export default App;
