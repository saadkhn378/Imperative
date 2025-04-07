import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Landmark, ShoppingCart, Film, Lightbulb, HeartPulse, ArrowRight, Check } from "lucide-react";

// Industry data
const industries = [
  {
    id: 1,
    name: "Banking & Finance",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "Transforming financial services with secure, innovative solutions that drive growth and enhance customer experiences.",
    challenges: [
      "Increasing regulatory requirements",
      "Rising customer expectations for digital services",
      "Competition from fintech startups",
      "Data security and privacy concerns",
    ],
    services: [
      "Digital Banking Platforms",
      "Fraud Detection Systems",
      "Payment Processing Solutions",
      "Wealth Management Software",
      "Regulatory Compliance Tools",
    ],
    solutions: [
      "AI-powered risk assessment and fraud detection",
      "Blockchain for secure, transparent transactions",
      "Cloud-based financial management systems",
      "Mobile banking applications with biometric security",
      "Data analytics for personalized customer insights",
    ],
    caseStudy: {
      title: "Global Bank Digital Transformation",
      result: "40% increase in digital engagement and 25% reduction in operational costs",
    },
  },
  {
    id: 2,
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "Empowering retailers with omnichannel solutions that create seamless shopping experiences across physical and digital touchpoints.",
    challenges: [
      "Evolving consumer shopping behaviors",
      "Supply chain disruptions",
      "Increasing competition from online marketplaces",
      "Need for personalized customer experiences",
    ],
    services: [
      "E-commerce Platforms",
      "Inventory Management Systems",
      "Customer Relationship Management",
      "Point of Sale Solutions",
      "Supply Chain Optimization",
    ],
    solutions: [
      "Personalized shopping experiences with AI recommendations",
      "Unified commerce platforms connecting online and offline channels",
      "Real-time inventory tracking and management",
      "Advanced customer analytics and segmentation",
      "Contactless payment and checkout solutions",
    ],
    caseStudy: {
      title: "Omnichannel Retail Implementation",
      result: "65% increase in cross-channel sales and 30% improvement in inventory turnover",
    },
  },
  {
    id: 3,
    name: "Media & Entertainment",
    icon: Film,
    image:
      "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "Creating immersive digital experiences that captivate audiences and help media companies thrive in the streaming era.",
    challenges: [
      "Changing content consumption patterns",
      "Competition for viewer attention",
      "Content piracy and rights management",
      "Monetization of digital content",
    ],
    services: [
      "Content Management Systems",
      "Streaming Platforms",
      "Digital Rights Management",
      "Audience Analytics",
      "Interactive Media Solutions",
    ],
    solutions: [
      "High-performance content delivery networks",
      "AI-driven content recommendations and personalization",
      "Multi-platform distribution systems",
      "Real-time audience engagement tools",
      "Advanced monetization and subscription management",
    ],
    caseStudy: {
      title: "Streaming Platform Optimization",
      result: "50% reduction in buffering and 35% increase in viewer retention",
    },
  },
  {
    id: 4,
    name: "Education",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "Revolutionizing learning with innovative educational technology that makes quality education more accessible and engaging.",
    challenges: [
      "Remote and hybrid learning requirements",
      "Personalization of educational content",
      "Student engagement and retention",
      "Assessment and progress tracking",
    ],
    services: [
      "Learning Management Systems",
      "Virtual Classroom Platforms",
      "Student Information Systems",
      "Assessment and Testing Tools",
      "Educational Content Development",
    ],
    solutions: [
      "Adaptive learning technologies that adjust to student needs",
      "AI-powered tutoring and learning assistance",
      "Gamified learning experiences to boost engagement",
      "Data-driven student performance tracking and insights",
      "Collaborative learning environments for remote education",
    ],
    caseStudy: {
      title: "University Digital Learning Transformation",
      result: "45% improvement in student engagement and 28% better learning outcomes",
    },
  },
  {
    id: 5,
    name: "Healthcare",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description:
      "Advancing patient care through innovative healthcare technology that improves outcomes and enhances the provider experience.",
    challenges: [
      "Rising healthcare costs",
      "Patient data security and interoperability",
      "Remote patient monitoring needs",
      "Administrative efficiency",
    ],
    services: [
      "Electronic Health Records",
      "Telemedicine Platforms",
      "Medical Imaging Solutions",
      "Healthcare Analytics",
      "Patient Engagement Systems",
    ],
    solutions: [
      "AI-powered diagnostic and decision support tools",
      "Remote patient monitoring with IoT integration",
      "Predictive analytics for preventive care",
      "Secure health data management and exchange",
      "Integrated care coordination platforms",
    ],
    caseStudy: {
      title: "Hospital System Digital Transformation",
      result: "32% reduction in administrative costs and 28% improvement in patient satisfaction",
    },
  },
];

