import React from 'react';
import axios from 'axios';
import Loader from './Loader.js';
import Viewer from './Viewer.js';
import Editor from './Editor.js';

const FIRST = 'a29896e0117ea';
const SECOND = '806d06750e6a7';
const THIRD = '7ab98b60f9ba0d';

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
    axios.get('https://api.github.com/user?access_token=' + FIRST + SECOND + THIRD)
      .then((response) => {
        this.setState({user: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  saveUser(user) {
    axios.patch('https://api.github.com/user?access_token=' + FIRST + SECOND + THIRD, user)
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
