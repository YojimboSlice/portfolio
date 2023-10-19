import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Hero from "./Hero";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <div>
        <Hero />
      </div>
    </div>
  );
}

export default AppLayout;
