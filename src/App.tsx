import React from 'react';
import './App.css';
import { EditorBody } from './components/editor/EditorBody';
import Edit from './components/editor/Edit';
// import { ToolBar } from './components/editor/ToolBar';

function App() {
  return (
    <div className="App">
      {/* <EditorBody /> */}
      <Edit />
      {/* <ToolBar /> */}
    </div>
  );
}

export default App;
