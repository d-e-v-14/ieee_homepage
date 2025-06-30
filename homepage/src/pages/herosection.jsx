import React from "react";
import bg from "../assets/background.png";
import logo from "../assets/ieee_logo.png";
import halftone from "../assets/dots.png"; 
import NavBar from "../components/NavBar";

const HeroSection = () => {
  return (
    <div className="relative w-screen h-screen text-white overflow-hidden">
<div
  className="absolute inset-0 max-w-screen min-h-screen bg-contain bg-center z-0 filter brightness-[60%]"
  style={{ backgroundImage: `url(${bg})` }}
></div>

  <NavBar />

      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 z-10 opacity-80"
          style={{
            left: `${(i * 100) / 6}%`,
            width: "16.66%",
            backgroundImage: `url(${halftone})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      ))}

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>



      <div className="relative z-30 h-full flex flex-col justify-center items-start pl-16">
         <img
        src={logo}
        alt="IEEE Logo"
        className="fixed top-4 left-4 w-[14vw] h-auto max-w-[203px] min-w-[62px] object-contain z-50"
        />


        <h1
        className="font-normal text-[180px] leading-[100%] tracking-[-0.03em] text-center"
        style={{ fontFamily: 'Karantina' }}
        >
        IEEE-CS
        </h1>

        <h2
        className="font-normal text-[180px] leading-[100%] tracking-[-0.03em] text-center"
        style={{ fontFamily: 'Karantina', color: '#EF9E00' }}
        >
        CODE. CREATE. CATALYZE.
        </h2>

      </div>
    </div>
  );
};

export default HeroSection;
