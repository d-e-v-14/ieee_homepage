import React from "react";
import { motion, useTransform } from "framer-motion";
import boardBg from "../assets/team.png";
import NavBar from "../components/NavBar";
import logo from "../assets/ieee_logo.png";

const Boards = ({ scrollProgress }) => {
  const fadeInOut = useTransform(scrollProgress, [0.25, 0.4, 0.6, 0.75], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [0.25, 0.4, 0.6, 0.75], [0.9, 1, 1, 1.05]);

  return (
    <motion.div
      className="relative min-h-screen bg-[#7b6f61] text-black font-serif overflow-hidden"
      style={{ opacity: fadeInOut, scale }}
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.1) 1px,
              rgba(0,0,0,0.1) 2px
            ), repeating-linear-gradient(
              90deg,
              transparent,
              transparent 1px,
              rgba(0,0,0,0.05) 1px,
              rgba(0,0,0,0.05) 2px
            )`
          }}
        />
      </div>

      <div className="relative z-10 pt-32 pb-12 px-6 sm:px-16 text-center h-full flex flex-col justify-center">
        <motion.h1
          className="text-7xl font-serif mb-6 text-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR STORY
        </motion.h1>
    <NavBar />
        <img
          src={logo}
          alt="IEEE Logo"
          className="fixed top-4 left-4 w-[14vw] h-auto max-w-[203px] min-w-[62px] object-contain z-50"
        />
        <motion.p
          className="max-w-4xl mx-auto text-xl leading-relaxed mb-12 text-black"
          style={{ fontFamily: 'Inter' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IEEE Computer Society, VIT—established in February 2012 under IEEE Region 10, Madras Section—drives innovation by leveraging cutting-edge technology to solve real-world problems. We foster ideas, empower talent, and deliver impactful projects through elite events, workshops, and collaborations. As a globally recognized hub of technical excellence, we inspire and shape inquisitive minds for the challenges of tomorrow.
        </motion.p>

        <motion.div
          className="w-screen flex justify-center pb-16 -mt-62"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={boardBg}
            alt="Board Members Group"
            className="w-screen max-w-screen object-contain -ml-29"
          />
        </motion.div>
      </div>
    </motion.div>

  );
};

export default Boards;
