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
    channels: PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object.isRequired
}