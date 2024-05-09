import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="px-20 flex bg-slate-500 space-x-4 justify-evenly">
      <div className="card bg-base-100 shadow-xl w-96 h-[27rem] duration-[0.1s] hover:w-[100%] hover:duration-[0.1s]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className=""
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

      <div className="card bg-base-100 shadow-xl w-96 h-[27rem] duration-[0.1s] hover:w-[100%] hover:duration-[0.1s]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className=""
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

      <div className="card bg-base-100 shadow-xl w-96 h-[27rem] duration-[0.1s] hover:w-[100%] hover:duration-[0.1s]">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className=""
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
  );
};

export default ProductCard;
