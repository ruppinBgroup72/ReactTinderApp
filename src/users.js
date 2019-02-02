import React from 'react'
class Users extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Users: got {this.props.match.params.id}</h1>
  }
}
export default Users