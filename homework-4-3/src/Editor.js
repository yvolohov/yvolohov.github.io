import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name || '',
      company: props.user.company || '',
      location: props.user.location || '',
      bio: props.user.bio || ''
    };
  }

  onSave(event) {
    this.props.saveUser(this.state);
  }

  onChangeField(field, event) {
    this.setState({[field]: event.target.value});
  }

  render() {
    let { user, setMode } = this.props;
    let { name, company, location, bio } = this.state;

    return (
      <div className="container">
        <div className="row">

          <div className="col-3">
            <img src={user.avatar_url} />
            <h3>{user.login}</h3>
          </div>

          <div className="col-9">
            <form>
              <div className="form-group">
                <label htmlFor="user-name">User name</label>
                <input type="text" className="form-control" id="user-name"
                  value={name} onChange={this.onChangeField.bind(this, "name")}/>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" className="form-control" id="company"
                  value={company} onChange={this.onChangeField.bind(this, "company")}/>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input type="text" className="form-control" id="location"
                  value={location} onChange={this.onChangeField.bind(this, "location")}/>
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea className="form-control" id="bio" rows="3"
                  value={bio} onChange={this.onChangeField.bind(this, "bio")}>
                </textarea>
              </div>

              <button type="button" className="btn btn-secondary" onClick={setMode}>Cancel</button>
              <span>  </span>
              <button type="button" className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Editor;
