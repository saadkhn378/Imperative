import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Zap, ArrowRight, Upload } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    id: 1,
    title: "Graduate Training Program",
    description: "A 6-month intensive program designed to transform fresh graduates into industry-ready professionals.",
    icon: GraduationCap,
    features: [
      "Technical and soft skills training",
      "Mentorship from senior professionals",
      "Hands-on project experience",
      "Guaranteed placement in project teams",
    ],
  },
  {
    id: 2,
    title: "Summer Internship",
    description: "A 3-month program for students in their penultimate year of study to gain real-world experience.",
    icon: BookOpen,
    features: [
      "Work on real client projects",
      "Weekly learning sessions",
      "Performance evaluation",
      "Potential for pre-placement offers",
    ],
  },
  {
    id: 3,
    title: "Campus Ambassador",
    description: "Represent Imperative at your college and help us connect with talented students.",
    icon: Users,
    features: [
      "Leadership development",
      "Networking opportunities",
      "Event management experience",
      "Performance-based incentives",
    ],
  },
  {
    id: 4,
    title: "Research Fellowship",
    description: "Collaborate with our R&D team on cutting-edge technology research projects.",
    icon: Zap,
    features: [
      "Work on emerging technologies",
      "Publication opportunities",
      "Mentorship from research experts",
      "Stipend and research grants",
    ],
  },
];

function FreshersProgram() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".program-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".programs-grid",
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-teal-500/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-gray-800"
          >
            Fresher Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Starting your career? We offer exciting programs designed specifically for students and recent graduates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-600/10 rounded-full z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-500/10 rounded-full z-0"></div>

              <div className="relative z-10 h-full rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Launch Your Career With Us</h3>
              <p className="text-gray-600 mb-6">
                At Imperative, we believe in nurturing fresh talent and providing a platform for young professionals to
                grow and excel. Our fresher programs are designed to bridge the gap between academic learning and
                industry requirements, setting you up for a successful career in technology.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Why Join as a Fresher?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 p-1 bg-orange-600/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                    </div>
                    <p className="ml-3 text-gray-600">Structured learning path with comprehensive training</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 p-1 bg-orange-600/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                    </div>
                    <p className="ml-3 text-gray-600">Exposure to cutting-edge technologies and real-world projects</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 p-1 bg-orange-600/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                    </div>
                    <p className="ml-3 text-gray-600">Mentorship from industry experts and senior professionals</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1 p-1 bg-orange-600/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600"></div>
                    </div>
                    <p className="ml-3 text-gray-600">Clear career progression path with regular performance reviews</p>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="#fresher-application"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-600/90 transition-colors"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="programs-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div key={program.id} className="program-card">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        index % 2 === 0 ? "bg-orange-600/10" : "bg-teal-500/10"
                      }`}
                    >
                      <Icon className={`h-6 w-6 ${index % 2 === 0 ? "text-orange-600" : "text-teal-500"}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                      <p className="text-gray-600 mb-4">{program.description}</p>

                      <h4 className="font-medium text-gray-700 mb-2">Program Highlights:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 mt-1 p-1 bg-gray-100 rounded-full">
                              <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                            </div>
                            <p className="ml-2 text-sm text-gray-600">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Fresher Application Form */}
        <div id="fresher-application" className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Apply for Fresher Programs</h3>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fresher-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fresher-name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
              </div>

              <div>
                <label htmlFor="fresher-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="fresher-email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fresher-college" className="block text-sm font-medium text-gray-700 mb-1">
                  College/University *
                </label>
                <input
                  type="text"
                  id="fresher-college"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
              </div>

              <div>
                <label htmlFor="fresher-degree" className="block text-sm font-medium text-gray-700 mb-1">
                  Degree/Course *
                </label>
                <input
                  type="text"
                  id="fresher-degree"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fresher-graduation" className="block text-sm font-medium text-gray-700 mb-1">
                  Graduation Year *
                </label>
                <select
                  id="fresher-graduation"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                >
                  <option value="">Select Year</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>

              <div>
                <label htmlFor="fresher-program" className="block text-sm font-medium text-gray-700 mb-1">
                  Program of Interest *
                </label>
                <select
                  id="fresher-program"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                >
                  <option value="">Select Program</option>
                  {programs.map((program) => (
                    <option key={program.id} value={program.title}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="fresher-resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV *
              </label>
              <div className="relative">
                <input type="file" id="fresher-resume" accept=".pdf,.doc,.docx" required className="sr-only" />
                <label
                  htmlFor="fresher-resume"
                  className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <Upload className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">Upload your resume (PDF, DOC, DOCX)</span>
                  </div>
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-500">Max file size: 5MB</p>
            </div>

            <div className="mb-6">
              <label htmlFor="fresher-message" className="block text-sm font-medium text-gray-700 mb-1">
                Why are you interested in this program?
              </label>
              <textarea
                id="fresher-message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="Tell us about your interests, skills, and why you want to join our program..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-600/90 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FreshersProgram;