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
const ResearchDevelopment = () => {
  // Data
  const services = [
    {
      title: "Data Analytics",
      description: "Transform raw data into predictive models and strategic dashboards.",
      icon: barChartIcon,
    },
    {
      title: "Market Research",
      description: "Analyze customer behavior, competitor trends, and industry dynamics.",
      icon: lineChartIcon,
    },
    {
      title: "Business Research",
      description: "Evaluate business models, financial outlooks, and new market opportunities.",
      icon: usersIcon,
    },
  ];

  const realWorldImpacts = [
    {
      title: "Faster Time-to-Market",
      description: "Cut go-to-market time by 40% through rapid, agile development cycles.",
    },
    {
      title: "Innovation That Protects",
      description: "Supported 10+ client patent filings with inventive design and technical validation.",
    },
    {
      title: "Smarter Prototyping",
      description: "Improved prototype success rates using simulation-driven design processes.",
    },
    {
      title: "Cost-Efficient Solutions",
      description: "Reduced product development costs by 25% through optimized material selection and design efficiency.",
    },
  ];

  const trends = [
    {
        title: "Video-First Content Strategy",
        description: "Short-form video content continues to dominate engagement metrics across all major platforms.",
        image:
          "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      },
      {
        title: "Social Commerce Integration",
        description: "Seamless shopping experiences embedded directly within social media platforms drive conversions.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "AI-Powered Personalization",
        description: "Machine learning algorithms deliver hyper-personalized content to specific audience segments.",
        image:
          "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Authentic Community Building",
        description: "Brands focus on creating genuine connections through transparent and values-driven content.",
        image:
          "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      },
      {
        title: "Cross-Platform Content Strategy",
        description:
          "Integrated approaches that maintain brand consistency while optimizing for each platform's unique features.",
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      },
  ];

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Social media marketing concept with smartphone and social icons"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <AnimatedSection animation="slideUp">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">RESEARCH AND ANALYSIS (R&A)</h1>
          </AnimatedSection>
          <AnimatedSection animation="slideUp" delay={200}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl">Informed Decisions Powered by Insights</p>
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
                  src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Social media marketing strategy planning"
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
                  In an era defined by rapid change, fierce competition, and ever-evolving consumer expectations,
                  organizations can no longer rely on intuition alone to drive growth. Making informed, timely decisions
                  has become a critical differentiator—and this is where Imperative's Research & Analysis (R&A) services
                  step in.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={300}>
                <p className="text-gray-700 mb-6 text-lg">
                  We help businesses cut through complexity with precision, turning scattered data into strategic
                  intelligence.
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeIn" delay={400}>
                <p className="text-gray-700 mb-10 text-lg">
                  By leveraging advanced analytics, deep domain expertise, and industry benchmarking, our R&A platforms
                  deliver real-time, research-backed insights that enable smarter decisions, reduce risks, and uncover
                  hidden opportunities. Whether it's understanding customer behavior, tracking competitive moves, or
                  evaluating new markets, our insights empower leaders to act with clarity and confidence.
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
              Our comprehensive suite of social media marketing services is designed to elevate your brand's digital
              presence and drive meaningful engagement across all platforms.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={200 + index * 100}>
                <motion.div
                  className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col items-center text-center h-full"
                  whileHover={{
                    y: -8,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
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
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Social media marketing dashboard with analytics"
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
                  Our applied R&D approach is designed to deliver tangible, measurable results that directly contribute
                  to the success of your product. By leveraging agile methodologies, advanced engineering tools, and
                  collaborative frameworks, we drive faster innovation and ensure seamless market entry. Our results
                  speak for themselves, with a proven track record of reducing time-to-market, protecting intellectual
                  property, and enhancing prototype success rates.
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
            Partnering with Imperative means gaining a research-driven edge—where expert teams, smart reporting, and strategic alignment come together to drive smarter decisions.
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Multi-Domain Research Teams</h3>
                  <p className="text-gray-700 mb-6 text-lg">
                  Leverage expertise across various industries to get comprehensive, nuanced insights tailored to your business
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <motion.img
                    src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                    alt="Social media platforms on smartphone"
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.10 }}
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Visual & Interactive Reporting</h3>
                  <p className="text-gray-700 text-lg">
                  Clear, engaging dashboards for easy data interpretation
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Data analytics dashboard"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Fast & Accurate Delivery</h3>
                  <p className="text-gray-700 text-lg">
                  Quick turnaround without compromising precision.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <motion.img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Creative team brainstorming"
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Strategy-Ready Insights</h3>
                  <p className="text-gray-700 text-lg">
                  Our research seamlessly blends into your decision-making processes, turning insights into tangible business actions
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full">
                  <motion.img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Integrated marketing team meeting"
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
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">RESEARCH AND ANALYSIS (R&A) TRENDS</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeIn" delay={200}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
              The future of research lies in blending AI, real-time data, and human-centric storytelling to drive
              smarter, faster decision-making.
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

export default ResearchDevelopment;