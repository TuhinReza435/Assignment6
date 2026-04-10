import React from "react";
import { GoDotFill } from "react-icons/go";
import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../picture/banner.png";
const Body = () => {
  return (
    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-16">
    
      <div className="flex flex-col items-start space-y-6 lg:mt-0 mt-[60px]">
       
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#4f39f6]/10 to-[#9514fa]/10 border border-[#4f39f6]/20 px-4 py-1.5 rounded-full">
          <span className="flex h-2 w-2 rounded-full bg-[#4f39f6] animate-pulse"></span>
          <span className="text-sm font-medium bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
          Supercharge Your <br />
          <span className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            Digital Workflow
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="btn border-none bg-gradient-to-r from-[#4f39f6] to-[#9514fa] hover:opacity-90 text-white px-8 rounded-full shadow-lg shadow-indigo-200">
            Explore Products
          </button>

          <button className="btn btn-ghost hover:bg-gray-100 text-gray-700 px-8 rounded-full flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow-sm border border-gray-100">
              <CiPlay1 className="text-[#4f39f6]" />
            </div>
            Watch Demo
          </button>
        </div>
      </div>

     
      <div className="relative w-full h-full flex items-center justify-center p-4">
      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 -z-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

       
        <img
          src={bannerImg} 
          alt="AI Digital Workflow Illustration"
          className="w-full h-auto max-w-[550px] object-cover rounded-2xl shadow-xl border border-gray-100 p-3 bg-white"
        />
      </div>
    </div>
  );
};

export default Body;
