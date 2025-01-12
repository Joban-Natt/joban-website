import React from "react";
import Link from "next/link";

const simulationWorkshop = () => {
  return (
    <div className="my-6 card xl:w-[24rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
      <figure>
        <img
          src="https://jobanwebsitepics.s3.us-east-2.amazonaws.com/MagnetWinder.PNG"
          alt="Magnetorquer Image"
        />
      </figure>
      <div className="card-body">
        <span className="">
          <h2 className="card-title inline-block m-0 align-top text-jcream">
            Magnetorquer Winding Mechanism
          </h2>
          <p className="relative italic">
            SOLIDWORKS, 3D Printing, Rapid Prototyping
          </p>
        </span>
        <p className="text-jcream">
          Maintaining an upright position is crucial for a satellite to gather
          accurate data and take high-quality images. Magnetorquers are
          solenoids that allow the CubeSat to leverage the earth&apos;s magnetic
          field and correct its attitude. According to Lenz&apos;s Law, the emf
          is proportional to the number of turns in the coil. This winding
          mechanism allows the team to manufacture solenoids with high levels of
          precision and accuracy to achieve optimal and predictable results.{" "}
        </p>

        {/* <div className="card-actions justify-end">
          <Link target="_blank" href="">
            <button className="btn bg-jred border-none hover:bg-jhred hover:scale-110 btn-primary">
              
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default simulationWorkshop;
