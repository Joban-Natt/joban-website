import React from "react";
import Image from "next/image";
import Link from "next/link";
import CopyToClipboard from "./clipboard";

export default function Intro() {
  return (
    <div className="mt-[-2rem]">
      <div className="h-[100vh] flex items-center">
        <div className="lg:w-4/5 flex flex-col pr-10 mt-[-5rem]">
          <h1 className="text-jcream xl:text-5xl lg:text-4xl text-2xl font-bold xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6">
            Jobanpreet Natt
          </h1>
          <div className="w-[100%] sm:w-[50vw] sm:inline-block text-jcream xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 xl:text-xl lg:text-lg text-base text-mwhite mt-4 pr-6 sm:pr-0">
            Welcome to my website! I am currently a Mechanical Engineering
            student at the University of Waterloo. I love learning and creating
            fun projects so please take the time to read through my experiences.
            If you have any questions, don't hesitate to reach out.
          </div>

          {/* ICONS */}
          <div className="xl:flex text-jcream mt-1 xl:pl-32 lg:pl-24 md:pl-16 sm:pl-10 pl-6 items-center">
            {/* Github icon */}
            <div className="bg-jred mt-4 px-4 mr-4 rounded-[12px] duration-75 hover:bg-jhred hover:scale-110 hover:duration-75">
              <button>
                <Link
                  target="_Blank"
                  href="https://github.com/Joban-Natt?tab=repositories"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="inline-block"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                  </svg>
                  <p className="pl-1 inline-block align-middle text-[1.25rem]">
                    Github
                  </p>
                </Link>
              </button>
            </div>

            {/* LinkedIn Icon */}
            <div className="bg-jred mt-4 px-4 mr-4 rounded-[12px] duration-75 hover:bg-jhred hover:scale-110 hover:duration-75">
              <button>
                <Link
                  target="_Blank"
                  href="https://www.linkedin.com/in/jobanpreet-natt/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    fill="currentColor"
                    className="inline-block"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                  <p className="pl-1 inline-block align-middle text-[1.25rem]">
                    LinkedIn
                  </p>
                </Link>
              </button>
            </div>

            {/* Mail Icon */}
            <CopyToClipboard />
          </div>
        </div>
        <div className="hidden mr-0 xl:mr-[9%] sm:inline-block w-[400px] mt-[-8rem]">
          <img
            alt="jobansPicture"
            src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/legopic.png"
          />
        </div>
      </div>
    </div>
  );
}