import React from "react";
import image from "../picture/products/user.png";
const StartThreeStep = () => {
  return (
    <div className="mb-7">
      <div className="mt-16">
        <h1 className="text-[#101727] font-bold text-[48px] text-center">
          Get Started in 3 Steps
        </h1>
        <p className="text-center text-[#627382] mb-[20px]">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className="grid grid-cols-3 gap-4 text-center mt-20">
          <div className="flex flex-col justify-center gap-2.5 items-center rounded-2xl bg-white shadow-2xl py-7 px-4  border-gray-100 hover:shadow-xl transition-shadow">
            <img src={image} alt="" className="w-[20%] bg-purple-300 m-4 p-1 rounded-full" />
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card require to get Started
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-center items-center rounded-2xl bg-white shadow-2xl py-7 px-4  border-gray-100 hover:shadow-xl transition-shadow">
            <img
              src={image}
              alt=""
              className="w-[20%] bg-purple-300 m-4 p-1 rounded-full "
            />
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card require to get Started
            </p>
          </div>
          <div className="flex flex-col gap-2.5 justify-center items-center rounded-2xl bg-white shadow-2xl py-7 px-4  border-gray-100 hover:shadow-xl transition-shadow">
            <img
              src={image}
              alt=""
              className="w-[20%] bg-purple-300 m-4 p-1 rounded-full"
            />
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p>
              Sign up for free in seconds. No credit card require to get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartThreeStep;
