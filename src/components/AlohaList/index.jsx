import React from 'react';
import Aloha from '../Aloha';

function AlohaList(props) {
  const mapAloha = ({ firstName, lastName, id }) => (
    <Aloha key={id} id={id} name={`${firstName} ${lastName}`} />
  );
  const { users } = props;
  return <section>{users.map(mapAloha)}</section>;
}
export default AlohaList;
