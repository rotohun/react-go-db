import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Components
import MessageForm from './MessageForm'
import MessageList from './MessageList'

export default class MessageSection extends Component {
  render() {
    return (
        <div className="support panel panel-secondary">
        <div className="panel-heading">
          <strong> Messages </strong>
        </div>
        <div className="panel-body channels" >
            <MessageList />
            <MessageForm />
        </div>
      </div>
    )
  }
}

MessageSection.propTypes = {
  sendMessage: PropTypes.func.isRequired
}