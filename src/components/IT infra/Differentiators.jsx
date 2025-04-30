import React from 'react';

import aiInfra from '../../assets/images/ai-infrastructure.jpg';
import edgeComp from '../../assets/images/edge-computing2.jpg';
import iotVis from '../../assets/images/iot-visibility.jpg';
import hyperAuto from '../../assets/images/hyper-automation2.jpg';
import smartCities from '../../assets/images/smart-cities.jpg';

const diffItems = [
  {
    title: 'AI-Powered Infrastructure',
    desc: 'From predictive maintenance to facial recognition – AI is optimizing uptime and automating control.',
    image: aiInfra,
  },
  {
    title: 'Edge Computing',
    desc: 'Data processing is moving closer to the source—in kiosks, branches, and sensors—reducing latency and improving response.',
    image: edgeComp,
  },
  {
    title: 'IoT-Driven Visibility',
    desc: 'Smart sensors and devices are enabling real-time tracking, monitoring, and analytics across sectors.',
    image: iotVis,
  },
  {
    title: 'Hyper-Automation in Physical Ops',
    desc: 'Combining RPA + infra automation to streamline front-office and back-office experiences.',
    image: hyperAuto,
  },
  {
    title: 'Smart Cities & Citizen Experience',
    desc: 'Surveillance, traffic flow, and civic kiosk systems are being connected under unified, intelligent networks.',
    image: smartCities,
  },
];

const Differentiators = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-[16px] font-bold uppercase text-gray-900 mb-6 text-center">
        OUR TECHNOLOGY DIFFERENTIATORS
      </h2>

      {/* Top row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {diffItems.slice(0, 3).map((item, idx) => (
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
            <div className="absolute top-3 left-3 right-3 z-10">
              <div className="bg-black/70 p-2 rounded-sm text-white">
                <h4 className="text-[13px] font-semibold leading-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] mt-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row: split 58/42 */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* 1st large card (58%) */}
        <div className="md:w-7/12 relative h-[200px] group overflow-hidden rounded-md shadow-sm">
          <img
            src={diffItems[3].image}
            alt={diffItems[3].title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-3 left-3 right-3 z-10">
            <div className="bg-black/70 p-2 rounded-sm text-white">
              <h4 className="text-[13px] font-semibold leading-tight">
                {diffItems[3].title}
              </h4>
              <p className="text-[11px] mt-1">{diffItems[3].desc}</p>
            </div>
          </div>
        </div>

        {/* 2nd large card (42%) */}
        <div className="md:w-5/12 relative h-[200px] group overflow-hidden rounded-md shadow-sm">
          <img
            src={diffItems[4].image}
            alt={diffItems[4].title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-3 left-3 right-3 z-10">
            <div className="bg-black/70 p-2 rounded-sm text-white">
              <h4 className="text-[13px] font-semibold leading-tight">
                {diffItems[4].title}
              </h4>
              <p className="text-[11px] mt-1">{diffItems[4].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
