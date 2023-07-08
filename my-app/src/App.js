import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import { PointLight, TorusGeometry, MeshBasicMaterial, Mesh, MeshStandardMaterial, Color } from 'three';
import './App.css';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/cesar_-_louvre_museum/scene.gltf', (loader) => loader.manager.onError = (url, error) => console.error('Error loading', url, error));

  if (!gltf) return null;
  // Create a dark grey MeshStandardMaterial
  const material = new MeshStandardMaterial({ 
    color: new Color(0x777777), 
    roughness: 0.5, 
    metalness: 1 
  });

  // Traverse the model and update the material on each mesh
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <mesh scale={7} position={[0, -3, 1]} rotation={[0.125, 5.175, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

const RingLight = () => {
  const light = useRef();
  const lightIntensity = 2;
  const lightDistance = 10;
  const lightDecay = 2;
  const lightColor = '#ffffff';
  
  const ringLight = (
    <group>
      <pointLight ref={light} distance={lightDistance} intensity={lightIntensity} decay={lightDecay} color={lightColor} />
      <mesh>
        <torusGeometry args={[0.5, 0.1, 30, 100]} />
        <meshBasicMaterial color={lightColor} />
      </mesh>
    </group>
  );

  return ringLight;
};

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = '#000000';
  }, []);

  return (
    <div className="body">
      <div className="line" />
      <div className="line" />
      <div className="line" />
      <div className="line" />

      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <Canvas>
          <ambientLight intensity={0.9} />
          <directionalLight intensity={0.5} position={[0, 10, 5]} /> 
          <RingLight />
          <Model />
        </Canvas>
      </div>

      <div className="text" style={{ position: 'absolute', right: '40%', marginTop: '20vh' }}>
        <div>Adrianna</div>
        <div>Pinzariu</div>
      </div>

      <div className="about" style={{ position: 'absolute', width: '15%', left: '62.5%', marginTop: '23vh' }}>
        <p>
          Hi, I'm Adrianna Pinzariu. I'm a web developer with a passion for creating beautiful and
          functional websites. With expertise in React.js, CSS, and HTML, I strive to make the web a
          more user-friendly place. Hi, I'm Adrianna Pinzariu. I'm a web developer with a passion for
          creating beautiful and functional websites.
        </p>
      </div>
    </div>
  );
}

export default App;