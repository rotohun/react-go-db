import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Components
import Channel from './Channel'


export default class ChannelList extends Component {
  render() {
    return (
      <ul>
        {
            this.props.channels.map( x => {
               return <Channel
                    channel={x}
                    setChannel = {this.props.setChannel}
                    key={x.id}
                    {...this.props}
                />
            })
        }
      </ul>
    )
  }
}

ChannelList.propTypes = {
    channels: React.PropTypes.array.isRequired,
    setChannel: React.PropTypes.func.isRequired
}