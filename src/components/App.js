import React, { Component } from 'react';
import '../styles/App.css';
import PaletteContainer from '../containers/PaletteContainer';
import CanvasContainer from '../containers/CanvasContainer';
import ControlsContainer from '../containers/ControlsContainer';
import ToolsContainer from '../containers/ToolsContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {colorSelected : '#ffffff'}
    this.onColorPicked = this.onColorPicked.bind(this);
  }

  onColorPicked(color) {
      this.setState({colorSelected: color});
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Pixel Art</h1>
        </header>
        <section className="main">
          <CanvasContainer />
          <PaletteContainer />
          <div>
            <ToolsContainer />
            <ControlsContainer />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
