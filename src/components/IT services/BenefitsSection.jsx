import React from 'react';
import { motion } from 'framer-motion';
import imgExpertise from '../../assets/images/ai-powered.jpg';
import imgCompliance from '../../assets/images/ai-powered.jpg';
import imgVisibility from '../../assets/images/ai-powered.jpg';
import imgScalability from '../../assets/images/ai-powered.jpg';

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
          Benefits of Choosing Imperative
        </h2>
        <p className="text-[12px] text-gray-600 mt-1 max-w-2xl mx-auto">
          Imperative offers tailored solutions with a focus on industry-specific expertise, ensuring operational excellence and compliance across various sectors.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* EXPERTISE */}
        <motion.div
          className="rounded md:row-span-2 shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">Faster Go-To-Market</h3>
            <p className="text-[13px] text-gray-700">
                       Accelerate product delivery with agile development and rapid deployment.
              
            </p>
          </div>
          <div className="px-2">
            <img src={imgExpertise} alt="Expertise" className="w-full h-40 object-cover rounded-t-md" />
          </div>
        </motion.div>

        {/* COMPLIANCE */}
        <motion.div
          className="rounded shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">AI-Driven Innovation</h3>
            <p className="text-[13px] text-gray-700">
            Infuse intelligence into every process with advanced AI capabilities.
            </p>
          </div>
          <div className="px-2">
            <img src={imgCompliance} alt="Compliance" className="w-full h-40 object-cover rounded-t-md" />
          </div>
        </motion.div>

        {/* VISIBILITY */}
        <motion.div
          className="rounded-md shadow-sm flex flex-col justify-between bg-gray-100 border border-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <div className="p-5">
            <h3 className="text-[14px] font-bold text-gray-800 mb-2">Enhanced Security</h3>
            <p className="text-[13px] text-gray-700">
            Built-in enterprise-grade protection for data, users, and infrastructure.
            </p>
          </div>
          <div className="px-2">
            <img src={imgVisibility} alt="Visibility" className="w-full h-40 object-cover rounded-t-xl" />
          </div>
        </motion.div>

        {/* SCALABILITY */}
        <motion.div
          className="md:col-span-2 bg-[#F4F4F4] relative flex flex-col md:flex-row justify-between px-6 py-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={3}
        >
          <div className="w-full md:w-1/2 pr-4 flex flex-col">
            <h3 className="text-[14px] font-bold text-gray-900 mb-2">Scalable Architecture</h3>
            <p className="text-[13px] text-gray-700 leading-snug">
            Future-proof platforms designed to grow with your business.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-end relative">
            <img
              src={imgScalability}
              alt="Scalability"
              className="w-[90%] h-[200px] object-cover rounded-t-xl translate-y-6"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;