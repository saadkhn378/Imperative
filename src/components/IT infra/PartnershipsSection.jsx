import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Banking Automation images
import imgCube   from '../../assets/images/gold-testing-cube.png';
import imgStark  from '../../assets/images/gold-testing-stark.png';
import imgCheque from '../../assets/images/cheque-scanner.png';
import imgMatrix from '../../assets/images/matrix-8130.png';
import imgMX50   from '../../assets/images/mx-50.png';

// Data Center Design images
import imgHardwareSupply  from '../../assets/images/placeholder.png';
import imgCoLocation      from '../../assets/images/placeholder.png';
import imgHosting         from '../../assets/images/placeholder.png';
import imgCloudSolutions  from '../../assets/images/placeholder.png';

// Supply of IT Hardware images
import imgDesktops        from '../../assets/images/placeholder.png';
import imgLaptops         from '../../assets/images/placeholder.png';
import imgPrinters        from '../../assets/images/placeholder.png';
import imgNetworkDevices  from '../../assets/images/placeholder.png';
import imgUPS             from '../../assets/images/placeholder.png';

const data = {
  'Banking Automation': [
    { src: imgCube,   alt: 'Cube',   title: 'Gold Testing Machine – Cube' },
    { src: imgStark,  alt: 'Stark',  title: 'Gold Testing Machine – Stark' },
    { src: imgCheque, alt: 'Scanner',title: 'Cheque Scanner' },
    { src: imgMatrix, alt: 'Matrix', title: 'Matrix 8130 1+5 Pocket Sorter' },
    { src: imgMX50,   alt: 'MX-50',  title: 'MX-50 Smart+ Currency Counter' },
  ],
  'Data Center Design': [
    { src: imgHardwareSupply, alt: 'Supply', title: 'Hardware Supply' },
    { src: imgCoLocation,     alt: 'Co-Location', title: 'Co-Location' },
    { src: imgHosting,        alt: 'Hosting', title: 'Hosting' },
    { src: imgCloudSolutions, alt: 'Cloud', title: 'Cloud Solutions' },
  ],
  'Supply of IT Hardware': [
    { src: imgDesktops,      alt: 'Desktops',        title: 'Desktops' },
    { src: imgLaptops,       alt: 'Laptops',         title: 'Laptops' },
    { src: imgPrinters,      alt: 'Printers',        title: 'Printers / Scanners' },
    { src: imgNetworkDevices,alt: 'Network',         title: 'Network Devices' },
    { src: imgUPS,           alt: 'UPS',             title: 'UPS – Online & Offline' },
  ],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function PartnershipsSection() {
  const tabs = Object.keys(data);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-gray-900 relative inline-block">
          OEM &amp; Hardware Partnerships
          <motion.span
            layoutId="partnerships-underline"
            className="absolute -bottom-2 left-0 h-1 bg-orange-500"
            style={{ width: '100%' }}
          />
        </h2>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex justify-center space-x-12 text-base md:text-lg">
        {tabs.map(tab => (
          <div key={tab} className="relative">
            <button
              onClick={() => setActive(tab)}
              className={`font-bold pb-2 ${
                active === tab
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
            {active === tab && (
              <motion.div
                layoutId="tabs-underline"
                className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500"
              />
            )}
          </div>
        ))}
      </div>

      {/* Items */}
      <motion.div
        className="mt-10 px-6 md:px-0 overflow-x-auto scroll-smooth snap-x snap-mandatory"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center flex-wrap md:flex-nowrap gap-12">
          {data[active].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex-shrink-0 w-40 md:w-48 lg:w-56 flex flex-col items-center text-center p-4  snap-start"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-28 md:h-32 lg:h-36 object-contain mb-4"
              />
              <p className="text-base md:text-lg text-gray-700">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
