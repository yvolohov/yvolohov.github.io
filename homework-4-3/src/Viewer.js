import React from 'react';

class Viewer extends React.Component {
  render() {
    let { user, setMode } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img src={user.avatar_url} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>
              <a href="#" onClick={setMode}>{user.name}</a>
            </h2>
            <br/>
            <h3>{user.login}</h3>
            <br/>
            <p>
              <b>Company:</b> <span>{user.company}</span>
            </p>
            <p>
              <b>Location:</b> <span>{user.location}</span>
            </p>
            <p>
              <b>Bio:</b> <span>{user.bio}</span>
            </p>
            <p>
              <b>Statistics:</b>
            </p>
            <p>
              Repositories: <span>{user.public_repos}</span><br/>
              Following: <span>{user.following}</span><br/>
              Followers: <span>{user.followers}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Viewer;
