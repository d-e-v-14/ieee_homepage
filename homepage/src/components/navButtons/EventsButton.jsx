import React from "react";
import hut from "../navButtons/hut.png"; 

export default function AboutButton() {
  const handleClick = () => alert("Events button clicked!");

  return (
    <button
      onClick={handleClick}
      title="About"
      className="group relative w-16 h-27 bg-transparent bg-no-repeat bg-contain transition-transform duration-150 hover:scale-125 active:scale-95 focus:outline-none -translate-y-10"
      style={{ backgroundImage: `url(${hut})` }}
    >
            <span className="absolute inset-0 flex items-center justify-center  text-[30px] text-black group-hover:text-yellow-600" 
      style={{ fontFamily: 'Karantina' }}
      >
        Events
      </span>
    </button>
  );
}
