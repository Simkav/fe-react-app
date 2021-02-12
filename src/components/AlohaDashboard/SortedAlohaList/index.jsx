import { Component } from 'react';
import AlohaList from '../AlohaList';
class SortedAlohaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDirectSort: true,
    };
  }
  sortUsers = () => {
    const { isDirectSort } = this.state;
    const { users, setUsers } = this.props;

    const usersCopy = JSON.parse(JSON.stringify(users));
    setUsers(
      usersCopy.sort((a, b) => (isDirectSort ? b.id - a.id : a.id - b.id))
    );
    this.setState({
      isDirectSort: !isDirectSort,
    });
  };
  render() {
    const { users, setUsers, deleteUser } = this.props;
    return (
      <>
        <AlohaList users={users} setUsers={setUsers} deleteUser={deleteUser} />
        <button onClick={this.sortUsers}>SORT</button>
      </>
    );
  }
}

export default SortedAlohaList;
