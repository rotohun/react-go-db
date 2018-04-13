import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ChannelForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        const node = this.ref.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value=""

    }
    render() {
        return (
        <form onSubmit={this.onSubmit.bind(this)}>
            <input
                placeholder='Add Channel'
                type='text'
                ref='channel'
            />
        </form>
        )
    }
}

ChannelForm.propTypes = {
    addChannel: React.PropTypes.func.isRequired
}