import { Component } from 'react';

class Aloha extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({ isGreeting: !isGreeting });
  };
  selfDestruction = () => {
    const { deleteUser, id } = this.props;
    deleteUser(id);
  };
  render () {
    const { name, photo, removeChild, id } = this.props;
    const { isGreeting } = this.state;
    if (!isGreeting) {
      return <h1>Пока {name}</h1>;
    }
    return (
      <>
        <h1>
          {isGreeting ? 'Hello' : 'Goodbye'}, {name}
        </h1>
        <img src={photo}></img>
        <button onClick={this.switchState}>Switch</button>
        <button onClick={this.selfDestruction}>Delete</button>
      </>
    );
  }
}
export default Aloha;
