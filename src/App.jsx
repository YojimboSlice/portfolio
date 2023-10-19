import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import About from "./ui/About";
import NavBar from "./ui/NavBar";
import Hero from "./ui/Hero";
import SpaceDrumMachine from "./ui/canvas/SpaceDrumMachine";
import Experience from "./ui/Experience";
import Tech from "./ui/Tech";
import Works from "./ui/Works";
import Contact from "./ui/Contact";

// App.jsx
function App() {
  return (
    <div className="grid grid-cols-1 z-0">
      <div className="z-50 flex justify-center">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="flex">
        <Contact />
      </div>
    </div>
  );
}

export default App;
