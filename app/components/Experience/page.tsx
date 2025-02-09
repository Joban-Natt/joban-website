import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="px-4 pt-14">
      <div>
        <h1 className="text-[2rem] font-bold">TECHNICAL EXPERIENCE</h1>
      </div>

      <div className="">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-jcream">
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">
                September 2024 - December 2024
              </time>
              <div className="text-lg font-black">MPI MORHEAT</div>

              <ul>
                <li>
                  &#8226; Developed react configuration applications that
                  automated manufacturing drawings of heaters to save up to 1
                  hour of production time
                </li>
                <li>
                  &#8226; Designed heaters with AutoCAD and SOLIDWORKS, refining
                  GD&T skills, using DFM/A principles for laser cutting and CNC
                  machining resulting in an 8% decrease in cycle time
                </li>
                <li>
                  &#8226; Designing and assembling circuits for custom
                  industrial temperature Control Panels that utilize PID/Fuzzy
                  logic controllers in heating processes
                </li>
                <li>
                  &#8226; Authored detailed product documentation, including
                  technical specifications, standard features, and general
                  information for a range of heating products to convey complex
                  information concisely
                </li>
              </ul>

              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                CAD/CAM
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                AutoCAD
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Automation
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Process Improvement
              </div>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">January 2024 - May 2024</time>
              <div className="text-lg font-black">MPI MORHEAT</div>
              <ul>
                <li>
                  &#8226; Introduced 1:1 drilling/hole-cutting templates that
                  decreased cycle time for select heaters by up to 5 hours while
                  increasing accuracy of holes
                </li>
                <li>
                  &#8226; Manufactured and assembled testing jigs for pressure
                  transducers and thermocouples with spare parts to increase
                  testing speed by 5%{" "}
                </li>
                <li>
                  &#8226; Designed circuits in AutoCAD Electrical to fit client
                  specifications, mainly consisting of melt pressure sensors and
                  transmitters, mastering hands on skills such as soldering and
                  machinery operation
                </li>
              </ul>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                AutoCAD
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                AutoCAD Electrical
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                SOLIDWORKS
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                HTML
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                JavaScript
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                CSS
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">May 2024 - Present</time>
              <div className="text-lg font-black">UW Orbital</div>
              <ul>
                <li>
                  &#8226; Designed and manufactured winders for magnetorquers in
                  SOLIDWORKS that control the attitude and stability of the
                  satilite in low earth orbit.
                </li>
                <li>
                  &#8226; Developing a thermal vacuum setup using Siemens NX to
                  test and qualify the CubeSat for launch that must achieve
                  pressures of 10<sup>-6</sup> Torr, temperatures of -30&deg;C -
                  70&deg;C, and autonomous operation for atleast 72 hours.
                </li>
              </ul>

              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Siemans NX
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Thermal Simulations
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                R&D
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                FEA
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">
                November 2022 - April 2023
              </time>
              <div className="text-lg font-black">Kumon</div>
              In Kumon, I was able to strengthen my foundational concepts of{" "}
              <b>Math</b> and <b>English</b> by explaining different
              mathematical concepts and their applications to a large
              demographic of ages. This also strengthened my soft skills like{" "}
              <b>communication</b>, as I had to explain <b>complex ideas</b>{" "}
              (relative to the student) in an <b>easy way</b>, such that they{" "}
              could understand. <br />
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Math
              </div>
              <div className="bg-jred w-auto mt-2 px-2 mr-4 rounded-[12px] hover:bg-jhred inline-block">
                Communication
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}
