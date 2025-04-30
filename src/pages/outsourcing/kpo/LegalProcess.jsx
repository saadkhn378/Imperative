import React from "react";
import { motion } from "framer-motion";
// Import icons from local assets
import barChartIcon from "../../../assets/icons/data-icon.svg";
import lineChartIcon from "../../../assets/icons/chart-icon.svg";
import usersIcon from "../../../assets/icons/businessresearch-icon.svg";
import trendingUpIcon from "../../../assets/icons/comintelligence-icon.svg";

// Button Component
const Button = ({ children, className, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium focus:outline-none";
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-current"
      : "text-white";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      {children}
    </motion.button>
  );
};

// Animated Section Component using Framer Motion
const AnimatedSection = ({
  children,
  className = "",
  animation = "fadeIn",
  delay = 0,
}) => {
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
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}>
      {children}
    </motion.div>
  );
};

// Main Component
const LegalProcess = () => {
  // Data
  const services = [
    {
      title: "Legal Research",
      description:
        "Analyze case law, statutes, and regulations with supporting briefs.",
      icon: barChartIcon,
    },
    {
      title: "Litigation Support",
      description:
        "Draft motions, organize e-discovery, and summarize depositions.",
      icon: lineChartIcon,
    },
    {
      title: "Contract Management",
      description:
        "Drafting, reviewing, and organizing contracts with risk assessment and clause standardization.",
      icon: usersIcon,
    },
  ];

  const realWorldImpacts = [
    {
      title: "Workload Efficiency",
      description:
        "Achieved a 50% reduction in routine legal tasks, freeing up valuable attorney time for core matters.",
    },
    {
      title: "Research Accuracy",
      description:
        "Delivered legal research memos with 98% accuracy, ensuring dependable insights for case strategies.",
    },
    {
      title: "Faster Turnaround",
      description:
        "Enabled litigation teams to prepare cases 20% faster through streamlined support and documentation.",
    },
    {
      title: "Cost Savings",
      description:
        " Reduced operational costs by optimizing workflows and leveraging a global delivery model.",
    },
  ];

  const trends = [
    {
      title: "Legal Tech Integration",
      description:
        "Advanced software solutions streamlining document review and case management processes.",
      image:
        "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Alternative Fee Arrangements",
      description:
        "Innovative billing models moving beyond traditional hourly rates to value-based pricing.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Remote Legal Services",
      description:
        "Virtual consultations and proceedings expanding access to legal expertise regardless of location.",
      image:
        "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "AI-Powered Legal Research",
      description:
        "Machine learning algorithms enhancing the speed and accuracy of legal research and analysis.",
      image:
        "https://images.unsplash.com/photo-1607703703674-df96af81dffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Legal Process Outsourcing",
      description:
        "Strategic delegation of routine legal tasks to specialized service providers for efficiency.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
  ];

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Legal professionals in a modern law office"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection animation="slideUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              LEGAL PROCESS OUTSOURCING (LPO)
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
              Scalable Legal Support with Precision and Speed
            </p>
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
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Legal professionals discussing case strategy in a conference room"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection animation="slideLeft">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    Industry Overview
                  </h2>
                  <div className="h-1 bg-orange-500 w-[230px] mb-6"></div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={200}>
                <p className="text-gray-700 mb-6 text-lg">
                  In today’s fast-paced legal environment, law firms and
                  corporate legal departments face increasing pressure to
                  deliver results quickly and cost-effectively. Legal teams are
                  expected to operate with greater efficiency, often with
                  limited resources. Imperative’s Legal Process Outsourcing
                  (LPO) services offer a scalable solution to meet these
                  demands. We specialize in handling labor-intensive tasks such
                  as legal research, litigation preparation, and compliance
                  support.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={400}>
                <p className="text-gray-700 mb-10 text-lg">
                  By outsourcing these functions, your in-house team can
                  concentrate on high-level legal strategy and client service.
                  Our expert legal analysts and paralegals ensure quality and
                  accuracy in every deliverable. With Imperative, you gain a
                  trusted partner committed to precision, speed, and value.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="slideUp" delay={500}>
                <div className="flex flex-col sm:flex-row gap-5">
                  <Button className="bg-orange-500 hover:bg-orange-600 transition-all text-lg py-3 px-6">
                    Get a Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 transition-all text-lg py-3 px-6">
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
              What We Offer
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
              We offer specialized legal support services that enhance
              efficiency, accuracy, and scalability for law firms and corporate
              legal teams.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="scaleUp"
                delay={200 + index * 100}>
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center text-center h-full"
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}>
                  <div className="w-24 h-24 flex items-center justify-center mb-6">
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      transition={{ duration: 0.3 }}>
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        className="w-16 h-16"
                      />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
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
            className="absolute right-0 top-12 w-[45%] h-[550px] z-10 hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Legal documents and scales of justice in a professional setting"
              className="w-full h-full object-cover rounded-l-lg shadow-xl"
            />
          </AnimatedSection>

          <div className="mb-16 relative z-20">
            <div className="max-w-xl">
              <AnimatedSection animation="slideUp">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                  Real-World Impact
                </h2>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={200}>
                <p className="text-gray-700 text-lg">
                  Our LPO services have delivered measurable improvements in
                  efficiency, accuracy, and turnaround time for legal teams. By
                  streamlining complex legal processes, we empower firms to
                  focus on high-value strategic work. Our expert team handles
                  research, documentation, and compliance with precision and
                  speed. This ensures better resource allocation, reduced
                  operational burden, and improved legal outcomes.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
            {realWorldImpacts.map((impact, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={200 + index * 100}>
                <motion.div
                  className={`border border-orange-200 rounded-lg p-8 bg-white ${
                    index >= 2 ? "lg:bg-white/95" : ""
                  } h-[200px] flex flex-col`}
                  whileHover={{
                    boxShadow:
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    borderColor: "#fdba74", // hover:border-orange-300 equivalent
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {impact.title}
                  </h3>
                  <p className="text-gray-700 flex-grow">
                    {impact.description}
                  </p>
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
              BENEFITS OF CHOOSING IMPERATIVE
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
            We offer a unique combination of expertise, security, and global efficiency to help your legal team excel.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={300}>
            <div className="w-full h-1 bg-orange-500 mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-12 gap-10">
            {/* Tall card on the left */}
            <AnimatedSection
              animation="slideRight"
              className="col-span-12 md:col-span-4 md:row-span-2">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-auto md:h-[650px]"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.3 }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  EXPERT LEGAL TEAM
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                  Experienced legal analysts and certified paralegals providing high-quality support.
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <motion.img
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Legal professional consulting with client in a compassionate manner"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Two standard cards in the center and right */}
            <AnimatedSection
              animation="slideUp"
              delay={200}
              className="col-span-12 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.3 }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  DATA SECURITY
                  </h3>
                  <p className="text-gray-700 text-lg">
                  ISO-compliant data handling protocols ensuring the highest level of confidentiality.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Legal research and case analysis"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection
              animation="slideUp"
              delay={300}
              className="col-span-12 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.3 }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  GLOBAL DELIVERY
                  </h3>
                  <p className="text-gray-700 text-lg">
                  Cost-effective solutions delivered through a scalable global service model.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Advanced legal technology and digital tools"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Wide horizontal card at the bottom right */}
            <AnimatedSection
              animation="slideLeft"
              delay={400}
              className="col-span-12 md:col-span-8 md:col-start-5">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden h-[320px] relative"
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
                transition={{ duration: 0.3 }}>
                <div className="p-10 relative z-10 md:max-w-[55%]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  ROUND-THE-CLOCK SUPPORT
                  </h3>
                  <p className="text-gray-700 text-lg">
                  24/7 availability for time-sensitive legal research and support.
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full">
                  <motion.img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Legal team collaborating on case strategy"
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
            EMERGING TRENDS
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
            The legal industry is evolving with cutting-edge technologies that enhance efficiency and decision-making.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={300}>
            <div className="w-full h-1 bg-orange-500 mx-auto mb-16"></div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* First row - 3 cards */}
            {trends.slice(0, 3).map((trend, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={200 + index * 100}>
                <motion.div
                  className="relative h-[280px] rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <motion.img
                    src={trend.image || "/placeholder.svg"}
                    alt={trend.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent p-8 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-white/90 text-base">
                      {trend.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Second row - 2 wider cards */}
            {trends.slice(3).map((trend, index) => (
              <AnimatedSection
                key={index}
                animation="slideUp"
                delay={500 + index * 100}>
                <motion.div
                  className="relative h-[280px] rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <motion.img
                    src={trend.image || "/placeholder.svg"}
                    alt={trend.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent p-8 flex flex-col justify-start">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-white/90 text-base">
                      {trend.description}
                    </p>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              Let's Take Our Conversation Ahead
            </h2>
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

export default LegalProcess;
