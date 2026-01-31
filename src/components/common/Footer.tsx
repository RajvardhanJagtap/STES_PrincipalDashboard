"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-2 mt-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between text-sm text-[#1a2533]">
          <div className="flex items-center gap-2">
            <span>Version 2.1.0</span>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Support</a>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Terms</a>
            <span className="mx-1 text-gray-300">•</span>
            <a href="#" className="hover:text-[#026892] transition-colors">Privacy</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Last Updated: Aug 2025</span>
            <button className="ml-2 px-4 py-1 rounded-full border border-gray-200 bg-white text-[#1a2533] hover:bg-gray-50 transition-colors text-sm font-medium shadow-none">Feedback</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;