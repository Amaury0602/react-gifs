import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (<input className="form-control form-search" type="text" onChange={this.handleChange} />);
  }
}

export default SearchBar;
