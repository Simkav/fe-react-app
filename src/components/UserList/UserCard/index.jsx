const UserCard = props => {
  const {
    user: { id, firstName, lastName, isSelected },
    userSelector,
  } = props;

  const styles = {
    border: isSelected ? '4px solid' : undefined,
  };

  const btnHandler = () => userSelector(id);

  return (
    <article style={styles}>
      <p>ID: {id}</p>
      <h1>
        User Name: {firstName} {lastName}
      </h1>
      <button onClick={btnHandler}>Select this User</button>
    </article>
  );
};

export default UserCard;
