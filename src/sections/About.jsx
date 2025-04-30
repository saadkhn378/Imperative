import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Calendar, Users, Award, Target, ArrowRight, Lightbulb, Shield } from "lucide-react";

const companyInfo = {
  founded: 2011,
  employees: 250,
  clients: 1000,
  countries: 30,
};

const milestones = [
  {
    year: 2010,
    title: "Company Founded",
    description: "Started with a small team of 5 passionate innovators",
  },
  {
    year: 2013,
    title: "First Major Client",
    description: "Partnered with a Fortune 500 company to deliver enterprise solutions",
  },
  {
    year: 2015,
    title: "International Expansion",
    description: "Opened offices in Europe and Asia to serve global clients",
  },
  {
    year: 2018,
    title: "Technology Innovation Award",
    description: "Recognized for breakthrough solutions in AI and machine learning",
  },
  {
    year: 2020,
    title: "Reached 1000+ Clients",
    description: "Celebrated serving over 1000 clients across 30 countries",
  },
  {
    year: 2023,
    title: "Sustainability Initiative",
    description: "Launched company-wide sustainability program with carbon-neutral operations",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Chief Executive Officer",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "With over 20 years of experience in technology leadership, Alex drives our company vision and strategy.",
  },
  {
    id: 2,
    name: "Samantha Chen",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Samantha leads our technology innovation, bringing expertise in AI, cloud computing, and enterprise architecture.",
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Marcus oversees our global operations, ensuring excellence in service delivery and client satisfaction.",
  },
  {
    id: 4,
    name: "Priya Patel",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
    bio: "Priya drives our brand strategy and market expansion, with a background in digital marketing and brand development.",
  },
];

const values = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly push boundaries to create cutting-edge solutions that address complex challenges.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do, exceeding expectations.",
    icon: Award,
  },
  {
    id: 3,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in all our relationships.",
    icon: Shield,
  },
  {
    id: 4,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve extraordinary results.",
    icon: Users,
  },
];

// Counter animation component
const Counter = ({ value, label, icon: Icon, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      let startTime;
      let animationFrameId;
      
      const startTimestamp = (timestamp) => {
        startTime = timestamp;
        animate(timestamp);
      };
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(progress * value));
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      animationFrameId = requestAnimationFrame(startTimestamp);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, value, duration, controls]);
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className="font-met text-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
    >
      <Icon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
      <div className="font-met flex justify-center items-baseline">
        <div className="font-met text-2xl font-bold">{count}</div>
        {label === "Employees" || label === "Clients" || label === "Countries" ? 
          <span className="text-2xl font-bold">+</span> : null}
      </div>
      <div className="font-met text-sm text-gray-600">{label}</div>
    </motion.div>
  );
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("company");
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      },
    },
  };

  return (
    <section className="font-met py-16 bg-white">
      <div className="font-met container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-met text-3xl font-bold mb-4">About Us</h2>
          <p className="font-met text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses through technology. Learn more
            about our journey, our people, and what drives us forward.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Our team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, we began with a simple mission: to help businesses harness the power of technology to
              achieve their full potential. What started as a small team of passionate innovators has grown into a
              global company serving clients across industries and continents.
            </p>
            <p className="text-gray-700 mb-8">
              Our journey has been defined by continuous innovation, unwavering commitment to excellence, and deep
              partnerships with our clients. Today, we're proud to be at the forefront of digital transformation,
              helping organizations navigate complex challenges and seize new opportunities.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 "
            >
              <Counter value={companyInfo.founded} label="Founded" icon={Calendar} />
              <Counter value={companyInfo.employees} label="Employees" icon={Users} />
              <Counter value={companyInfo.clients} label="Clients" icon={Award} />
              <Counter value={companyInfo.countries} label="Countries" icon={Target} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
