import React from 'react';
import produbanner from '../../assets/images/services.jpg';

const HeroBanner = () => {
  return (
    <section className="relative bg-black text-white min-h-[80vh] md:min-h-screen flex items-center justify-center md:justify-start">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Background Image */}
      <img
        src={produbanner}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Powering Tomorrow with<br/>
          <span className="text-white">Smart Infrastructure Today</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
          From banking automation to public sector innovation, our smart infra solutions enhance productivity, visibility, and control.
        </p>
        <button className="mt-6 inline-block px-6 py-2 sm:px-8 sm:py-3 border border-white text-sm sm:text-base font-medium rounded-full hover:bg-white hover:text-black transition">
          KNOW MORE
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
