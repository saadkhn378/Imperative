import React from 'react';

import img1 from '../../assets/images/innovation.jpg';
import img2 from '../../assets/images/ai-scale.jpg';
import img3 from '../../assets/images/data-driven.jpg';
import img4 from '../../assets/images/security.jpg';
import img5 from '../../assets/images/partners.jpg';

const techStack = [
  {
    title: 'Low-Code/No-Code Development',
    desc: 'Empowering rapid application delivery with minimal coding effort.',
    image: img1,
  },
  {
    title: 'AI-First App Ecosystems',
    desc: 'Developing applications with embedded intelligence at their core.',
    image: img2,
  },
  {
    title: 'DevSecOps Integration',
    desc: 'Embedding security at every stage of the development lifecycle.',
    image: img3,
  },
  {
    title: 'Hyper-Personalized User Experiences',
    desc: 'Delivering tailored digital journeys using real-time data and AI.',
    image: img4,
  },

  {
    title: 'Microservices & Containerization',
    desc: 'Enhancing scalability and agility through modular architectures.',
    image: img5,
  },
];

const Differentiators = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-[16px] font-bold uppercase text-gray-900 mb-6 text-center">
        OUR TECHNOLOGY DIFFERENTIATORS
      </h2>

      {/* First Row: Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {techStack.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="relative h-[200px] group overflow-hidden rounded-md shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-3 left-3 right-23 z-10">
              <div className="bg-black/70 p-2 rounded-sm text-white">
                <h4 className="text-[13px] font-semibold leading-tight">{item.title}</h4>
                <p className="text-[11px] mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: Flex Split */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-[58%] relative h-[200px] group overflow-hidden rounded-md shadow-sm">
          <img
            src={techStack[3].image}
            alt={techStack[3].title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-3 left-3 right-63 z-10">
            <div className="bg-black/70 p-2 rounded-sm text-white">
              <h4 className="text-[13px] font-semibold">{techStack[3].title}</h4>
              <p className="text-[11px] mt-1">{techStack[3].desc}</p>
            </div>
          </div>
        </div>

        <div className="md:w-[42%] relative h-[200px] group overflow-hidden rounded-md shadow-sm">
          <img
            src={techStack[4].image}
            alt={techStack[4].title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-3 left-3 right-33 z-10">
            <div className="bg-black/70 p-2 rounded-sm text-white">
              <h4 className="text-[13px] font-semibold">{techStack[4].title}</h4>
              <p className="text-[11px] mt-1">{techStack[4].desc}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Differentiators;