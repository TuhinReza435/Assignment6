import React from "react";
import Selectitem from "./Selectitem";

const ShowCardDetails = ({
  products,
  setselectedPlayer,
  selectedPlayer,

}) => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => (
        <Selectitem
          key={product.id}
          product={product}
          setselectedPlayer={setselectedPlayer}
          selectedPlayer={selectedPlayer}
         
        />
      ))}
    </div>
  );
};

export default ShowCardDetails;
