import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6 md:px-12 rounded-t-3xl mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Info - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Templates
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Integrations
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Press
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Community
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-gray-800">
          <div className="mb-6 md:mb-0">
            <h4 className="font-semibold mb-4 md:hidden">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black cursor-pointer hover:bg-gray-200 transition-all">
                <FaTwitter size={18} />
              </div>
            </div>
          </div>

          {/* Bottom Legal Links */}
          <div className="flex flex-wrap gap-6 text-gray-500 text-xs">
            <span>© 2026 Digitools. All rights reserved.</span>
            <div className="flex gap-6 ml-auto">
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer">
                Terms of Service
              </span>
              <span className="hover:text-white cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
