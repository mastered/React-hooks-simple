import React from "react";
import useAPI from "./useAPI";

const UserList = () => {
  const users = useAPI("users");

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
