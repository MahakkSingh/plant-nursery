
import React, { useState } from 'react';
import { PLANTS } from '../constants';
import { Plant } from '../types';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const filteredPlants = PLANTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Indoor', 'Outdoor', 'Succulent', 'Tree'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">Our Plant Collection</h1>
        <p className="text-slate-600 text-lg">Curated greens for every space and skill level.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-start md:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-emerald-700 hover:bg-emerald-100 border border-emerald-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search plants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 outline-none"
          />
          <svg className="absolute left-3 top-2.5 w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid */}
      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-emerald-50 flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src={plant.image} className="w-full h-full object-cover" alt={plant.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full font-bold text-emerald-900 shadow-sm">
                  ${plant.price.toFixed(2)}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                    plant.care.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    plant.care.difficulty === 'Moderate' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {plant.care.difficulty} Care
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-emerald-900">{plant.name}</h3>
                  <p className="text-xs italic text-emerald-600 mb-2">{plant.scientificName}</p>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-2">{plant.description}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-sm transition-colors">
                    Add to Cart
                  </button>
                  <a 
                    href="https://checkout.stripe.com/demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white border-2 border-emerald-600 text-emerald-600 font-bold py-2 rounded-xl text-sm hover:bg-emerald-50 transition-colors"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white rounded-3xl border border-emerald-50">
          <svg className="w-16 h-16 text-emerald-100 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-emerald-900 mb-2">No plants found</h3>
          <p className="text-slate-500">Try adjusting your filters or search term.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
