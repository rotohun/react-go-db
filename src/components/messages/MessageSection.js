import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MessageSection extends Component {
  render() {
    return (
        <div className=" support panel panel-primary">
        <div className="panel-heading">
          <strong> Users </strong>
        </div>
        <div className="panel-body channels" >
            <h1> Message </h1>
        </div>
      </div>
    )
  }
}
