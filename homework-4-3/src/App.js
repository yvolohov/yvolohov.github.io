import React from 'react';
import axios from 'axios';
import Loader from './Loader.js';
import Viewer from './Viewer.js';
import Editor from './Editor.js';

const ACCESS_TOKEN = new Buffer('NGNkNmY4ZjYxYWE4ZGNhNzIxNzQ0ZTMyYmNkY2E0YmQxY2MyZWViMA==', 'base64').toString('ascii');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      user: null
    };
  }

  componentWillMount() {
    this.getUser();
  }

  setMode(editMode) {
    this.setState({editMode: editMode});
  }

  getUser() {
    axios.get('https://api.github.com/user?access_token=' + ACCESS_TOKEN)
      .then((response) => {
        this.setState({user: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveUser(user) {
    axios.patch('https://api.github.com/user?access_token=' + ACCESS_TOKEN, user)
      .then((response) => {
        this.setState({editMode: false, user: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { editMode, user } = this.state;

    if (!user) {
      return <Loader />;
    }

    return (editMode)
      ? <Editor user={user} saveUser={this.saveUser.bind(this)} setMode={this.setMode.bind(this, false)} />
      : <Viewer user={user} setMode={this.setMode.bind(this, true)} />;
  }
}

export default App;
