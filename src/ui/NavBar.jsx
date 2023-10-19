import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

function NavBar() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const controls = useAnimation();

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Determine scroll direction
    if (scrollTop > 0 && !scrollingUp) {
      setScrollingUp(true);
      controls.start({
        y: -10,
        transition: { type: "spring", stiffness: 400 },
      });
    } else if (scrollTop === 0 && scrollingUp) {
      setScrollingUp(false);
      controls.start({ y: 0, transition: { type: "spring", stiffness: 500 } });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollingUp]);

  return (
    <motion.nav
      className="z-50 bg-accent border-2 border-neutral top-4 py-1 px-4 rounded-xl fixed w-[90%]"
      initial={{ y: 0 }}
      animate={controls}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side with your name and portrait */}
        <div className="text-white flex items-center rounded-full">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/PORTRAITLOGO.jpg"
              alt="portrait"
            />
          </div>
        </div>

        {/* Right side with links */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default NavBar;
