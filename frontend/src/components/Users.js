import React from "react";
import { useQuery } from '@apollo/react-hooks';
import gpl from 'graphql-tag';

const GET_USER = gpl`
{
  users {
    id
    name
    email
    postsCount
  }
}
`;

function Users() {
  const {loading, error, data} = useQuery(GET_USER);

  if (loading) return 'Loading ...';
  if (error) return `Error ${error.message}`;
  console.log(data);
  return (
    <div className="flext flext-wrap item-center pb-16">
      {data.users.map(user => (
        /* show user info, avatar...etc */
        <div key={user.id} >
          name: {user.name}
          email: {user.email}
          post count: {user.postsCount}
        </div>
      ))}
    </div>
  )
}

export default Users;