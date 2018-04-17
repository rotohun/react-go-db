import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Components
import Users from './Users'

export default class UserList extends Component {
  render() {
    return (
      <ul>
        {
            this.props.users.map( x => {
               return <Users
                    user={x}
                    key={x.id}
                    {...this.props}
                />
            })
        }
      </ul>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  activeUser: PropTypes.object.isRequired
}