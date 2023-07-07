import React, { useEffect } from 'react';
import './App.css';

function App() {
  // Set the background to pitch black when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
  }, []);

  return (
    <div className="body">
     <div className="text">
        <div>Adrianna</div>
        <div>Pinzariu</div>
      </div>
    </div>
  );
}

export default App;

