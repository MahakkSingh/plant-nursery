
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-900 text-emerald-50 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Verdant Haven</h3>
            <p className="text-emerald-200 text-sm">
              Cultivating joy through nature. Your premium source for healthy, beautiful plants and expert care advice.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-emerald-300">
              <li><a href="#/" className="hover:text-white">Home</a></li>
              <li><a href="#/products" className="hover:text-white">Our Plants</a></li>
              <li><a href="#/about" className="hover:text-white">About Our Mission</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wider text-xs">Visit Us</h4>
            <p className="text-emerald-300 text-sm">
              123 Leafy Lane<br />
              Greenview, FL 33456<br />
              Mon-Sat: 9am - 6pm
            </p>
          </div>
        </div>
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-xs text-emerald-400">
          &copy; {new Date().getFullYear()} Verdant Haven Nursery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
