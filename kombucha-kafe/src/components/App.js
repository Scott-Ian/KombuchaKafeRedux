import React from 'react';
import Navbar from './Navbar/Navbar';
import Header from './Header';
import KombuchaControl from './KombuchaControl';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
        <Header />
        <KombuchaControl />
      </div>
    </React.Fragment>
  );
}

export default App;