const IndustriesWeServe = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id);
  const [activeTab, setActiveTab] = useState("overview");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentIndustry = industries.find((industry) => industry.id === activeIndustry);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (!isClient) return null;

  return (
    <section className="font-met py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide specialized solutions across various industries, helping businesses transform and thrive in the
            digital era.
          </p>
        </motion.div>

        {/* Industry Icons Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = industry.id === activeIndustry;

            return (
              <motion.div
                key={industry.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`cursor-pointer transition-all duration-300 ${
                  isActive ? "bg-orange-600 text-white shadow-lg" : "bg-white text-gray-700 shadow-md hover:shadow-lg"
                }`}
                onClick={() => {
                  setActiveIndustry(industry.id);
                  setActiveTab("overview");
                }}
              >
                <div className="flex flex-col items-center p-4 rounded-lg w-[120px] h-[120px] justify-center">
                  <div className={`p-3 rounded-full mb-2 ${isActive ? "bg-white/20" : "bg-blue-600/10"}`}>
                    <Icon className={`h-8 w-8 ${isActive ? "text-white" : "text-orange-600"}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-center">{industry.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industry Content */}
        <AnimatePresence mode="wait">
          {currentIndustry && (
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Hero Banner */}
              <div className="relative h-64 md:h-80">
                <img
                  src={currentIndustry.image || "/placeholder.svg"}
                  alt={currentIndustry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-3xl font-bold mb-2"
                    >
                      {currentIndustry.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-white/90 max-w-3xl"
                    >
                      {currentIndustry.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b">
                <div className="flex overflow-x-auto hide-scrollbar">
                  {["overview", "services", "solutions", "case study"].map((tab) => (
                    <button
                      key={tab}
                      className={`px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab
                          ? "border-b-2 border-orange-600 text-orange-600"
                          : "text-gray-600 hover:text-orange-600"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-semibold mb-4">Industry Challenges</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {currentIndustry.challenges.map((challenge, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 mt-1 p-1 bg-blue-600/10 rounded-full">
                              <Check className="h-4 w-4 text-orange-600" />
                            </div>
                            <p className="ml-3 text-gray-700">{challenge}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <h4 className="text-xl font-semibold mb-4">How We Help</h4>
                        <p className="text-gray-700 mb-4">
                          Our comprehensive approach to {currentIndustry.name.toLowerCase()} combines industry expertise
                          with cutting-edge technology to address your most pressing challenges. We work closely with
                          you to understand your unique needs and develop tailored solutions that drive measurable
                          results.
                        </p>
                        <button className="flex items-center text-orange-600 font-medium hover:underline">
                          Learn more about our approach
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "services" && (
                    <motion.div
                      key="services"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-semibold mb-6">Our {currentIndustry.name} Services</h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentIndustry.services.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all hover:shadow-lg"
                          >
                            <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
                              <currentIndustry.icon className="h-6 w-6 text-orange-600" />
                            </div>
                            <h5 className="font-semibold mb-2">{service}</h5>
                            <p className="text-gray-600 text-sm">
                              Comprehensive {service.toLowerCase()} tailored for the {currentIndustry.name} industry.
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "solutions" && (
                    <motion.div
                      key="solutions"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-xl font-semibold mb-6">Our {currentIndustry.name} Solutions</h4>

                      <div className="space-y-6">
                        {currentIndustry.solutions.map((solution, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm"
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-blue-600/10 flex items-center justify-center">
                                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                                </div>
                              </div>
                              <div className="ml-4">
                                <h5 className="font-semibold mb-2">{solution}</h5>
                                <p className="text-gray-600">
                                  Our {solution.split(" ")[0].toLowerCase()} solution helps{" "}
                                  {currentIndustry.name.toLowerCase()} businesses overcome challenges and achieve their
                                  goals through innovative technology.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "case study" && (
                    <motion.div
                      key="case-study"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-50 rounded-lg p-8 border border-gray-100"
                    >
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mr-4">
                          <currentIndustry.icon className="h-6 w-6" />
                        </div>
                        <h4 className="text-xl font-bold">Case Study: {currentIndustry.caseStudy.title}</h4>
                      </div>

                      <div className="mb-8">
                        <p className="text-gray-700 mb-6">
                          We partnered with a leading {currentIndustry.name.toLowerCase()} organization to transform
                          their digital capabilities and address key business challenges. Our comprehensive approach
                          included implementing custom solutions tailored to their specific needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h5 className="font-semibold mb-2">Challenge</h5>
                            <p className="text-gray-600">
                              The client faced increasing competition, legacy system limitations, and changing customer
                              expectations in a rapidly evolving market.
                            </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h5 className="font-semibold mb-2">Solution</h5>
                            <p className="text-gray-600">
                              We implemented a comprehensive digital transformation strategy, modernizing systems and
                              introducing innovative technologies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-600/5 p-6 rounded-lg border border-blue-600/20">
                        <h5 className="font-semibold mb-4 text-blue-600">Results</h5>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{currentIndustry.caseStudy.result}</div>
                        <p className="text-gray-700">
                          Our solution delivered significant improvements in operational efficiency, customer
                          satisfaction, and business growth.
                        </p>
                      </div>

                      <div className="mt-8 text-center">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                          Download Full Case Study
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

