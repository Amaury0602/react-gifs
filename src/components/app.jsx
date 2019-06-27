import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);
    const ids = "JbaW0TaKrtyik";
    const idz = "3HYtMsgOZpB2E";

  }

  render() {
    return(<div>
            <div className="left-scene">
              <SearchBar />
              <Gif id="JbaW0TaKrtyik"/>
            </div>

            <div className="right-scene">
              <GifList />
            </div>
          </div>);
  }
}

export default App;
