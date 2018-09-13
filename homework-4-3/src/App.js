import React from 'react';
import axios from 'axios';
import Loader from './Loader.js';
import Viewer from './Viewer.js';
import Editor from './Editor.js';

const OAUTH_TOKEN = 'a66dcd2225cae6294d32c6b40b30799face6c15d';

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
    axios.get(`https://api.github.com/user?access_token=${OAUTH_TOKEN}`)
      .then((response) => {
        this.setState({user: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveUser(user) {
    axios.patch(`https://api.github.com/user?access_token=${OAUTH_TOKEN}`, user)
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
