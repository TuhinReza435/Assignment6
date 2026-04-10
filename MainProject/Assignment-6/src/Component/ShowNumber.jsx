import React from "react";

const ShowNumber = () => {
  return (
    <div className="w-full mb-1.5 bg-[#4f39f6] flex justify-around text-[#ffffff] py-3">
      <div className="">
        <div className="text-5xl font-bold">50k+</div>
        <div className="text-xl">Active Users</div>
      </div>
      <div className="">
        <div className="text-5xl font-bold">200+ </div>
        <div className="text-xl">Premium Tools</div>
      </div>
      <div>
        <div className="text-5xl font-bold">4.9</div>
        <div className="text-xl">Rating</div>
      </div>
    </div>
  );
};

export default ShowNumber;
