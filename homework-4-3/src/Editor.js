import React from 'react';

class Editor extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            EDITOR
            <button onClick={props.setMode}>TO VIEWER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
