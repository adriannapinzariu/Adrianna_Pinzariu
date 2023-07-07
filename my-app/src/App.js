import React, { useEffect } from 'react';

function App() {
  // Set the background to pitch black when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
  }, []);

  return (
    <div>
      {/* Your content goes here */}
    </div>
  );
}

export default App;


