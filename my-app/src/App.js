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
        <p>Hi, I'm Adrianna Pinzariu.
        I'm a web developer with a passion for creating beautiful and functional websites.
        With expertise in React.js, CSS and HTML, I strive to make the web a more user-friendly place. Hi, I'm Adrianna Pinzariu.
        I'm a web developer with a passion for creating beautiful and functional websites.
       </p>
      </div>
    </div>
  );
}

export default App;
