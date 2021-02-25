import React, { Component } from 'react';
import Spinner from '../Spinner';

class UserLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      isError: null,
      currentPage: 1,
      results: 1,
    };
  }
  fetchResults = () => {
    const { currentPage, results } = this.state;
    fetch(
      `https://randomuser.me/api/?results=${results}&page=${currentPage}&seed=FE2020-2`
    )
      .then(res => res.json())
      .then(data => this.setState({ users: data.results }))
      .catch(() => this.setState({ isError: true }))
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount () {
    this.fetchResults();
  }
  componentDidUpdate (prevProps, prevState) {
    const { currentPage } = this.state;
    if (prevState.currentPage !== currentPage) {
      this.fetchResults();
    }
  }

  prevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };
  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  render () {
    const { users, isFetching, isError } = this.state;
    return (
      <div>
        <h1>User List</h1>
        <button onClick={this.prevPage}>prev page</button>
        <button onClick={this.nextPage}>next page</button>
        {isFetching && <Spinner />}
        {isError && <div>Error</div>}
        <ul>
          {users.map(user => (
            <li key={user.login.sha1}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserLoader;
