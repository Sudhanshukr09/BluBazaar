import React from "react";
import stockVideo from "../../Assets/stockvideo.mp4";

const Hero = () => {
  return (
    <>
    <div className="w-[100vw] h-[100vh] relative">
      <div className="w-[100vw] h-[100vh] bg-black opacity-35 absolute"></div>
      <video
        src={stockVideo}
        autoPlay
        muted
        loop
        className="h-full w-full object-cover object-center"
      ></video>
      <div className="text-white absolute h-full w-full top-10 flex flex-col justify-center items-center leading-[3rem]">
      <h1 className="text-[3.5rem] font-extrabold">Discover Your Next Adventure!</h1>
      <p className="text-[1.5rem]">Shop Our Latest Arrival & Unleash Your Style</p>
      </div>     
    </div>
  </>
  );
};

export default Hero;
