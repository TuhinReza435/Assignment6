import React from "react";

const CheckOut = ({ total, }) => {
 
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[#627382]">Total</h1>
        <h1 className="text-2xl font-bold">${total}</h1>
      </div>
      <button className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] w-full py-2.5 rounded-full text-white font-bold">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CheckOut;
 