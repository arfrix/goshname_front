import React from 'react';
import Chair from './table/chair/chair'
import Table from './table/table'
import './App.css';

function App() {
  return (
    <div className="App">
        <Chair></Chair>
        <Table verticalSize='5'  horizantalSize="" tableId="a"></Table>
    </div>
  );
}

export default App;
