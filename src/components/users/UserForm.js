import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserForm extends Component {
  
  onSubmit = (e) => {
    e.preventDefault();
    const node = this.refs.user;
    const userName = node.value;
    this.props.addUser(userName);
    node.value=""
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className=" form-group"> 
            <input
                className="form-control"
                placeholder='Add User'
                type='text'
                ref='user'
            />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  addUser: PropTypes.func.isRequired
}