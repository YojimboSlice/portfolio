import React, { useRef, useState } from "react";
import { Vector3 } from "three";

import { useFrame } from "@react-three/fiber";

const bpm = 92;
const bps = 92 * 60;

const maxDistance = -2;

function NoteBox({ position }) {
  const boxRef = useRef();
  const [currentPosition, setCurrentPosition] = useState(
    new Vector3(position[0], position[1], position[2]),
  );

  useFrame((state, delta) => {
    // Update currentPosition
    setCurrentPosition((prevPosition) => {
      const newPosition = prevPosition.clone();
      newPosition.x += 2 * delta;
      return newPosition;
    });

    if (currentPosition.x > maxDistance) {
      return null;
    }
  });

  return (
    <mesh ref={boxRef} position={currentPosition}>
      <meshStandardMaterial color="yellow" />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
}

export default NoteBox;
