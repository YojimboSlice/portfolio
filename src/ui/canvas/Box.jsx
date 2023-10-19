import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { OrbitControls, Text } from "@react-three/drei";

function Box(props) {
  const { active, setActiveBox, activeBox, id, position, color, letter } =
    props;

  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (active) {
      console.log("active: " + active);
      // Check if the initial position is available in the mesh's userData
      if (!meshRef.current.userData.initialPosition) {
        // If not available, store the initial position
        meshRef.current.userData.initialPosition = {
          x: meshRef.current.position.x,
          y: meshRef.current.position.y,
        };
      }

      // Retrieve the initial position from userData
      const initialPosition = meshRef.current.userData.initialPosition;

      // Alter the position to create a shaking effect
      meshRef.current.position.x =
        initialPosition.x + Math.sin(state.clock.elapsedTime * 80) * 0.05;
      meshRef.current.position.y =
        initialPosition.y + Math.cos(state.clock.elapsedTime * 80) * 0.05;
    }
  });

  // Return view, these are regular three.js elements expressed in JSX
  const { scale } = useSpring({
    scale: active ? 1.3 : 1,
    config: config.wobbly,
  });

  if (active) {
    setTimeout(() => {
      setActiveBox(false);
    }, 100);
  }

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <animated.mesh
        {...props}
        ref={meshRef}
        scale={scale}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial
          attach="material"
          color={active ? `${color}` : "silver"}
        />
      </animated.mesh>
      <Text
        position={[position[0], position[1], position[2] + 0.7]} // Adjust the Z position as needed
        fontSize={0.3} // Adjust the font size
        key={letter}
        color="aqua"
      >
        {letter.toUpperCase()}
      </Text>
    </>
  );
}

export default Box;
