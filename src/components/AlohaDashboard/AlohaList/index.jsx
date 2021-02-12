import React from 'react';
import Aloha from '../Aloha';

function AlohaList(props) {
  const { users, deleteUser } = props;
  const mapAloha = ({ firstName, lastName, id }) => (
    <Aloha
      key={id}
      id={id}
      deleteUser={deleteUser}
      name={`${firstName} ${lastName}`}
    />
  );
  return <section>{users.map(mapAloha)}</section>;
}
export default AlohaList;
