import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MessageForm extends Component {

    onSubmit = (e) => {
        e.preventDefault();
        const node = this.refs.message;
        const message = node.value;
        this.props.sendMessage(message);
        node.value=""
    }

    render() {
        return (
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group"> 
                <input
                    className="form-control"
                    placeholder='Message...'
                    type='text'
                    ref='message'
                />
            </div>
        </form>
        )
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired
}