import React from "react";
import { motion, useTransform } from "framer-motion";
import bg from "../assets/background.png";
import logo from "../assets/ieee_logo.png";
import halftone from "../assets/dots.png";
import NavBar from "../components/NavBar";

const HeroSection = ({ scrollProgress }) => {
  const fadeOut = useTransform(scrollProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollProgress, [0, 0.3], [1, 1.1]);

  return (
    <motion.div className="relative w-full h-screen text-white overflow-hidden">
      <NavBar />


      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-[60%]"
        style={{ backgroundImage: `url(${bg})` }}
      />


      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 bottom-0 z-10"
          style={{
            left: `${(i * 100) / 6}%`,
            width: "16.66%",
            backgroundImage: `url(${halftone})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: fadeOut,
          }}
        />
      ))}


      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />

      <div className="relative z-30 h-full flex flex-col justify-center items-start pl-16">

        <img
          src={logo}
          alt="IEEE Logo"
          className="fixed top-4 left-4 w-[14vw] h-auto max-w-[203px] min-w-[62px] object-contain z-50"
        />

  
        <motion.h1
          style={{ fontFamily: 'Karantina', opacity: fadeOut }}
          className="font-normal text-[180px] leading-[100%] tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          IEEE-CS
        </motion.h1>

   
        <motion.h2
          style={{ fontFamily: 'Karantina', color: '#EF9E00', opacity: fadeOut }}
          className="font-normal text-[180px] leading-[100%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          CODE. CREATE. CATALYZE.
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default HeroSection;