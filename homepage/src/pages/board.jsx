import React from "react";
import ieeeLogo from "../assets/ieee_logo.png";
import boardBg from "../assets/team.png"; 
import NavBar from "../components/NavBar";

const Boards = () => {
  return (
    <div className="min-h-screen bg-[#7b6f61] text-black font-serif relative">


      <div className="pt-32 pb-12 px-6 sm:px-16 text-center">
        <h1 className="text-8xl font-serif mb-6">OUR STORY</h1>
        <p className="max-w-4xl mx-auto text-2xl leading-relaxed"
        style={{ fontFamily: 'Inter'}}>
          IEEE Computer Society, VIT—established in February 2012 under IEEE Region 10, Madras Section—drives innovation by leveraging cutting-edge technology to solve real-world problems. We foster ideas, empower talent, and deliver impactful projects through elite events, workshops, and collaborations. As a globally recognized hub of technical excellence, we inspire and shape inquisitive minds for the challenges of tomorrow.
        </p>
      </div>

      <div className="w-full flex justify-center pb-16 -mt-50">
        <img
          src={boardBg}
          alt="Board Members Group"
          className="w-full max-w-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Boards;
