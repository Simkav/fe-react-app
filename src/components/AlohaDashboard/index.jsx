import React, { Component } from 'react';
import SortedAlohaList from '../SortedAlohaList';
class AlohaDashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isDirectSort: true,
      users: [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
        },
        {
          id: 2,
          firstName: 'Aqwe',
          lastName: 'Doe',
        },
        {
          id: 3,
          firstName: 'Csdf',
          lastName: 'Doe',
        },
        {
          id: 4,
          firstName: 'Zxcasd',
          lastName: 'Doe',
        },
        {
          id: 5,
          firstName: 'Bgasd',
          lastName: 'Doe',
        },
        {
          id: 6,
          firstName: 'Qewqt',
          lastName: 'Doe',
        },
        {
          id: 7,
          firstName: 'Bzxc',
          lastName: 'Doe',
        },
      ],
    };
  }

  setUsers = users => {
    this.setState({ users });
  };
  deleteUser = userId => {
    const { users } = this.state;
    this.setState({
      users: users.filter(user => user.id !== userId),
    });
  };

  render () {
    const { users } = this.state;
    return (
      <>
        <SortedAlohaList
          users={users}
          setUsers={this.setUsers}
          deleteUser={this.deleteUser}
        />
      </>
    );
  }
}

export default AlohaDashboard;
