import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    const src = `https://media0.giphy.com/media/${this.props.id}/200.gif`;

    return (
      <div className="selected-gif">
        <img className="gif" src= {src} alt="" />
      </div>
      );
  }
}

export default Gif;
