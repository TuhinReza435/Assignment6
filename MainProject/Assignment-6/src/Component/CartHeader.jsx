import React, { useState } from "react";
import ShowCardDetails from "./ShowCardDetails";
import SelectedCartItems from "./SelectedCartItems";

const CartHeader = ({ products }) => {
  const [activebtn, setActiceBtn] = useState(true);
  const handleClick = () => {
    setActiceBtn(!activebtn);
    console.log(activebtn);
  };
  return (
    <div className="flex flex-col items-center justify-center text-center gap-2.5">
      <h2 className="font-bold text-4xl mt-[50px] mb-[20px]">
        Premium Digital Tools
      </h2>
      <p>
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>
      <div className="flex gap-5">
        <button
          className={`btn ${activebtn ? "btn-primary" : "btn-Secondary"} `}
          onClick={() => !activebtn && handleClick()}
        >
          Products
        </button>
        <button
          className={`btn ${activebtn ? "btn-Secondary" : "btn-primary"}`}
          onClick={() => activebtn && handleClick()}
        >
          Cart ( )
        </button>
      </div>
      {activebtn ? (
        <ShowCardDetails products={products} />
      ) : (
        <SelectedCartItems products={products} />
      )}
    </div>
  );
};

export default CartHeader;
