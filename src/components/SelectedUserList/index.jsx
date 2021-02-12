import React from 'react';

const SelectedUserList = (props) => {
  const { users } = props;
  const selectedUsers = users.filter((u) => u.isSelected);

  return (
    <div>
      {selectedUsers.map(({ firstName, lastName, id }) => (
        <span key={-id}>
          {firstName} {lastName},
        </span>
      ))}
    </div>
  );
};

export default SelectedUserList;
