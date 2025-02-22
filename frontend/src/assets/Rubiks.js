import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import * as TWEEN from "https://unpkg.com/@tweenjs/tween.js@20.0.3/dist/tween.esm.js";

const RubiksCube = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    let rotationInterval; // <-- We'll store the setInterval here

    console.clear();

    // -------------------------------------------------------
    // SCENE, CAMERA, RENDERER
    // -------------------------------------------------------
    const scene = new THREE.Scene();
    scene.background = null;

    const canvasWidth = 600;
    const canvasHeight = 600;

    const camera = new THREE.PerspectiveCamera(30, canvasWidth / canvasHeight);
    camera.position.set(12, 15, 18);
    camera.lookAt(scene.position);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasWidth, canvasHeight);
    document.body.appendChild(renderer.domElement);

    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "5px";
    renderer.domElement.style.left = "750px";
    renderer.domElement.style.zIndex = "999";

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;

    // Disable scrolling/zoom
    controls.enableZoom = false;
    controls.enablePan = true;

    // Lights
    const ambientLight = new THREE.AmbientLight("white", 0.5);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight("white", 0.5);
    dirLight.position.set(1, 1, 1);
    scene.add(dirLight);

    // -------------------------------------------------------
    // MATERIAL
    // -------------------------------------------------------
    const tintedNormalMaterial = new THREE.MeshNormalMaterial();

    // -------------------------------------------------------
    // CREATE MINI-CUBES
    // -------------------------------------------------------
    const cubes = [];
    const originalPositions = [];

    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const cube = new THREE.Mesh(new RoundedBoxGeometry(), tintedNormalMaterial);
          cube.position.set(x, y, z);
          cubes.push(cube);
          scene.add(cube);
          originalPositions.push(new THREE.Vector3(x, y, z));
        }
      }
    }

    // -------------------------------------------------------
    // RANDOM FACE-ROTATION
    // -------------------------------------------------------
    function rotateFace(axis, direction) {
      const group = cubes.filter(cube => Math.round(cube.position[axis]) === direction);
      const targetRotation = new THREE.Object3D();
      scene.add(targetRotation);
      group.forEach(cube => targetRotation.attach(cube));

      new TWEEN.Tween(targetRotation.rotation)
        .to({ [axis]: targetRotation.rotation[axis] + Math.PI / 2 }, 500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
          group.forEach(cube => scene.attach(cube));
          scene.remove(targetRotation);
        })
        .start();
    }

    function startRandomRotation() {
      rotationInterval = setInterval(() => {
        const axes = ["x", "y", "z"];
        const axis = axes[Math.floor(Math.random() * axes.length)];
        const direction = Math.random() < 0.5 ? -1 : 1;
        rotateFace(axis, direction);
      }, 2000);
    }

    // Start rotating
    startRandomRotation();

    // -------------------------------------------------------
    // KONAMI CODE -> EXPLOSION
    // -------------------------------------------------------
    let isExploding = false;
    const konamiSequence = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
    ];
    let konamiIndex = 0;

    function handleKeyDown(e) {
      if (e.key === konamiSequence[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          konamiIndex = 0;
          explodeCube();
        }
      } else {
        konamiIndex = 0;
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    function explodeCube() {
      isExploding = true;
      cubes.forEach((cube, i) => {
        const velocity = new THREE.Vector3(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 30
        );
        new TWEEN.Tween(cube.position)
          .to(
            {
              x: cube.position.x + velocity.x,
              y: cube.position.y + velocity.y,
              z: cube.position.z + velocity.z
            },
            1500
          )
          .easing(TWEEN.Easing.Cubic.Out)
          .onComplete(() => {
            resetCube();
          })
          .start();
      });
    }

    function resetCube() {
      isExploding = false;
      cubes.forEach((cube, i) => {
        new TWEEN.Tween(cube.position)
          .to(originalPositions[i], 1000)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start();
      });
    }

    // -------------------------------------------------------
    // PAGE VISIBILITY: Pause/Resume Rotation
    // -------------------------------------------------------
    function handleVisibilityChange() {
      if (document.hidden) {
        // Tab is hidden => Stop random rotation
        if (rotationInterval) {
          clearInterval(rotationInterval);
          rotationInterval = null;
        }
      } else {
        // Tab is active => Restart rotation if needed
        if (!rotationInterval) {
          startRandomRotation();
        }
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // -------------------------------------------------------
    // ANIMATION LOOP
    // -------------------------------------------------------
    function animationLoop() {
      TWEEN.update();
      controls.update();

      dirLight.position.copy(camera.position);
      renderer.render(scene, camera);
      requestAnimationFrame(animationLoop);
    }
    animationLoop();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (rotationInterval) clearInterval(rotationInterval);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, []);

  return null;
};

export default RubiksCube;
