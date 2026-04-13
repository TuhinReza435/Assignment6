import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      button: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      button: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      button: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-center text-5xl font-semibold">
        Simple, Transparent Pricing
      </h1>
      <p className="text-[#627382] text-center mt-2">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-3xl border transition-all ${
              plan.isPopular
                ? "bg-gradient-to-b from-[#4f39f6] to-[#9514fa] text-white scale-105 shadow-2xl border-none"
                : "bg-white text-gray-900 border-gray-100 shadow-lg"
            }`}
          >
            {/* "Most Popular" Badge */}
            {plan.isPopular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#fdf5d3] text-[#b38b00] text-xs font-bold px-3 py-1 rounded-full border border-[#f0e0a8]">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p
              className={`text-sm mt-1 ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}
            >
              {plan.desc}
            </p>

            <div className="my-6">
              <span className="text-4xl font-black">${plan.price}</span>
              <span className="text-lg opacity-70">/Month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span
                    className={plan.isPopular ? "text-white" : "text-green-500"}
                  >
                    ✔
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-full font-bold transition-transform hover:scale-105 ${
                plan.isPopular
                  ? "bg-white text-[#4f39f6]"
                  : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
