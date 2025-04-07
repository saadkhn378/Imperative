import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Users, TrendingUp, Award, Coffee, Zap } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    id: 1,
    title: "Collaborative Culture",
    description: "Work in a supportive environment where teamwork and innovation thrive.",
    icon: Users,
  },
  {
    id: 2,
    title: "Growth Opportunities",
    description: "Clear career paths with continuous learning and development programs.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and policies that respect your personal time.",
    icon: Heart,
  },
  {
    id: 4,
    title: "Recognition & Rewards",
    description: "Competitive compensation with performance bonuses and recognition programs.",
    icon: Award,
  },
  {
    id: 5,
    title: "Modern Workspace",
    description: "State-of-the-art facilities designed for comfort, collaboration, and productivity.",
    icon: Coffee,
  },
  {
    id: 6,
    title: "Cutting-Edge Projects",
    description: "Work on innovative solutions using the latest technologies and methodologies.",
    icon: Zap,
  },
];

function WhyJoinUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".benefit-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".benefits-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-teal-500/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Join Our <span className="text-orange-600">Team</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              At Imperative, we're building a team of exceptional individuals who are passionate about technology and
              innovation. We believe in creating an environment where talent thrives, ideas flourish, and careers
              accelerate.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Values</h3>
              <p className="text-gray-600">
                We're guided by our commitment to excellence, integrity, and innovation. We value diversity of thought,
                collaborative problem-solving, and a customer-first mindset. If you share these values and are looking
                for a place where your work makes a meaningful impact, we'd love to meet you.
              </p>
            </div>

            <div className="flex items-center">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center border-2 border-white">
                  <span className="text-orange-600 font-bold">J</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center border-2 border-white">
                  <span className="text-teal-500 font-bold">S</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                  <span className="text-blue-500 font-bold">A</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white">
                  <span className="text-purple-500 font-bold">M</span>
                </div>
              </div>
              <p className="ml-4 text-gray-600">Join our team of 250+ professionals worldwide</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full z-0"></div>

            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Work With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join us and experience a career filled with purpose, growth, and rewards.
            </p>
          </div>

          <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.id} className="benefit-card">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                          index % 3 === 0 ? "bg-orange-600/10" : index % 3 === 1 ? "bg-teal-500/10" : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`h-8 w-8 ${
                            index % 3 === 0 ? "text-orange-600" : index % 3 === 1 ? "text-teal-500" : "text-blue-500"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoinUs;