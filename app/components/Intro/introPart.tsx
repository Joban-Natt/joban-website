import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="">
      <div className="h-[110vh] flex items-center">
        <div className="lg:w-4/5 flex flex-col">
          <h1 className="mt-[-12rem] text-jcream xl:text-5xl lg:text-4xl text-2xl font-bold xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6">
            Jobanpreet Natt
          </h1>
          <div className="w-[50vw] text-jcream xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 xl:text-xl lg:text-lg text-base text-mwhite mt-4 pr-6 sm:pr-0">
            Welcome to my website! I am currently a Mechanical Engineering
            student at the University of Waterloo. I love learning and creating
            fun projects so please take the time to read through my experiences.
            If you have any questions, don't hesitate to reach out.
          </div>
        </div>
        <img
          alt="jobansPicture"
          src="https://jobanwebsitepic.s3.amazonaws.com/legopic.png"
        />
      </div>
    </div>
  );
};

export default Intro;
