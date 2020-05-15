import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Input from './components/Input';
import Task from './components/Task';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      {list.map((task, idx) => (
        <Task task = { task } setList = { setList } index = { idx } list = { list } />
      ))}
      <Input list = { list }  setList = { setList } />
    </div>
  );
}

export default App;