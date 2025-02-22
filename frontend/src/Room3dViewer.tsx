import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Room3DViewer: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    
    // Set a light gray background to make sure we can see the model
    scene.background = new THREE.Color(0x999999); // Light grey background

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Optional, for color accuracy
    canvasRef.current?.appendChild(renderer.domElement);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load('/assets/room.glb', (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('Error loading the model:', error);
    });

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1); // Ambient light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Camera setup
    camera.position.set(5, 5, 5);  // Adjust camera position
    camera.lookAt(0, 0, 0); // Make sure the camera looks at the center of the scene

    // Add axis helper to visualize orientation
    const axesHelper = new THREE.AxesHelper(5); // Add axis helper to the scene
    scene.add(axesHelper);

    // OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth controls
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls for smooth interaction
      renderer.render(scene, camera);
    };
    animate();

    // Adjust camera aspect ratio and renderer size on window resize
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return <div ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default Room3DViewer;
