"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Import icons from assets/icon
import BankIcon from "../../assets/icons/BFSI.svg";
import TruckIcon from "../../assets/icons/logistics-icon.svg";
import CogIcon from "../../assets/icons/data-icon.svg";

// React Functional Component Export (rfce)
function CyberAssurence() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("data-centre");

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Image data for each tab
  const tabImages = {
    "threat-detection": {
      main: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      title: "Threat Detection & Response",
      subtitle: "Real-time monitoring and rapid incident response",
      secondaryTitle: "Advanced Threat Intelligence",
      secondaryDesc: "Proactive identification of emerging threats before they impact your business.",
      small1Title: "24/7 Security Operations",
      small1Desc: "Round-the-clock monitoring by certified security analysts.",
      small2Title: "Automated Response",
      small2Desc: "AI-powered containment and remediation of security incidents.",
    },
    "vulnerability-management": {
      main: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=2070&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1614064642639-e398c0192c8d?q=80&w=2070&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      title: "Vulnerability Management",
      subtitle: "Continuous assessment and remediation of security weaknesses",
      secondaryTitle: "Penetration Testing",
      secondaryDesc: "Simulated attacks to identify and address security gaps before hackers do.",
      small1Title: "Compliance Scanning",
      small1Desc: "Automated checks against industry standards and regulatory requirements.",
      small2Title: "Risk Prioritization",
      small2Desc: "Focus resources on the vulnerabilities that pose the greatest risk.",
    },
    "security-governance": {
      main: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      secondary: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      small1: "https://images.unsplash.com/photo-1614064642086-085d204d86b4?q=80&w=2070&auto=format&fit=crop",
      small2: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      title: "Security Governance",
      subtitle: "Comprehensive frameworks for managing cybersecurity risk",
      secondaryTitle: "Policy Development",
      secondaryDesc: "Custom security policies aligned with your business objectives and compliance needs.",
      small1Title: "Security Awareness",
      small1Desc: "Training programs to transform employees into your first line of defense.",
      small2Title: "Compliance Management",
      small2Desc: "Streamlined processes for meeting regulatory requirements and industry standards.",
    },
  };

  // Custom Tab component
  const Tabs = ({
    defaultValue,
    className,
    value,
    onValueChange,
    children,
  }) => {
    return <div className={className}>{children}</div>;
  };

  const TabsList = ({ className, children }) => {
    return <div className={className}>{children}</div>;
  };

  const TabsTrigger = ({ value, className, children }) => {
    const isActive = value === activeTab;
    const activeClass = isActive
      ? "text-orange-500 border-b-2 border-orange-500"
      : "";

    return (
      <button
        className={`${className} ${activeClass}`}
        onClick={() => setActiveTab(value)}>
        {children}
      </button>
    );
  };

  return (
    <main className="font-met flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
          alt="Cyber security visualization"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          style={{ objectFit: "cover" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              POWERING TOMORROW WITH SMART INFRASTRUCTURE TODAY
              </h1>
              <p className="text-gray-200 max-w-[600px]">
              From banking automation to public sector innovation, our smart infra solutions enhance productivity, visibility, and control.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}>
                <button className="mt-4 bg-transparent text-white border border-white hover:bg-white hover:text-black px-4 py-2 rounded">
                  KNOW MORE
                </button>
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden md:flex justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trends Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 relative">
              EMERGING INDUSTRY TRENDS IN SMART INFRA
              <motion.span
                className="block h-1 w-24 bg-orange-500 mx-auto mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {/* Top Row - Three-column grid for infrastructure innovation */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* AI-Led Surveillance */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                    alt="AI surveillance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=AI+Surveillance"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">AI-Led Surveillance</h3>
                  <p className="text-sm text-gray-200">
                    Public safety systems are adopting facial recognition and behavior analytics at scale.
                  </p>
                </div>
              </motion.div>

              {/* Cloud-First Infra */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
                    alt="Cloud infrastructure"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=Cloud+Infrastructure"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Cloud-First Infra</h3>
                  <p className="text-sm text-gray-200">
                    Government and enterprise ERPs are moving to secure, scalable cloud platforms.
                  </p>
                </div>
              </motion.div>

              {/* Drone Intelligence */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop"
                    alt="Drone technology"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=Drone+Technology"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Drone Intelligence</h3>
                  <p className="text-sm text-gray-200">
                    Logistics, agriculture, and site profiles are leveraging drone data for decision-making.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row - Two horizontally stretched cards for foundational platforms and energy efficiency */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Sustainable Infra */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                    alt="Sustainable infrastructure"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=Sustainable+Infrastructure"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Sustainable Infra</h3>
                  <p className="text-sm text-gray-200">
                    Solar-powered smart hubs and green data centers are leading energy-efficient transformation.
                  </p>
                </div>
              </motion.div>

              {/* Platform-as-a-Service */}
              <motion.div
                className="relative overflow-hidden rounded-lg h-64"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 w-full h-full bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop"
                    alt="PaaS technology"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/800x600?text=PaaS+Technology"
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-start">
                  <h3 className="font-bold text-lg mb-2 text-white">Platform-as-a-Service (PaaS)</h3>
                  <p className="text-sm text-gray-200">
                    ERP, CRM, and CRM tools are moving to low-maintenance subscription models.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cyber Shield Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold">OUR CYBER SHIELD</h2>
            <p className="text-gray-600 mt-2">
              Comprehensive cybersecurity services designed to protect, detect,
              and respond—across every layer of your digital ecosystem.
            </p>
            <motion.div
              className="h-1 w-full max-w-3xl mx-auto bg-orange-500 mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}></motion.div>
          </motion.div>

          {/* First Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            {/* End Point Security */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M45 15H15V45H45V15Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path d="M15 25H45" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M25 25V45" stroke="#FF6B00" strokeWidth="2" />
                    <path
                      d="M20 20H22"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M27 20H29"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34 20H36"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">End Point Security</h3>
                <p className="text-gray-600">
                  Protect every device and user endpoint from malware,
                  ransomware, and unauthorized access.
                </p>
              </div>
            </motion.div>

            {/* Email Security */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30 35C35.5228 35 40 30.5228 40 25C40 19.4772 35.5228 15 30 15C24.4772 15 20 19.4772 20 25C20 30.5228 24.4772 35 30 35Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 35V45"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M25 40H35"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40 20C42.5 20 45 22.5 45 25C45 27.5 42.5 30 40 30"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 20C17.5 20 15 22.5 15 25C15 27.5 17.5 30 20 30"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Email Security</h3>
                <p className="text-gray-600">
                  Block phishing, spoofing, and spam threats at the source with
                  AI-powered mail filters.
                </p>
              </div>
            </motion.div>

            {/* Web Security */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path d="M30 25V15" stroke="#FF6B00" strokeWidth="2" />
                    <path
                      d="M39.3 39.3L35 35"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Security</h3>
                <p className="text-gray-600">
                  Ensure secure browsing, block malicious URLs, and filter
                  unauthorized web access across users.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            {/* Vulnerability Assessment */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M33 30C33 28.3431 31.6569 27 30 27C28.3431 27 27 28.3431 27 30C27 31.6569 28.3431 33 30 33"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 33V37"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M40 22V17C40 15.8954 39.1046 15 38 15H22C20.8954 15 20 15.8954 20 17V43C20 44.1046 20.8954 45 22 45H38C39.1046 45 40 44.1046 40 43V38"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M40 30C42.7614 30 45 27.7614 45 25C45 22.2386 42.7614 20 40 20C37.2386 20 35 22.2386 35 25C35 27.7614 37.2386 30 40 30Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path d="M40 30V40" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M35 35H45" stroke="#FF6B00" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Vulnerability Assessment (VA)
                </h3>
                <p className="text-gray-600">
                  Identify and classify weaknesses in your IT infrastructure
                  with periodic scanning and reports.
                </p>
              </div>
            </motion.div>

            {/* Penetration Testing */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="15"
                      y="25"
                      width="15"
                      height="20"
                      rx="2"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M22.5 32V38"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22.5 25V15"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 30H39C40.1046 30 41 30.8954 41 32V43C41 44.1046 40.1046 45 39 45H36"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M30 25L36 25L36 45L30 45"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Penetration Testing (PT)
                </h3>
                <p className="text-gray-600">
                  Simulate real-world attacks to evaluate how resilient your
                  apps and systems truly are.
                </p>
              </div>
            </motion.div>

            {/* Network Operation Center */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 15H45V40H15V15Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path d="M22 45H38" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M30 40V45" stroke="#FF6B00" strokeWidth="2" />
                    <path
                      d="M22 30L30 25L38 30"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Network Operation Center
                </h3>
                <p className="text-gray-600">
                  Monitor and manage your network 24/7 with performance,
                  traffic, and anomaly detection dashboards.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Third Row */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            {/* Security Operation Center */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M35 25C35 22.2386 32.7614 20 30 20C27.2386 20 25 22.2386 25 25C25 27.7614 27.2386 30 30 30C32.7614 30 35 27.7614 35 25Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path d="M15 25H25" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M35 25H45" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M15 35H45" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M30 30V45" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M20 45H40" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M30 15V20" stroke="#FF6B00" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Security Operation Center
                </h3>
                <p className="text-gray-600">
                  Detect, investigate, and respond to threats in real time with
                  centralized visibility and alerts.
                </p>
              </div>
            </motion.div>

            {/* Operational Technology Security */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 20V25" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M30 35V40" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M40 30H35" stroke="#FF6B00" strokeWidth="2" />
                    <path d="M25 30H20" stroke="#FF6B00" strokeWidth="2" />
                    <path
                      d="M37 23L33.5 26.5"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M26.5 33.5L23 37"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M37 37L33.5 33.5"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M26.5 26.5L23 23"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M45 15H15V45H45V15Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M30 35C32.7614 35 35 32.7614 35 30C35 27.2386 32.7614 25 30 25C27.2386 25 25 27.2386 25 30C25 32.7614 27.2386 35 30 35Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Operational Technology Security
                </h3>
                <p className="text-gray-600">
                  Protect SCADA, ICS, and industrial environments from cyber
                  risks targeting OT systems.
                </p>
              </div>
            </motion.div>

            {/* Red Teaming */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}>
              <div className="flex flex-col items-start">
                <div className="text-orange-500 mb-4">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M30 15V20"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M42.4264 17.5736L38.8388 21.1612"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17.5736 17.5736L21.1612 21.1612"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 30H20"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M45 30H40"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M35 30C35 27.5 32.5 25 30 25C27.5 25 25 27.5 25 30C25 32.5 27.5 35 30 35C32.5 35 35 32.5 35 30Z"
                      stroke="#FF6B00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Red Teaming</h3>
                <p className="text-gray-600">
                  Challenge your cyber defense with advanced adversary
                  simulations by ethical hackers.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Managed SoC Services */}
          <motion.div
            className="rounded-lg relative overflow-hidden mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="absolute inset-0 w-full h-full">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/421edcaaaae1f0c8bd511f108c719cda60c9e383.jpg-TwzcvP7dYlQmLf8yGz6U6NOz7gVle2.jpeg"
                alt="Abstract wave background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row">
              {/* Left side with title and description */}
              <div className="bg-white p-8 md:w-1/4">
                <h3 className="text-xl font-bold text-orange-500 border-b border-orange-500 pb-2 inline-block">
                  Managed SoC Services
                </h3>
                <p className="text-gray-700 mt-4">
                  Let our experts monitor, manage, and respond to security
                  incidents—so you don't have to.
                </p>
              </div>

              {/* Right side with 6 services in 2x3 grid */}
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    24x7x365 threat monitoring
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    Incident response & remediation
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    Log correlation & SIEM integration
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    Ticketing & reporting dashboards
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    Monthly audit & compliance support
                  </p>
                </div>
                <div className="flex items-start">
                  <p className="text-gray-800 font-medium">
                    Real-Time Threat Hunting
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28 bg-gray-50 mt-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
              BENEFITS OF CHOOSING IMPERATIVE IT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
              Proactive protection, expert insights, and security that grows
              with your business.
            </p>
          </motion.div>

          <motion.div
            className="w-full h-1 bg-orange-500 mx-auto mb-16 max-w-3xl"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Tall card on the left */}
            <div className="col-span-1 md:col-span-4 md:row-span-2">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-auto md:h-[650px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    ENTERPRISE-GRADE SECURITY
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Fully compliant with ISO 27001, SOC 2, and industry-specific
                    security standards.
                  </p>
                </div>
                <div className="relative h-[320px] md:flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
                    alt="Network security visualization"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Two standard cards in the center and right */}
            <div className="col-span-1 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    SEAMLESS INTEGRATION
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Compatible with all major ERP, CRM, and enterprise
                    management systems.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                    alt="Data center integration"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="col-span-1 md:col-span-4">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden flex flex-col h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}>
                <div className="p-10 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    SCALABLE DEPLOYMENT
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Easily deployable across multiple locations and enterprise
                    environments.
                  </p>
                </div>
                <div className="relative h-[160px]">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                    alt="Server deployment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Wide horizontal card at the bottom right */}
            <div className="col-span-1 md:col-span-8 md:col-start-5">
              <motion.div
                className="bg-gray-100 rounded-lg overflow-hidden h-[320px] relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  y: -5,
                }}>
                <div className="p-10 relative z-10 md:max-w-[55%]">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    24/7 EXPERT SUPPORT
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Round-the-clock technical assistance with dedicated account
                    managers for enterprise clients.
                  </p>
                </div>
                <div className="absolute right-0 top-0 w-[45%] h-full hidden md:block">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="IT support team"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold mb-12 border-b border-orange-500 pb-4 inline-block">
              CLIENT USE CASES
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>
            {/* Public Sector Bank */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}>
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}>
                  <img
                    src={BankIcon || "/placeholder.svg"}
                    alt="Bank Icon"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h3 className="text-xl font-bold">Public Sector Bank</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}>
                <p className="font-medium text-gray-800 mb-2">
                  CBS Implementation & AMC
                </p>
                <p className="text-gray-600">
                  50% faster onboarding, 2X system uptime
                </p>
              </motion.div>
            </motion.div>

            {/* Logistics Startup */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}>
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}>
                  <img
                    src={TruckIcon || "/placeholder.svg"}
                    alt="Truck Icon"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h3 className="text-xl font-bold">Logistics Startup</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}>
                <p className="font-medium text-gray-800 mb-2">
                  Drone + IoT for Inventory
                </p>
                <p className="text-gray-600">
                  Real-time location, 20% increase in delivery accuracy
                </p>
              </motion.div>
            </motion.div>

            {/* Smart City Program */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg h-full"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}>
              <div className="flex items-center mb-6">
                <motion.div
                  className="text-orange-500 mr-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}>
                  <img
                    src={CogIcon || "/placeholder.svg"}
                    alt="Cog Icon"
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h3 className="text-xl font-bold">Smart City Program</h3>
              </div>
              <motion.div
                className="border-t border-gray-200 pt-4"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}>
                <p className="font-medium text-gray-800 mb-2">
                  Surveillance Command Centre
                </p>
                <p className="text-gray-600">
                  24/7 AI-driven threat alerts and zone tracking
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default CyberAssurence;
