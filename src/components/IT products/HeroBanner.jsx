import React from 'react';
import produbanner from '../assets/images/productsbanner.jpg'; // adjust the path as needed

const HeroBanner = () => {
  return (
    <section className="relative bg-black text-white h-screen flex items-center justify-start">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Background Image (you can use your own image path) */}
      <img
        src={produbanner}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          SCALABLE IT PRODUCTS <br />
          <span className="text-white">BUILT FOR THE FUTURE</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-300 max-w-md">
          Accelerate your digital transformation with secure, intelligent,
          and modular products tailored to your industry needs.
        </p>
        <button className="mt-6 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
          KNOW MORE
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;