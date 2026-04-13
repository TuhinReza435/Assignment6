import React from "react";

const Last2 = () => {
  return (
    <div className="w-full">
      <div
        className="py-24 px-6 md:px-12 rounded-3xl border border-gray-100 shadow-xl 
                          bg-gradient-to-r from-[#8338ec] via-[#8338ec] from-[15%] via-[#6236f7] to-[#8338ec] to-[85%]"
      >
        <div className="max-w-4xl mx-auto text-center text-white flex flex-col items-center">
        
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Ready To Transform Your Workflow?
          </h2>

          <p className="mt-6 text-base md:text-lg text-purple-100 leading-relaxed max-w-2xl opacity-90">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <button className="bg-white text-[#6236f7] font-semibold px-8 py-3.5 rounded-full shadow hover:bg-opacity-90 transition-all hover:scale-[1.03]">
              Explore Products
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors hover:scale-[1.03]">
              View Pricing
            </button>
          </div>

          <p className="mt-8 text-xs text-purple-200 font-medium tracking-wide">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Last2;
