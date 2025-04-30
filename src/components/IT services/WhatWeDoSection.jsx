import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import staticImg from '../../assets/images/mobile-slide.jpg';
import img1 from '../../assets/images/slide1.jpg';
import img2 from '../../assets/images/slide1.jpg';
import img3 from '../../assets/images/slide1.jpg';
import img4 from '../../assets/images/slide1.jpg';
import img5 from '../../assets/images/slide1.jpg';

const categories = [
  {
    key: 'mobile',
    title: 'Mobile App Development',
    description: 'Build intuitive and responsive mobile experiences tailored to user needs.',
    bullets: [
      { image: img1, text: 'Native Android/iOS/Hybrid mobile apps (XDC, Android, Flutter, React Native)' },
      { image: img2, text: 'Custom UI/UX design for enhanced usability and engagement' },
      { image: img3, text: 'Cross-platform performance optimization and testing' },
      { image: img4, text: 'Push notifications, offline mode & deep linking' },
      { image: img5, text: 'App Store & Play Store submission support' },
      { image: img1, text: 'Maintenance, versioning & analytics integration' },
    ],
  },
  {
    key: 'ai',
    title: 'AI-Enabled Software Products',
    description: 'Integrate intelligence into every business process using cutting-edge AI.',
    bullets: [
      { image: img1, text: 'Intelligent data extraction and document parsing' },
      { image: img2, text: 'Predictive analytics for business insights' },
      { image: img3, text: 'NLP-driven chatbots and virtual assistants' },
      { image: img4, text: 'AI-based decision engines for automation' },
      { image: img5, text: 'Computer vision solutions for document & ID verification' },
      { image: img1, text: 'Seamless integration with OpenAI, Azure AI, etc.' },
    ],
  },
  {
    key: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    description: 'Automate repetitive tasks for enhanced speed, accuracy, and cost-efficiency.',
    bullets: [
      { image: img1, text: 'End-to-end workflow automation across departments' },
      { image: img2, text: 'RPA bots for data entry, reconciliation, & report generation' },
      { image: img3, text: 'Integration with legacy systems and APIs' },
      { image: img4, text: 'Audit trails and bot performance analytics' },
      { image: img5, text: 'Rule-based automation for compliance-heavy operations' },
      { image: img1, text: 'Scalable bot deployment across enterprise units' },
    ],
  },
];

export default function WhatWeDoSlider() {
  const [activeCat, setActiveCat] = useState('mobile');
  const [idx, setIdx] = useState(0);

  const active = categories.find(c => c.key === activeCat) || categories[0];
  const slides = active.bullets;
  const visibleCount = 3;
  const overlap = 80; // half of 160px card width

  const prev = () =>
    setIdx(i => (i === 0 ? slides.length - visibleCount : i - 1));
  const next = () =>
    setIdx(i => (i === slides.length - visibleCount ? 0 : i + 1));

  const visible = slides.slice(idx, idx + visibleCount);

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center pt-12 px-6">
        <h2 className="text-2xl font-bold uppercase">WHAT WE DO</h2>
        <p className="mt-3 text-base text-gray-600 max-w-2xl mx-auto relative">
          We build transformative digital solutions that drive efficiency, agility, and growth—across industries, platforms, and user experiences.
          <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-28 h-1 bg-orange-500" />
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-[#F7F7F7] px-6 py-10 flex flex-col md:flex-row gap-8 mt-8">
        {/* Left Menu */}
        <div className="md:w-1/3 space-y-8 text-left">
          {categories.map(cat => (
            <div
              key={cat.key}
              className="cursor-pointer"
              onClick={() => {
                setActiveCat(cat.key);
                setIdx(0);
              }}
            >
              <h4 className={`text-base font-semibold ${
                activeCat === cat.key
                  ? 'text-orange-600 border-l-4 border-orange-500 pl-2'
                  : 'text-gray-900'
              }`}>
                {cat.title}
              </h4>
              <p className="mt-1 text-sm text-gray-700">{cat.description}</p>
            </div>
          ))}
        </div>

        {/* Slider Pane */}
        <div
          className="md:w-2/3 relative flex items-center overflow-visible "
          style={{
            backgroundImage: `url(${staticImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center',
            backgroundSize: '50% 100%',
          }}
        >
          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-45 z-20 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:opacity-90 transition"
          >
            <FiChevronLeft size={20} />
          </button>

          {/* 3-card strip */}
          <div
            className="flex gap-4 overflow-hidden mt-10"
            style={{
              paddingLeft: '50%',
              marginLeft: `-${overlap}px`,
            }}
          >
            {visible.map((slide, i) => (
              <div
                key={i}
                className="w-40 h-40 bg-white rounded shadow-md flex-shrink-0 flex flex-col"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${i}`}
                  className="w-full h-20 object-cover rounded-t"
                />
                <p className="p-2 text-xs text-gray-800 flex-1 leading-tight">
                  {slide.text}
                </p>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-0 z-20 p-2 bg-orange-500 text-white rounded-full shadow-lg hover:opacity-90 transition"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}