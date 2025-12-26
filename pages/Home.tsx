
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/152/1600/900" 
            className="w-full h-full object-cover brightness-[0.7]" 
            alt="Nursery greenhouse"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
              Bring Nature <br />
              <span className="text-emerald-400">Into Your Home</span>
            </h1>
            <p className="text-xl mb-10 text-emerald-50 font-light max-w-lg drop-shadow">
              Verdant Haven is your destination for hand-picked, healthy plants and the wisdom to keep them thriving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all text-center shadow-lg"
              >
                Shop Our Collection
              </Link>
              <button 
                onClick={() => {
                  const event = new CustomEvent('openChat');
                  window.dispatchEvent(event);
                }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-8 py-4 rounded-full text-lg font-semibold transition-all text-center"
              >
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-900">Expertly Grown</h3>
              <p className="text-slate-600">Every plant is nurtured by professional botanists before reaching your doorstep.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-900">AI Care Support</h3>
              <p className="text-slate-600">Stuck with a yellow leaf? Flora, our AI assistant, is available 24/7 for expert help.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-emerald-900">Eco-Friendly Shipping</h3>
              <p className="text-slate-600">We use biodegradable packaging and carbon-neutral delivery partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-emerald-900">New Arrivals</h2>
              <p className="text-emerald-700">Fresh from our greenhouse this week.</p>
            </div>
            <Link to="/products" className="text-emerald-600 font-semibold hover:text-emerald-700 underline underline-offset-4">
              View All Products
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(id => (
               <div key={id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={`https://picsum.photos/id/${100 + id}/600/600`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    alt="Plant"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Premium Botanicals</h3>
                  <p className="text-slate-500 text-sm mb-4">Starting from $19.99</p>
                  <Link to="/products" className="block text-center border-2 border-emerald-600 text-emerald-600 font-bold py-2 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
