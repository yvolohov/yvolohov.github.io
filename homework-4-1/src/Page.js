import React from 'react';

class Page extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="container">

        <div className="row">
          <div className="col-12-sm">
            <img src={props.avatar_url}/>
          </div>
        </div>

        <div className="row">
          <div className="col-12-sm">
            <p>
              <b>{props.name}</b>
            </p>
            <p>
              <b>{props.login}</b>
            </p>
            <p>
              Company: <span>{props.company}</span>
            </p>
            <p>
              Location: <span>{props.location}</span>
            </p>
            <p>
              <b>Statistics:</b>
            </p>
            <p>
              Repositories: <span>{props.public_repos}</span><br/>
              Following: <span>{props.following}</span><br/>
              Followers: <span>{props.followers}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
