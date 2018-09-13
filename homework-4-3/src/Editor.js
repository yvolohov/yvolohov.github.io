import React from 'react';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      company: props.user.company,
      location: props.user.location,
      bio: props.user.bio
    };
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
                <label for="user-name">User name</label>
                <input type="text" className="form-control" id="user-name"
                  value={name} onChange={this.onChangeField.bind(this, "name")}/>
              </div>
              <div className="form-group">
                <label for="company">Company</label>
                <input type="text" className="form-control" id="company"
                  value={company} onChange={this.onChangeField.bind(this, "company")}/>
              </div>
              <div className="form-group">
                <label for="location">Location</label>
                <input type="text" className="form-control" id="location"
                  value={location} onChange={this.onChangeField.bind(this, "location")}/>
              </div>
              <div class="form-group">
                <label for="bio">Bio</label>
                <textarea class="form-control" id="bio" rows="3"
                  onChange={this.onChangeField.bind(this, "bio")}>
                  {bio}
                </textarea>
              </div>

              <button type="button" className="btn btn-secondary" onClick={setMode}>Cancel</button>
              <span>  </span>
              <button type="button" className="btn btn-primary">Save</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default Editor;
