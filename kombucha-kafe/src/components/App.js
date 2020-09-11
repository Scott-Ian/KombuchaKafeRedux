import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header';
import KombuchaControl from './KombuchaControl';

function App() {
  return (
    <React.Fragment>
        <Navbar />
      <div className="container">
        <Header />
        <KombuchaControl />
      </div>
    </React.Fragment>
  );
}

export default App;
