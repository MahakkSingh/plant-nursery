
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 leading-tight">
            Rooted in a Love <br />for Green Spaces.
          </h1>
          <p className="text-lg text-slate-600 mb-6">
            Verdant Haven began as a small roadside stand in 2012. Our founder, Elena Woods, believed that every home deserved the calming, air-purifying benefits of real plants, but noticed many people were intimidated by "black thumbs."
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Today, we're not just a nursery; we're a community. We've combined traditional horticultural expertise with modern technology (like our AI assistant, Flora) to ensure that every plant we sell becomes a long-term member of your family.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-1">10k+</p>
              <p className="text-sm text-slate-500">Plants Rehomed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-1">50+</p>
              <p className="text-sm text-slate-500">Unique Species</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-emerald-600 mb-1">98%</p>
              <p className="text-sm text-slate-500">Happy Parents</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-300 rounded-full blur-3xl opacity-50"></div>
          <img 
            src="https://picsum.photos/id/158/800/1000" 
            className="rounded-[3rem] shadow-2xl relative z-10 w-full h-auto object-cover" 
            alt="Elena in her nursery"
          />
        </div>
      </div>

      <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-emerald-100 text-xl leading-relaxed">
          "To cultivate deeper connections between people and nature by providing healthy plants, sustainable practices, and the knowledge needed to help them flourish."
        </p>
      </div>
    </div>
  );
};

export default About;
