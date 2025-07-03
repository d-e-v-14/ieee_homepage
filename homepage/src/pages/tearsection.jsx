import React from "react";
import { motion, useTransform } from "framer-motion";
import tornLeft from "../assets/left-bg.png";
import tornRight from "../assets/right-bg.png";

const TearSection = ({ scrollProgress }) => {
  const leftX = useTransform(scrollProgress, [0.2, 0.65], ["0%", "-130%"]);
  const rightX = useTransform(scrollProgress, [0.3, 0.65], ["00%", "100%"]);
  const leftRotate = useTransform(scrollProgress, [0.3, 0.65], [0, -5]);
  const rightRotate = useTransform(scrollProgress, [0.3, 0.65], [0, 5]);
  const opacity = useTransform(scrollProgress, [0.25, 0.3, 0.65, 0.7], [0, 1, 1, 0]);
  const scale = useTransform(scrollProgress, [0.3, 0.48, 0.65], [1, 1.02, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full z-[60] pointer-events-none overflow-hidden"
      style={{ opacity, scale }}
    >
      <motion.img
        src={tornLeft}
        alt="Torn Left"
        className="absolute top-0 left-0 h-full object-cover"
        style={{ x: leftX, rotate: leftRotate, width: "50vw", transformOrigin: "right center" }}
      />

      <motion.img
        src={tornRight}
        alt="Torn Right"
        className="absolute top-0 right-0 h-full object-cover"
        style={{ x: rightX, rotate: rightRotate, width: "80vw", transformOrigin: "left center" }}
      />

      <motion.div
        className="absolute inset-0 bg-black/30"
        style={{ opacity: useTransform(scrollProgress, [0.3, 0.48, 0.65], [0, 0.3, 0]) }}
      />
    </motion.div>
  );
};

export default TearSection;
