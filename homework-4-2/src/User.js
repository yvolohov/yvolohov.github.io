import React from 'react';

class User extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="row">
        <div className="col-3" style={{padding: "5px"}}>
          <img src={ props.avatar } width="200" heignt="200"/>
        </div>
        <div className="col-9" style={{padding: "5px"}}>
          <h2>
            { props.login }
            <span>  </span>
            { props.isAdmin ? <span className="badge badge-info">Admin</span> : null }
          </h2>
          <h4>
            <a href={ props.url }>{ props.url }</a>
          </h4>
        </div>
      </div>
    );
  }
}

export default User;
