import React from 'react'
import './styles/app.scss'
import Toolbar from './components/Toolbar'
import Settingbar from './components/Settingbar'
import Canvas from './components/Canvas'

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Settingbar />
      <Canvas />
    </div>
  );
}

export default App;
