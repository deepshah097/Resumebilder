import React, { Component } from 'react';
import './App.css';
import { Personalinfo } from "./components/Personalinfo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="row">
            {/* Input Data Section */}

            <div className="col-3">
              <div
                className="collapse"
                id="multiCollapseExample1"
              >
                <Personalinfo />
              </div>
            </div>
            {/* Preview of Resume Builder Section */}
            <div className="col myborder">
              <div>
                <Personalinfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
