import React from "react";
import { motion } from "framer-motion";
import leftBg from "../assets/left-bg.png";
import rightBg from "../assets/right-bg.png";
import tearEdge from "../assets/torn.png";

const TearSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex">

      <motion.div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${leftBg})` }}
        initial={{ x: 0 }}
        animate={{ x: -20 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <motion.img
        src={tearEdge}
        alt="Tear"
        className="absolute left-1/2 top-0 h-full z-10"
        style={{ transform: "translateX(-50%)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${rightBg})` }}
        initial={{ x: 0 }}
        animate={{ x: 20 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TearSection;
