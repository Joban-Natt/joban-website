import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
        <div className="my-6 card xl:w-[28rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
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

        <div className="my-6 card xl:w-[28rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
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

        <div className="my-6 card xl:w-[28rem] md:w-[24rem] w-full bg-jGrey shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
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
