import React from 'react';

const About = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_0.8fr_1fr_1fr_1fr] gap-10 lg:gap-12">

        <div>
          <h2 className="text-xl font-bold mb-3">
            CS — Ticket System
          </h2>

          <p className="text-gray-400 text-sm leading-[22px] max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-medium mb-4">Company</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-medium mb-4">Services</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-medium mb-4">Information</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">Social Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <span className="bg-white text-black rounded-full w-[18px] h-[18px] flex items-center justify-center font-bold text-xs">𝕏</span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <span className="bg-white text-black rounded-full w-[18px] h-[18px] flex items-center justify-center font-bold text-xs">in</span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-2 hover:text-white">
                <span className="bg-white text-black rounded-full w-[18px] h-[18px] flex items-center justify-center font-bold text-xs">f</span>
                @CS — Ticket System
              </a>
            </li>
            <li>
              <a href="mailto:support@cst.com" className="flex items-center gap-2 hover:text-white">
                <span className="bg-white text-black rounded-full w-[18px] h-[18px] flex items-center justify-center text-xs">✉</span>
                support@cst.com
              </a>
            </li>
          </ul>
        </div>

      </div>

     
      <div className="border-t border-gray-800 mt-16 mb-7"></div>


      <div className="text-center text-sm text-gray-300">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default About;