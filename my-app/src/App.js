import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import './App.css';

function Model() {
  const gltf = useLoader(GLTFLoader, '/cesar_-_louvre_museum/scene.gltf');
  return <primitive object={gltf.scene} />;
}

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
        <p>
          Hi, I'm Adrianna Pinzariu. I'm a web developer with a passion for creating beautiful and
          functional websites. With expertise in React.js, CSS, and HTML, I strive to make the web a
          more user-friendly place. Hi, I'm Adrianna Pinzariu. I'm a web developer with a passion for
          creating beautiful and functional websites.
        </p>
      </div>

      <Canvas>
        <ambientLight intensity={0.5} />
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
