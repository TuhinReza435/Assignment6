import React from "react";
import { FaCheck } from "react-icons/fa";

const Selectitem = ({ product }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-2xl gap-4 items-start p-6 bg-white border border-gray-100 hover:shadow-xl transition-shadow">
 
      <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
        <img
          src={product.icon}
          alt={product.name}
          className="w-10 h-10 object-contain"
        />
      </div>

      
      <div className="space-y-2 text-start">
        <h2 className="text-xl font-extrabold text-gray-800">{product.name}</h2>
        <p className="text-sm text-[#627382] leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-1">
        <span className="font-black text-3xl text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-500 font-medium">
          /{product.period}
        </span>
      </div>

   
      <ul className="space-y-2.5 w-full">
        {product.features.map((element, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 flex items-center gap-3"
          >
            <div className="bg-green-100 p-1 rounded-full">
              <FaCheck className="text-green-600 text-[10px]" />
            </div>
            {element}
          </li>
        ))}
      </ul>

      {/* Button with 10px bottom spacing as requested */}
      <button className="btn btn-primary w-full rounded-xl py-3 font-bold mt-auto mb-[10px] hover:scale-[1.02] transition-transform">
        Buy Now
      </button>
    </div>
  );
};

export default Selectitem;
