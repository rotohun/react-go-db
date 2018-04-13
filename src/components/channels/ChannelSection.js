import React, { Component } from 'react'
import PropTypes from 'prop-types'


//Components
import ChannelForm from './ChannelForm'
import ChannelList from './ChannelList'

export default class ChannelSection extends Component {
  render() {
    return (
      <div>
        <ChannelList {...this.props} />
        <ChannelForm {...this.props} />
      </div>
    )
  }
}

ChannelSection.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired,
    addChannel: React.PropTypes.func.isRequired
}