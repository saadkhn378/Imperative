import React from 'react';
import { motion } from 'framer-motion';

import imgOp from '../../assets/images/ai-powered.jpg';
import imgSec from '../../assets/images/ai-powered.jpg';
import imgRemote from '../../assets/images/ai-powered.jpg';
import imgRT from '../../assets/images/ai-powered.jpg';
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const BenefitsSection = () => {
  return (
    <section className="bg-white px-4 md:px-16 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-[16px] font-bold uppercase text-gray-800">
          Benefits of Our Smart Infra Solutions
        </h2>
        <p className="text-[12px] text-gray-600 mt-1 max-w-2xl mx-auto">
          Simplify operations, enhance visibility, and deliver better experiences with connected, intelligent infrastructure.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* OPERATIONAL EFFICIENCY (spans 2 rows) */}
        <motion.div
          className="rounded md:row-span-2 shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">
              OPERATIONAL EFFICIENCY
            </h3>
            <p className="text-[13px] text-gray-700">
              Automate manual processes across banking, logistics, and service desks.
            </p>
          </div>
          <div className="px-2">
            <img
              src={imgOp}
              alt="Operational Efficiency"
              className="w-full h-40 object-cover rounded-t-md"
            />
          </div>
        </motion.div>

        {/* ENHANCED SECURITY */}
        <motion.div
          className="rounded shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">
              ENHANCED SECURITY
            </h3>
            <p className="text-[13px] text-gray-700">
              Secure physical and data access with biometric and CCTV integrations.
            </p>
          </div>
          <div className="px-2">
            <img
              src={imgSec}
              alt="Enhanced Security"
              className="w-full h-40 object-cover rounded-t-md"
            />
          </div>
        </motion.div>

        {/* REMOTE SUPPORT */}
        <motion.div
          className="rounded shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">
              REMOTE SUPPORT
            </h3>
            <p className="text-[13px] text-gray-700">
              Devices can be managed, diagnosed, and updated remotely.
            </p>
          </div>
          <div className="px-2">
            <img
              src={imgRemote}
              alt="Remote Support"
              className="w-full h-40 object-cover rounded-t-md"
            />
          </div>
        </motion.div>

        {/* REAL-TIME MONITORING (spans 1 row full width) */}
        <motion.div
          className="md:col-span-2 bg-gray-100 relative flex flex-col md:flex-row justify-between px-6 py-6 border border-gray-300 rounded"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
        >
          <div className="w-full md:w-1/2 pr-4 flex flex-col">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">
              REAL-TIME MONITORING
            </h3>
            <p className="text-[13px] text-gray-700 leading-snug">
              Track usage, uptime, and alerts from a centralized console.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-end">
            <img
              src={imgRT}
              alt="Real-Time Monitoring"
              className="w-[90%] h-[200px] object-cover rounded"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
