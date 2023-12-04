import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          position: [2, 2, 2],
          near: 0.001,
          far: 100,
        }}
      >
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  );
};

export default App;
