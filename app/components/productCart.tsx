import React from "react";
import GitHub from "./redirects";

const ProductCard = () => {
  return (
    <div className="">
      <div className="px-16 flex bg-slate-500 space-x-3 justify-evenly pt-4">
        <div className="card bg-base-100 shadow-xl w-96 h-[27rem]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0 block"
            />
          </figure>
          <div className="card-body flex h-[13.5rem]">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative w-96">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl w-96 h-[27rem]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-96 h-[27rem]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-16 flex bg-slate-500 space-x-4 justify-evenly pt-4">
        <div className="card bg-base-100 shadow-xl w-96 h-[27rem]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-96 h-[27rem] hidden">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl w-96 h-[27rem]">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="w-96 relative min-w-0 left-0"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="relative">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
