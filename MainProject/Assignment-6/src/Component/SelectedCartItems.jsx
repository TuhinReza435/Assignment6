import React from "react";
import Selectitem from './Selectitem';

const SelectedCartItems = ({ products }) => {
  return <div>
   {
      products.map((product=>(
         <Selectitem key={product.it} product={product}/>
      )))
   }
      
  </div>;
};

export default SelectedCartItems;
