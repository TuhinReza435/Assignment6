import React from "react";
import Selectitem from "./Selectitem";
const ShowCardDetails = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-5 ">
      
      {products.map((product) => (
        <Selectitem key={product.it} product={product} />
      ))}
    </div>
  );
};

export default ShowCardDetails;
