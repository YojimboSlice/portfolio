import { useState } from "react";
import { styles } from "../styles";
import SpaceDrumMachine from "./canvas/SpaceDrumMachine";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, my name is <span className="text-primary">James</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a music artist, producer,
            <br className="sm:block hidden" />
            and aspiring web developer.
          </p>
        </div>
      </div>

      <div className="absolute inset-32 top-[350px] xl:h-[400px] h-[300px] mt-8">
        <SpaceDrumMachine />
      </div>
    </section>
  );
}

export default Hero;
