import React from 'react';
import './App1.css';
import Sidebar2 from './Sidebar2/Sidebar2';
import Head from './Head/Head';
import Bathes from './Admin/Batches/Batches';

function App() {
  return (
    <div className="App">
      <Head />
      <Sidebar2 />
      <Bathes />
    </div>
  );
}

export default App;
