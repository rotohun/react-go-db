import React, { Component } from 'react'

export default class Users extends Component {

  onClick = (e) => {
    e.preventDefault();
    const {setUser, user} = this.props;
    setUser(user);
  }

  render() {
      const { user, activeUser } = this.props;
      const active = user === activeUser ? 'active' : ''
      return (
          <li className={active}>
              <a onClick={this.onClick.bind(this)}>
                  {user.name}
              </a>
          </li>
      )
  }

}
