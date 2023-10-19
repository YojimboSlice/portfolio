import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction, ChromaticAberrationEffect } from "postprocessing";
import * as THREE from "three";

const COUNT = 500;
const XY_BOUNDS = 40;
const Z_BOUNDS = 20;
const MAX_SPEED_FACTOR = 2;
const MAX_SCALE_FACTOR = 50;

const CHROMATIC_ABERRATION_OFFSET = 0.007;

const Stars = () => {
  const meshRef = useRef();
  const effectsRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;

    const t = new THREE.Object3D();
    let j = 0;
    for (let i = 0; i < COUNT * 3; i += 3) {
      t.position.x = generatePos();
      t.position.y = generatePos();
      t.position.z = (Math.random() - 0.5) * Z_BOUNDS;
      t.updateMatrix();
      meshRef.current.setMatrixAt(j++, t.matrix);
    }
  }, []);

  const temp = new THREE.Matrix4();
  const tempPos = new THREE.Vector3();
  const tempObject = new THREE.Object3D();
  const tempColor = new THREE.Color();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const velocity =
      1 / Math.pow(state.clock.elapsedTime + 1, state.clock.elapsedTime + 1);
    for (let i = 0; i < COUNT; i++) {
      meshRef.current.getMatrixAt(i, temp);

      tempObject.scale.set(1, 1, Math.max(1, velocity * MAX_SCALE_FACTOR));

      tempPos.setFromMatrixPosition(temp);
      if (tempPos.z > Z_BOUNDS / 2) {
        tempPos.z = -Z_BOUNDS / 2;
      } else {
        tempPos.z += Math.max(delta, velocity * MAX_SPEED_FACTOR);
      }
      tempObject.position.set(tempPos.x, tempPos.y, tempPos.z);

      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);

      if (tempPos.z > 0) {
        tempColor.r = tempColor.g = tempColor.b = 1;
      } else {
        tempColor.r =
          tempColor.g =
          tempColor.b =
            1 - tempPos.z / (-Z_BOUNDS / 2);
      }
      meshRef.current.setColorAt(i, tempColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true;

    if (!effectsRef.current) return;
    effectsRef.current.offset.x = Math.max(
      0,
      Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABERRATION_OFFSET,
    );
    effectsRef.current.offset.y = Math.max(
      0,
      Math.pow(0.5, state.clock.elapsedTime) * CHROMATIC_ABERRATION_OFFSET,
    );
  });

  function generatePos() {
    return (Math.random() - 0.5) * XY_BOUNDS;
  }

  return (
    <>
      <color args={["#000000"]} attach="background" />
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, COUNT]}
        matrixAutoUpdate
      >
        <sphereGeometry args={[0.05]} />
        <meshBasicMaterial color={[1.5, 1.5, 1.5]} toneMapped={false} />
      </instancedMesh>
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} mipmapBlur />
        <ChromaticAberration
          ref={effectsRef}
          blendFunction={BlendFunction.NORMAL}
          offset={
            new THREE.Vector2(
              CHROMATIC_ABERRATION_OFFSET,
              CHROMATIC_ABERRATION_OFFSET,
            )
          }
        />
      </EffectComposer>
    </>
  );
};

export default Stars;
