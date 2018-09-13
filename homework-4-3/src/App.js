import React from 'react';
import axios from 'axios';
import Loader from './Loader.js';
import Viewer from './Viewer.js';
import Editor from './Editor.js';

const OAUTH_TOKEN = 'b2cb505347ed748c5da1ca7e5d7cb9a1ab53f9a3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      user: null
    };
  }

  componentWillMount() {
    if (this.state.user) {
      return;
    }

    axios.get(`https://api.github.com/user?access_token=${OAUTH_TOKEN}`)
      .then((response) => {
        this.setUser(response.data);
      });
  }

  setMode(editMode) {
    this.setState({editMode: editMode});
  }

  setUser(user) {
    this.setState({user: user});
  }

  render() {
    const { editMode, user } = this.state;

    if (!user) {
      return <Loader />;
    }

    return (!editMode)
      ? <Viewer user={user} setMode={this.setMode.bind(this, true)} />
      : <Editor setMode={this.setMode.bind(this, false)} />;
  }
}

export default App;
