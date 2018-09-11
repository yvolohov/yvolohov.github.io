import React from 'react';
import User from './User.js';
import users from './users.json';

class UsersList extends React.Component {
  render() {
    return (
      <div className="container">
      {users.map((user) => {
        return (
          <User
            login={ user.login }
            url={ user.html_url }
            avatar={ user.avatar_url }
            isAdmin={ user.site_admin } />
        );
      })}
      </div>
    );
  }
}

export default UsersList;
