import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';
import { MeshStandardMaterial, Color } from 'three';
import './App.css';

const Model = () => {
  const mesh = useRef();
  const obj = useLoader(OBJLoader, '/Venus_de_Milo_SMK_KAS434_1_10pct.obj')

  // Create a dark grey MeshStandardMaterial
  const material = new MeshStandardMaterial({ 
    color: new Color(0x777777), 
    roughness: 0.5, 
    metalness: 1 
  });

  // Traverse the model and update the material on each mesh
  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={mesh} scale={0.0075} position={[0, -15, 0]}>
      <primitive object={obj} />
    </mesh>
  );
}
/*const Model = () => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/cesar_-_louvre_museum/scene.gltf');

  const material = new MeshStandardMaterial({
    color: new Color(0x777777),
    roughness: 0.5,
    metalness: 1,
  });

  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // adjust speed here
    }
  });

  return (
    <mesh ref={meshRef} scale={7} position={[0, -3, 1]} rotation={[0.125, 5.175, 0]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};*/


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
  <directionalLight intensity={1} position={[0, 10, 5]} /> 
  <Model />
</Canvas>
    </div>
  );
}

export default App;
