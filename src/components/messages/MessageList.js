import React, { Component } from 'react'
import PropTypes from 'prop-types'

//components
import Message from './Messages'

export default class MessageList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.message.map( x => {
            return <Message key={x.id} message={x.message} />
          })
        }

      </ul>
    )
  }
}

MessageList.PropTypes = {
  message: PropTypes.array.isRequired
}