import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }


  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/200.gif`;
    return (
        <img className="gif" src= {src} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
