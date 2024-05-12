import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div id="projects" className="px-4 pt-14">
      <div>
        <h1 className="text-[2rem] font-bold">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/siteScreenShot1.png"
              alt="projPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                This Website!
              </h2>
              <p className="relative italic">
                React, Next.js, TypeScript, DaisyUI, Tailwind CSS
              </p>
            </span>
            <p className="text-jcream">
              The website that you are currently using was curated by me! Check
              out my code on GitHub.
            </p>

            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/joban-natt/joban-website"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/PianoMotors.jpeg"
              alt="homeSS"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                Surgical Arm
              </h2>
              <p className="relative italic">
                Hack the Heart | Python, Arduino, Intgrated Circuits
              </p>
            </span>
            <p className="text-jcream">
              During this 36-hour hackathon, my team and I built a 2-axis{" "}
              <b>robotic arm</b> with a pincer at the end. The joints were
              controlled by the user moving their own arms through a camera
              running <b>OpenCV</b> (open computer vision). The chassis was
              built with popsicle sticks since they were easily accessible,
              strong, and lightweight. The L239D was used to control the{" "}
              <b>DC motors</b> and the ULN2003 was used to drive the 28BYJ-48{" "}
              <b>stepper motor</b>. This provided good experience with{" "}
              <b>integrated circuits</b>, as well as Arduino{" "}
              <b>microcontrollers</b>.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/Joban-Natt/joban-website"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/tempPic.jpg"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                Autonomous Piano Player
              </h2>
              <p className="relative italic">
                Motors/Motor Control, Basic Analogue Circuits, BreadBoards,
                Python
              </p>
            </span>

            <p className="text-jcream"></p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://devpost.com/software/happy-keys"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Devpost
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/tempPic.jpg"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream"></p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/joban-natt">
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/tempPic.jpg"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream"></p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/joban-natt" />
              <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                GitHub
              </button>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/tempPic.jpg"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream"></p>
            <div className="card-actions justify-end">
              <Link target="_blank" href="https://github.com/joban-natt" />
              <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
