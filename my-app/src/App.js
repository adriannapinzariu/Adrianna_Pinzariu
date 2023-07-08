import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import { PointLight, TorusGeometry, MeshBasicMaterial, Mesh, MeshStandardMaterial, Color, SpotLight } from 'three';
import { OrbitControls } from "@react-three/drei";
import './App.css';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/cesar_-_louvre_museum/scene.gltf', (loader) => loader.manager.onError = (url, error) => console.error('Error loading', url, error));
  const mesh = useRef();

  // Create a dark grey MeshStandardMaterial
  const material = new MeshStandardMaterial({ 
    color: new Color(0x777777), 
    roughness: 0.6, 
    metalness: 1,
  });
 
  // Traverse the model and update the material on each mesh
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  return (
    <mesh ref={mesh} scale={25} position={[0, -10, 1]} rotation={[0.125, 5.175, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

const RingLight = () => {
  const light = useRef();
  const lightIntensity = 1.5;
  const lightDistance = 10;
  const lightDecay = 2;
  const lightColor = '#ffffff';
  
  // Increase the radius and decrease the tube radius
  const ringRadius = 9; // Adjust this value to change the size of the ring
  const tubeRadius = 0.3; // Adjust this value to change the thickness of the ring

  const ringLight = (
    <group position={[0, 0, 1]} rotation={[0, 0, 0]}> {/* Adjusted the position to be behind the model */}
      <pointLight ref={light} distance={lightDistance} intensity={lightIntensity} decay={lightDecay} color={lightColor} />
      <mesh>
        <torusGeometry args={[ringRadius, tubeRadius, 30, 100]} />
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
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <pointLight position={[-10, -10, -10]} />
          <OrbitControls enableZoom enablePan enableRotate />
          <RingLight />
          <Model />
          <EffectComposer>
            <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
          </EffectComposer>
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