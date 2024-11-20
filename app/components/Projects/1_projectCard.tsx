import React from "react";
import Link from "next/link";
import PianoPlayer from "./pianoCard";
import SimulationWorkshop from "./Magnetorquers";
import Image from "next/image";
import Video from "next-video";

const ProductCard = () => {
  return (
    <div id="projects" className="px-4 pt-14">
      <div>
        <h1 className="text-[2rem] font-bold">PROJECTS</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
        <PianoPlayer />

        <SimulationWorkshop />

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/siteScreenShot3.png"
              alt="projPic"
            />
          </figure>
          <div className="card-body bg-jGrey">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                This Website!
              </h2>
              <p className="relative italic">
                React, Next.js, TypeScript, DaisyUI, Tailwind CSS, Amazon S3,
                Git
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
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/EndlessRunner.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Endless Runner Game
              </h2>
              <p className="relative italic">
                3D Printing, Machine Shop, R&D, Rapid Prototyping, Reporting
              </p>
            </span>

            <p className="text-jcream">
              For our ME100 project, my team and I built an endless runner game
              inspired by subway surfers, but in real life. The project required
              us to produce <b>prototypes</b> and design complex systems within
              a short deadline. This included <b>3D-printed pulleys</b> to
              translate the forces, a wooden chassis, and a treadmill to
              simulate an infinite track. We created a proposal for our final
              product and a <b>report</b> of choices, problems, solutions, and
              feasibility analysis.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1jlw47AlU1lE4gaOWQ1U2h57-mtIp568-/view?usp=sharing"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Demo Vid
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/hallEffect.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Hall Effect Potentiometer
              </h2>
              <p className="relative italic">
                R&D, EasyEDA, Soldering, 3D Printing, I2C
              </p>
            </span>

            <p className="text-jcream">
              Created circuit schematics for <b>PCBs</b> with <b>EasyEDA</b> as
              well as a <b>3D printed</b> housing with <b>SOLIDWORKS</b> in
              accordance to the physical dimensions of a Dualshock4
              controllers&apos; joystick. Implemented a hall effect sensor that
              detects <b>rotating magnetic fields</b> and acts as a
              potentiometer to <b>minimize electronic noise</b> and interference
              caused by wear and tear of physical potentiometers, thus{" "}
              <b>massively increasing longevity</b> of the controller.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://drive.google.com/drive/folders/1-WR6k0Sto2XyBmOn2WhsQeJdUFZ2jiMR?usp=sharing"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Drive
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-[24rem] bg-jGrey shadow-xl">
          <figure>
            <video autoPlay loop muted react-lazyload>
              <source src="/hackTheHeartmp4Scaled.mp4" />
            </video>
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top text-jcream">
                Surgical Arm
              </h2>
              <p className="relative italic">
                Python, Arduino, Intgrated Circuits
              </p>
            </span>
            <p className="text-jcream">
              During this 36-hour Hackathon, my team and I built a single-axis{" "}
              <b>robotic arm</b> with a pincer at the end. The joints were
              controlled by the user moving their own arms through a camera
              running <b>OpenCV</b> (open computer vision). The chassis was
              built with popsicle sticks since they were easily accessible,
              strong, and lightweight. The L239D was used to control the{" "}
              <b>DC motors</b> and the ULN2003 was used to drive the 28BYJ-48{" "}
              <b>stepper motor</b>. This provided good experience with robotic
              software development and integration, as well as Arduino{" "}
              <b>microcontrollers</b>. (Only 500mA were availible, although
              motors are weak, motion is visible)
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
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/PianoMotors.jpeg"
              alt="Piano With Motors"
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

            <p className="text-jcream">
              For the <b>MakeUofT</b> Hackathon, my partner and I <b>failed</b>{" "}
              to create an autonomous piano playing mechanism. Two 28BYJ stepper
              motors and two <b>Nema-17</b> stepper motors were controlled by an{" "}
              <b>Arduino</b> running <b>pyfirmata2</b> to play a song in
              C-Major. The user must upload a .wav file into the software and it
              will use <b>Fourier analysis</b> to break up the sound into its
              constituent frequencies. The note is then mapped to a stepper
              motor that turns in the direction of the key. Unfortunately, these
              motors require a lot of electricity, so although the code is
              complete the project is unfinished. See Devpost button below for
              code.
            </p>
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
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/AirplaneGamePic.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Airplane Shooter Game
              </h2>
              <p className="relative italic">HTML, JavaScript, CSS</p>
            </span>

            <p className="text-jcream">
              My first experience with object-oriented programming was making
              this Airplane Game where the objective is to destroy the other
              plane. The game uses the users&apos; keyboard input to move the
              planes around and shoot. Although simplistic, it was an extremely
              informative introduction to <b>performance optimization</b>,{" "}
              <b>event handlers</b>, and <b>objects</b>.
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/game/Plane-Shooting-Game/index.html"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  Play!
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/CaSinoProposal.png"
              alt="ProjPic"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="text-jcream card-title inline-block m-0 align-top">
                Casino++
              </h2>
              <p className="relative italic">C++</p>
            </span>

            <p className="text-jcream">
              {" "}
              A Virtual Casino built entirely from <b>C++</b>. Includes games
              like “Blackjack” and “War” and multiple slots games, being Binary
              Slots, Decimal Slots, and Hexadecimal Slots. (Only slots are
              available, I am trying to recover the other code)
            </p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href="https://github.com/Joban-Natt/Practice-Fundamentals/blob/main/c++Fundementals/allSlots.cpp"
              >
                <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
                  GitHub
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
