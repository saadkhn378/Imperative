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
const HealthCare = () => {
  // Data
  const services = [
    {
      title: "Clinical Data Management",
      description: "Secure and organize patient records, lab reports, and prescriptions.",
      icon: barChartIcon,
    },
    {
      title: "Medical Research & Analysis",
      description: "Support epidemiological research, clinical trials, and insights generation.",
      icon: lineChartIcon,
    },
    {
      title: "Pharmaceutical R&D",
      description: "Enable faster drug discovery cycles and structured regulatory submissions.",
      icon: usersIcon,
    },
    {
      title: "Bioinformatics",
      description: "Analyze genomic and patient data using advanced ML tools.",
      icon: trendingUpIcon,
    },
  ];

  const realWorldImpacts = [
    {
      title: "Faster Digitization",
      description: "60% faster patient record digitization through automated workflows.",
    },
    {
      title: "Data Accuracy",
      description: " Achieved 99.7% accuracy in lab data uploads and integration.",
    },
    {
      title: "Research Enablement",
      description: " Adopted in over 5 clinical trials to standardize and streamline data capture.",
    },
    {
      title: " Operational Efficiency",
      description: "Reduced administrative processing time by 40% through integrated system automation.",
    },
  ];

  const trends = [
    {
        title: "AI in Diagnosis Support Systems",
        description: "Enhancing clinical decision-making through AI-based recommendations.",
        image:
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: " Mobile-First Health Data Access",
        description: "Empowering patients and providers with secure, anytime data access.",
        image:
          "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Personalized Medicine",
        description: "Tailored treatment plans based on genetic profiles and individual health data.",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Virtual Reality Therapy",
        description: "Immersive VR experiences for pain management and mental health treatment.",
        image:
          "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80",
      },
      {
        title: "Blockchain Health Records",
        description: "Secure, interoperable patient data management across healthcare providers.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
  ];

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Healthcare professionals in a modern medical facility"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection animation="slideUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">HEALTHCARE</h1>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">Enhancing Operational Efficiency and Patient Experience</p>
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
                  src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Doctor consulting with patient in modern medical office"
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
                Digital transformation in healthcare is reshaping the way care is delivered and managed. It requires seamless coordination between clinical workflows, administrative systems, and regulatory frameworks. At Imperative, we empower hospitals, diagnostic providers, and healthtech platforms with AI-enabled modular solutions. Our services are designed to improve operational agility, ensure data security, and enhance the patient journey. From electronic health records to advanced analytics, we help organizations harness technology for better outcomes. 
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={400}>
                <p className="text-gray-700 mb-10 text-lg">
                With deep domain expertise, our teams deliver customized solutions aligned with industry regulations. Ultimately, our goal is to simplify complex processes and elevate the standard of care.
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
            We deliver end-to-end support across clinical and research functions to drive innovation and efficiency.
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
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Advanced medical technology in a modern hospital setting"
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
                Our solutions have demonstrated significant impact across speed, precision, and research enablement. By automating critical processes, we help healthcare organizations accelerate patient care and research outcomes. Our focus on data accuracy and system integration ensures consistent, reliable performance across operations.
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
            We provide flexible and secure healthcare solutions tailored to institutional and regional needs.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">REGULATORY COMPLIANCE</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                  Fully compliant with HIPAA, ISO 27001 standards.
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <motion.img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Doctor consulting with patient in a compassionate manner"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">SEAMLESS INTEGRATION</h3>
                  <p className="text-gray-700 text-lg">
                  Compatible with HIMS, LIS, PACS, and other core healthcare systems.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                    alt="Medical research and data analysis"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">SCALABLE DEPLOYMENT</h3>
                  <p className="text-gray-700 text-lg">
                  Easily deployable across hospital networks and care centers.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Advanced medical technology and equipment"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">LOCALIZED ACCESS</h3>
                  <p className="text-gray-700 text-lg">
                  Multi-role access with support for regional languages and localization.
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full">
                  <motion.img
                    src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Healthcare team collaborating on patient care"
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">INNOVATION TRENDS IN HEALTHCARE</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
            Healthcare is rapidly adopting intelligent technologies to personalize care and optimize delivery.
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

export default HealthCare;