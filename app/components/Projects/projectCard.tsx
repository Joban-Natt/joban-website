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
              alt="homeSS"
            />
          </figure>
          <div className="card-body">
            <span className="">
              <h2 className="card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream">
              If a dog chews shoes whose shoes does he choose?
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
              <h2 className="card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
              <h2 className="card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
              <h2 className="card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
              <h2 className="card-title inline-block m-0 align-top">
                This Website!
              </h2>
              <p className="relative italic">React.js, Next.js, TypeScript</p>
            </span>

            <p className="text-jcream">
              If a dog chews shoes whose shoes does he choose?
            </p>
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
