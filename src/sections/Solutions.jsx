import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Cpu } from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Consulting",
    icon: Lightbulb,
    description: "Strategic guidance to transform your business and achieve your goals",
    details: [
      "Business strategy development",
      "Digital transformation roadmaps",
      "Process optimization",
      "Market analysis and research",
      "Technology assessment and recommendations",
    ],
  },
  {
    id: 2,
    title: "Outsourcing",
    icon: Users,
    description: "Expert teams to handle your operations while you focus on core business",
    details: [
      "Dedicated development teams",
      "IT support and maintenance",
      "Business process outsourcing",
      "Quality assurance and testing",
      "Customer support services",
    ],
  },
  {
    id: 3,
    title: "Technology",
    icon: Cpu,
    description: "Cutting-edge solutions to power your digital transformation journey",
    details: [
      "Custom software development",
      "Cloud migration and services",
      "AI and machine learning solutions",
      "Mobile app development",
      "IoT and embedded systems",
    ],
  },
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="font-met py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="text-3xl font-bold mb-4 text-orange-600"
          >
            Empowering You With Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }} 
            className="text-slate-700 max-w-2xl mx-auto"
          >
            We offer comprehensive solutions designed to help your business thrive in the digital age.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Solution Tabs */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              {solutions.map(({ id, title, icon: Icon, description }) => {
                const isActive = activeTab === id;
                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: id * 0.1 }}
                    viewport={{ once: true }}
                    className={`cursor-pointer p-6 rounded-lg transition-all ${
                      isActive ? "bg-orange-500 text-white shadow-lg" : "bg-gray-100 hover:bg-orange-200"
                    }`}
                    onClick={() => setActiveTab(id)}
                  >
                    <div className="flex items-center">
                      <div className={`p-3 rounded-full mr-4 ${isActive ? "bg-white/20" : "bg-orange-200"}`}>
                        <Icon className={`h-6 w-6 ${isActive ? "text-white" : "text-orange-600"}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className={`text-sm mt-1 ${isActive ? "text-white/80" : "text-slate-700"}`}>{description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Solution Details */}
          <div className="lg:w-2/3">
            {solutions.map(({ id, title, icon: Icon, details }) => {
              if (activeTab !== id) return null;

              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg p-8 shadow"
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      className="p-4 bg-orange-200 rounded-full mr-4"
                    >
                      <Icon className="h-10 w-10 text-orange-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-orange-600">{title} Solutions</h3>
                  </div>

                  <p className="text-slate-700 mb-6 text-lg">
                    Our {title.toLowerCase()} solutions are designed to help businesses of all sizes achieve their goals through innovative approaches and proven methodologies.
                  </p>

                  <h4 className="text-xl font-semibold mb-4 text-orange-600">What We Offer:</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="w-4 h-4 rounded-full bg-orange-500 mt-1"></div>
                        <p className="ml-3 text-slate-700">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
