import React from 'react';

import img1 from '../assets/images/innovation.jpg';
import img2 from '../assets/images/ai-scale.jpg';
import img3 from '../assets/images/data-driven.jpg';
import img4 from '../assets/images/security.jpg';
import img5 from '../assets/images/partners.jpg';
import img6 from '../assets/images/track-record.jpg';

const differentiators = [
  {
    title: 'Innovation at Core',
    desc: 'AI-enabled platforms, Smart APIs, RPA/ML',
    image: img1,
  },
  {
    title: 'Built for Scale',
    desc: 'Modular, cloud-ready products to support business growth',
    image: img2,
  },
  {
    title: 'Data-Driven Decisioning',
    desc: 'Empowering smarter, faster decisions through analytics',
    image: img3,
  },
  {
    title: 'Trust & Security',
    desc: 'ISO-certified, GDPR-ready, encrypted by default',
    image: img4,
  },
  {
    title: 'Partnership Ecosystem',
    desc: 'Collaborating with banks, fintechs, and ecosystem enablers',
    image: img5,
  },
  {
    title: 'Proven Track Record',
    desc: 'Over a decade of measurable delivery in BFSI & beyond',
    image: img6,
  },
];

const Differentiators = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      {/* Top Section */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-[16px] font-semibold tracking-wide uppercase text-black">
          OUR MISSION & DIFFERENTIATORS
        </h2>
        <p className="mt-2 text-[13px] text-gray-700 leading-relaxed px-2 md:px-6">
          At Imperative, our mission is to simplify complexities through secure, scalable, and intelligent solutions. Every
          product we build is crafted to drive measurable impact, boost operational agility, and deliver industry innovation.
        </p>
      </div>

      {/* Subheading */}
      <div className="mb-4">
        <h3 className="text-[14px] font-semibold uppercase tracking-wide text-black">
          WHAT SETS US APART
        </h3>
        <div className="w-[60px] h-[1px] bg-orange-500 mt-1" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {differentiators.map((item, index) => (
          <div key={index} className="relative h-[230px] group overflow-hidden rounded-md shadow-sm">
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Updated text block with background */}
          <div className="absolute bottom-3 left-3 right-3 z-10">
            <div className="bg-black/60 p-2 rounded-sm text-white">
              <h4 className="text-[14px] font-semibold pb-1">{item.title}</h4>
              <p className="text-[12px] mt-1">{item.desc}</p>
            </div>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Differentiators;