import React from 'react';
import { motion } from 'framer-motion';
// Import icons from local assets
import barChartIcon from '../../../assets/icons/data-icon.svg';
import lineChartIcon from '../../../assets/icons/chart-icon.svg';
import usersIcon from '../../../assets/icons/businessresearch-icon.svg';
import trendingUpIcon from '../../../assets/icons/comintelligence-icon.svg';

// Button Component
const Button = ({ children, className, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium focus:outline-none";
  const variantClasses = variant === "outline" 
    ? "bg-transparent border border-current" 
    : "text-white";
  
  return (
    <motion.button 
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// Animated Section Component using Framer Motion
const AnimatedSection = ({ children, className = "", animation = "fadeIn", delay = 0 }) => {
  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 50 : 0,
      x: animation === "slideRight" ? -50 : animation === "slideLeft" ? 50 : 0,
      scale: animation === "scaleUp" ? 0.8 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: delay / 1000, // Convert ms to seconds for Framer Motion
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// Main Component
const Voicesupport = () => {
  // Data
  const services = [
    {
      title: "Credit Processing",
      description: "Streamlined loan file validation, checklist management, and application indexing for efficient credit approval.",
      icon: barChartIcon,
    },
    {
      title: "KYC / Video KYC Validation",
      description: "Multi-layer verification including Aadhaar/PAN match, geo-tagging",
      icon: lineChartIcon,
    },
    {
      title: "Audit & Compliance Checks",
      description: "Verification of regulatory documents and creation of audit trails to ensure full compliance and transparency.",
      icon: usersIcon,
    },
    {
      title: "Payment Reconciliation",
      description: "Accurate tracking of EMI, IMPS, RTGS, and four-way payment reconciliations to ensure financial integrity.",
      icon: trendingUpIcon,
    },
  ];

  const realWorldImpacts = [
    {
      title: "75M+ Transactions Handled Annually",
      description: "We handle 75+ million transactions annually, ensuring smooth and reliable data flow.",
    },
    {
      title: "99% SLA Compliance Across BFSI Projects",
      description: "Our teams maintain 99% SLA compliance, ensuring timely, high-quality service for BFSI clients.",
    },
    {
      title: "40% Reduction in Manual Errors",
      description: "Automation and optimization reduced manual errors by 40%, boosting accuracy.",
    },
    {
      title: "24x7 Processing Through Rotational Shifts",
      description: "We offer 24/7 service with rotational shifts for seamless, timely processing.",
    },
  ];

  const trends = [
    {
        title: "Intelligent Automation",
        description: "AI-powered systems handling routine tasks with minimal human intervention.",
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cloud-Based Operations",
        description: "Centralized systems enabling remote work and seamless collaboration.",
        image:
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
      {
        title: "Data-Driven Decision Making",
        description: "Analytics transforming operational insights into strategic advantages.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Integrated Business Systems",
        description: "Seamless connectivity between departments for enhanced operational flow.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cybersecurity Protocols",
        description: "Advanced protection measures safeguarding sensitive operational data.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
  ];

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern office environment with professionals working on back office operations"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection animation="slideUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">BACK-OFFICE OPERATIONS (NON-VOICE)</h1>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">Transforming back offices with smart human+tech solutions for faster, accurate, and transparent workflows.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry Overview Section */}
      <section className="py-24 bg-white mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <div className="relative h-[450px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Business professionals collaborating on operational processes"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection animation="slideLeft">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">Industry Overview</h2>
                  <div className="h-1 bg-orange-500 w-[230px] mb-6"></div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={200}>
                <p className="text-gray-700 mb-6 text-lg">
                Modern enterprises operate in a high-speed, data-driven environment where accuracy, compliance, and efficiency are non-negotiable. The demand for agile, scalable back-office solutions has never been higher. Imperative addresses this challenge by providing trained teams equipped with domain knowledge and a strong process framework. We support banks, insurers, NBFCs, and enterprises in handling complex, high-volume operations with ease. Our back-office engines are built to streamline workflows, minimize errors, and ensure regulatory compliance.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={400}>
                <p className="text-gray-700 mb-10 text-lg">
                By combining human expertise with intelligent automation, we help clients reduce costs and improve turnaround times. Whether you're scaling up or optimizing existing operations, Imperative ensures your processes stay seamless and future-ready.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={500}>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button className="bg-orange-500 hover:bg-orange-600 transition-all text-lg py-3 px-6">Get a Quote</Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 transition-all text-lg py-3 px-6"
                  >
                    Contact Us
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-28 bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">What We Offer</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
            Our insights don’t just inform—they transform by translating complex data into clear, strategic actions that have helped clients across industries boost performance, optimize decision-making, and unlock new growth opportunities with measurable, real-world results.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={200 + index * 100}>
                <motion.div 
                  className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center text-center h-full"
                  whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 flex items-center justify-center mb-6">
                    <motion.div 
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      transition={{ duration: 0.3 }}
                    >
                      <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-16 h-16" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-700 text-lg">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="py-28 bg-white mt-10 relative">
        <div className="container mx-auto px-4 relative">
          {/* Lab image that overlays the last two cards - using direct URL */}
          <AnimatedSection
            animation="fadeIn"
            className="absolute right-0 top-12 w-[45%] h-[550px] z-10 hidden lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1531493731235-b5c309dca387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern office workspace with operational dashboards and systems"
              className="w-full h-full object-cover rounded-l-lg shadow-xl"
            />
          </AnimatedSection>

          <div className="mb-16 relative z-20">
            <div className="max-w-xl">
              <AnimatedSection animation="slideUp">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Real-World Impact</h2>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={200}>
                <p className="text-gray-700 text-lg">
                Our tailored back-office solutions have created measurable impact by significantly enhancing operational efficiency, ensuring near-perfect accuracy, and enabling seamless scalability for enterprises across BFSI, insurance, telecom, and other demanding industries—proving that smart process design combined with expert execution drives lasting value.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {realWorldImpacts.map((impact, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={200 + index * 100}>
                <motion.div
                  className={`border border-orange-200 rounded-lg p-8 bg-white ${
                    index >= 2 ? "lg:bg-white/95" : ""
                  } h-[200px] flex flex-col`}
                  whileHover={{ 
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    borderColor: "#fdba74", // hover:border-orange-300 equivalent
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{impact.title}</h3>
                  <p className="text-gray-700 flex-grow">{impact.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">BENEFITS OF CHOOSING IMPERATIVE</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
            Imperative offers tailored solutions with a focus on industry-specific expertise, ensuring operational excellence and compliance across various sectors.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={300}>
            <div className="w-full h-1 bg-orange-500 mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-12 gap-10">
            {/* Tall card on the left */}
            <AnimatedSection animation="slideRight" className="col-span-12 md:col-span-4 md:row-span-2">
              <motion.div 
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-auto md:h-[650px]"
                whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">EXPERTISE</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                  We offer specialized teams with industry expertise in BFSI, insurance, and telecom to address unique business needs.
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <motion.img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Business team analyzing operational efficiency metrics"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Two standard cards in the center and right */}
            <AnimatedSection animation="slideUp" delay={200} className="col-span-12 md:col-span-4">
              <motion.div 
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">COMPLIANCE</h3>
                  <p className="text-gray-700 text-lg">
                  We adhere to RBI, IRDAI, and ISO 9001:2015 standards for top-tier regulatory and quality compliance.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Team working with standardized operational processes"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection animation="slideUp" delay={300} className="col-span-12 md:col-span-4">
              <motion.div 
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">VISIBILITY</h3>
                  <p className="text-gray-700 text-lg">
                  Clients can monitor and track performance in real-time through automated dashboards.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Advanced operational technology and systems"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Wide horizontal card at the bottom right */}
            <AnimatedSection animation="slideLeft" delay={400} className="col-span-12 md:col-span-8 md:col-start-5">
              <motion.div 
                className="bg-gray-100 rounded-lg overflow-hidden h-[320px] relative"
                whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-10 relative z-10 md:max-w-[55%]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">SCALABILITY</h3>
                  <p className="text-gray-700 text-lg">
                  Our solutions scale with your business, ensuring consistent quality through SLA-driven governance.
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full">
                  <motion.img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Cross-functional team collaborating on operational projects"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* R&A Trends Section */}
      <section className="py-28 bg-white mt-10">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">BACK-OFFICE TRENDS</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
            The back-office landscape is evolving with innovations that enhance efficiency, security, and compliance across various operations.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={300}>
            <div className="w-full h-1 bg-orange-500 mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* First row - 3 cards */}
            {trends.slice(0, 3).map((trend, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={200 + index * 100}>
                <motion.div 
                  className="relative h-[280px] rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={trend.image || "/placeholder.svg"}
                    alt={trend.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent p-8 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-3">{trend.title}</h3>
                    <p className="text-white/90 text-base">{trend.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Second row - 2 wider cards */}
            {trends.slice(3).map((trend, index) => (
              <AnimatedSection key={index} animation="slideUp" delay={500 + index * 100}>
                <motion.div 
                  className="relative h-[280px] rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={trend.image || "/placeholder.svg"}
                    alt={trend.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent p-8 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-3">{trend.title}</h3>
                    <p className="text-white/90 text-base">{trend.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-gray-50 mt-10">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="slideUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Let's Take Our Conversation Ahead</h2>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={200}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-xl">
              GET IN TOUCH
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Voicesupport;