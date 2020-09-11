import React from 'react';
import './App.css';
import './Navbar/Navbar';

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
