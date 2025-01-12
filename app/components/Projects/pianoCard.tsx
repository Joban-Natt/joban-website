import React from "react";
import Link from "next/link";

const pianoCard = () => {
  return (
    <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
      <figure>
        <img
          src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/pianoPic.JPG"
          alt="pianoPic"
        />
      </figure>
      <div className="card-body bg-jGrey">
        <span className="">
          <h2 className="card-title inline-block m-0 align-top text-jcream">
            Autonomous Robot Piano Player
          </h2>
          <p className="relative italic">
            C, Robotics, Feasability Analysis, Collaboration
          </p>
        </span>
        <p className="text-jcream">
          The robot&apos;s (Happy Keys) mechanical design features a lightweight
          structure, intuitive controls, and a stable base. The construction
          utilized Lego pieces, 3D-printed and laser cut components,
          facilitating easy alignment and broadening the range of playable
          songs. Happy Keys met all specified engineering requirements,
          including key accuracy, cost efficiency, and speed. The robot played
          pre-programmed songs with precise timing.
        </p>

        <div className="card-actions justify-end">
          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1moTeTf8o-3JceqXucZ95IMslKCwioc-i?usp=drive_link"
          >
            <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
              Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default pianoCard;
