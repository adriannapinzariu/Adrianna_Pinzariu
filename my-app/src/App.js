import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Set the background to pitch black when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
  }, []);

  return (
    <div className="body">
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />

      <div className="text">
        <div>Adrianna</div>
        <div>Pinzariu</div>
      </div>

      <div className="about">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Vestibulum vehicula dictum ipsum, at viverra nulla molestie sed.</p>
        <p>Mauris at ligula sit amet nisl cursus bibendum.</p>
      </div>
    </div>
  );
}

export default App;
