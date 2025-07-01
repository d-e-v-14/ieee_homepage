import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import HeroSection from "./herosection";
import Boards from "./board";
import TearSection from "./tearsection";

const MainPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div className="bg-black">
      <div ref={containerRef} className="relative h-[202vh] overflow-hidden">
        <div className="sticky top-0 h-screen w-screen z-10">
          <HeroSection scrollProgress={scrollYProgress} />
        </div>

        <div className="sticky top-0 h-screen w-screen z-20">
          <Boards scrollProgress={scrollYProgress} />
        </div>

        <TearSection scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
};

export default MainPage;
