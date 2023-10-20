import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";
import { Howl } from "howler";
import { useEffect, useRef, useState } from "react";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import Box from "./Box";
import Stars from "./Stars";

import { PerspectiveCamera, Preload } from "@react-three/drei";
import NoteBox from "./NoteBox";
import Text from "./Text";
import { calculateBoxCenter } from "../../utils/calculateBoxCenter";

const audioMap = {
  z: "/sounds/kick.wav",
  x: "/sounds/snare.wav",
  c: "/sounds/closedhihat.wav",
  a: "/sounds/rimshot.wav",
  s: "./sounds/vocal.wav",
  d: "/sounds/openhihat.wav",
  q: "/sounds/basepiano.wav",
  w: "/sounds/basepianovocals.wav",
  e: "/sounds/basepianovocals2.wav",
};

const preloadedSounds = {};

const preloadSounds = () => {
  for (const key in audioMap) {
    if (audioMap.hasOwnProperty(key)) {
      const sound = new Howl({
        src: [audioMap[key]],
        volume: 1.0,
        preload: true,
      });
      preloadedSounds[key] = sound;
    }
  }
};

function SpaceDrumMachine() {
  const playingSoundsRef = useRef([]);
  const [activeBox, setActiveBox] = useState(null);
  const [bokehScale, setBokehScale] = useState(5);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  const drumPads = [
    { position: [-2, 2, 0], id: "q", color: "aqua" },
    { position: [0, 2, 0], id: "w", color: "aqua" },
    { position: [2, 2, 0], id: "e", color: "aqua" },
    { position: [-2, 0, 0], id: "a", color: "orange" },
    { position: [0, 0, 0], id: "s", color: "firebrick" },
    { position: [2, 0, 0], id: "d", color: "blue" },
    { position: [-2, -2, 0], id: "z", color: "red" },
    { position: [0, -2, 0], id: "x", color: "yellow" },
    { position: [2, -2, 0], id: "c", color: "green" },
  ];

  const noteBoxes = [
    { position: [-10, 2, -1], id: "q" },
    { position: [0, 2, -10], id: "w" },
    { position: [10, 2, -1], id: "e" },
    { position: [-10, 0, -1], id: "a" },
    { position: [0, 0, -10], id: "s" },
    { position: [10, 0, -1], id: "d" },
    { position: [-10, -2, -1], id: "z" },
    { position: [0, -2, -10], id: "x" },
    { position: [10, -2, -1], id: "c" },
  ];

  useEffect(() => {
    // Preload the sounds when the component mounts
    preloadSounds();

    // ... (your existing code)
  }, []);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 0 to 1 (0 means when completely out of viewport, 1 means when completely in)
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isVisible) {
        const key = event.key.toLowerCase();

        if (key in audioMap) {
          console.log(`${event.key} key pressed`);

          if (playingSoundsRef.current[key]) {
            playingSoundsRef.current[key].stop();
          }

          const sound = preloadedSounds[key];

          playingSoundsRef.current.push(sound);

          sound.play();

          const drumPad = drumPads.find((pad) => pad.id === key);

          if (drumPad) {
            setActiveBox(drumPad.id);
          }
        }
      }
    };

    // Attach or detach the event listener based on visibility
    if (isVisible) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    const timeout = setTimeout(() => {
      setBokehScale(2);
    }, 1900);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  const stopPlayBack = () => {
    playingSoundsRef.current.forEach((sound) => sound.stop());
    playingSoundsRef.current = [];
    setActiveBox(null);
  };

  const leftNotes = noteBoxes.filter(
    (note) => note.id === "z" || note.id === "a" || note.id === "q",
  );

  const centerPositions = drumPads.map((drumPad) =>
    calculateBoxCenter(drumPad.position, [1, 1, 1]),
  );

  return (
    <>
      {/* <Text /> */}
      <div className="flex justify-end">
        <button
          onClick={stopPlayBack}
          className="rounded-lg border bg-neutral text-stone-50 p-2 mb-4"
          ref={targetRef}
        >
          STOP PLAYBACK
        </button>
      </div>
      <div className="relative w-full h-full">
        <Canvas camera={{ position: [0, -0.5, 4], fov: 78 }}>
          <ambientLight intensity={1.5} />
          <pointLight position={[0, 0, -3]} castShadow={true} intensity={18} />
          {drumPads.map((drumPad) => (
            <Box
              key={drumPad.id}
              position={drumPad.position}
              active={activeBox === drumPad.id}
              setActiveBox={setActiveBox}
              activeBox={activeBox}
              letter={drumPad.id}
              color={drumPad.color}
            />
          ))}
          {/* {leftNotes.map((noteBox) => (
        <NoteBox key={noteBox.id} position={noteBox.position} />
      ))} */}

          <Stars />
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}

export default SpaceDrumMachine;
