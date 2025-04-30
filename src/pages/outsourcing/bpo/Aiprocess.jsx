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
const Aiprocess = () => {
    // Data
    const services = [
        {
            title: "FinBO+",
            description: "Document intelligence & automated onboarding for BFSI.",
            icon: barChartIcon, // Make sure to replace with the correct icon for FinBO+
        },
        {
            title: "DigiBoarding",
            description: "Intelligent form filling, Aadhaar matching, face-match, and video OCR.",
            icon: lineChartIcon, // Replace with appropriate icon for DigiBoarding
        },
        {
            title: "ImperaStack",
            description: "Low-code, AI-driven rule builder for workflows and approvals.",
            icon: usersIcon, // Use the icon suitable for ImperaStack
        },
        {
            title: "AIO",
            description: "Conversational AI chatbot for FAQs, form capture, and feedback.",
            icon: trendingUpIcon, // Use the appropriate icon for AIO
        },
    ];


    const realWorldImpacts = [
        {
            title: "80% Reduction in Manual Onboarding Time",
            description: "Streamlined onboarding for faster and more efficient processes.",
        },
        {
            title: "10x Scale Handling Without Adding Headcount",
            description: "Achieved scalability without increasing resources, improving efficiency.",
        },
        {
            title: "99.9% Accuracy in AI-Based Aadhaar Masking",
            description: "Ensured high accuracy in sensitive data handling with AI-driven masking.",
        },
        {
            title: "60% Faster Query Resolution via Chatbots",
            description: "Accelerated query resolution through AI chatbots, enhancing support speed.",
        },
    ];


    const trends = [
        {
            title: "Document AI & Intelligent OCR",
            description: "Leverages AI to automate document processing, improving accuracy and reducing manual effort.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            title: "Conversational AI Replacing Tier-1 Queries",
            description: "AI-driven chatbots now handle initial customer queries, enabling faster responses and reducing human intervention.",
            image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            title: "AI + RPA Orchestration",
            description: "Combining AI with Robotic Process Automation (RPA) for smarter, automated workflows and task handling.",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        },
        {
            title: "Workflow Heatmap Optimization",
            description: "Uses data-driven insights to optimize workflows, improving operational efficiency and resource allocation.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        },
        {
            title: "Self-Learning Rule Engines",
            description: "AI-powered engines that evolve and improve their decision-making processes over time, reducing the need for manual rule adjustments.",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI-Enabled Process Automation Platforms</h1>
                    </AnimatedSection>
                    <AnimatedSection animation="slideUp" delay={200}>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">We design AI-first automation engines to reduce effort, improve accuracy, and fast-track decision-making.</p>
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
                                    As enterprises evolve, the focus is shifting from basic task automation to more sophisticated, intelligent orchestration. Organizations are increasingly looking for ways to streamline operations and improve decision-making by integrating artificial intelligence into core business processes. At Imperative, we lead the charge by designing cutting-edge AI-driven platforms that transform traditional workflows. Our solutions seamlessly integrate AI into document processing, onboarding, reconciliation, classification, and customer servicing.               </p>
                            </AnimatedSection>
                            <AnimatedSection animation="fadeIn" delay={400}>
                                <p className="text-gray-700 mb-10 text-lg">
                                    These advancements not only reduce manual effort but also enhance accuracy, boost operational efficiency, and significantly lower costs. By embracing AI, businesses can achieve faster, smarter, and more scalable processes that drive long-term success and competitiveness in an increasingly digital world. </p>
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
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">Our Services</h2>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={200}>
                        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 text-lg">
                            Our platforms provide innovative, AI-driven solutions tailored to streamline business processes, enhance operational efficiency, and drive smarter decision-making.            </p>
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
                                    Our AI-powered platforms deliver measurable results that directly impact your business. By streamlining operations and automating key processes, we drive significant efficiency gains and cost savings. With enhanced accuracy and faster decision-making, our solutions ultimately improve the overall customer experience.
                                </p>
                            </AnimatedSection>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
                        {realWorldImpacts.map((impact, index) => (
                            <AnimatedSection key={index} animation="slideUp" delay={200 + index * 100}>
                                <motion.div
                                    className={`border border-orange-200 rounded-lg p-8 bg-white ${index >= 2 ? "lg:bg-white/95" : ""} h-[250px] flex flex-col`}
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Proprietary Platforms</h3>
                                    <p className="text-gray-700 mb-6 text-lg">
                                        Customizable solutions offering complete control for businesses to meet their unique needs.
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Cloud-Native Architecture</h3>
                                    <p className="text-gray-700 text-lg">
                                        Designed for scalability, security, and flexibility, supporting modern business growth.
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Deployments</h3>
                                    <p className="text-gray-700 text-lg">
                                        Successfully implemented across BFSI, healthcare, and insurance industries, delivering tangible results.
                                    </p>
                                </div>
                                <div className="relative h-[160px]">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Human-in-the-Loop Workflows</h3>
                                    <p className="text-gray-700 text-lg">
                                        Combines AI with expert oversight to ensure greater accuracy and efficiency.
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
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5"> Automation Trends</h2>
                    </AnimatedSection>
                    <AnimatedSection animation="fadeIn" delay={200}>
                        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 text-lg">
                            Emerging technologies are driving the future of automation, enhancing efficiency and transforming how businesses operate across industries.            </p>
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

export default Aiprocess;