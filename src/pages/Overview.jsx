import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Award,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Zap,
  Target,
  Sparkles,
  Globe,
  TrendingUp,
  ArrowDown,
  Rocket,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import JourneyTimeline from "../sections/JourneyTimeline";

// Import GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const companyValues = [
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
  {
    id: 5,
    title: "Passion",
    description: "We approach every project with enthusiasm and dedication to make a meaningful impact.",
    icon: Heart,
  },
  {
    id: 6,
    title: "Agility",
    description: "We adapt quickly to changing circumstances and embrace new opportunities with flexibility.",
    icon: Zap,
  },
];

const commitments = [
  {
    id: 1,
    title: "Customer Success",
    description: "We are dedicated to helping our clients achieve their goals and realize their full potential.",
    icon: Target,
  },
  {
    id: 2,
    title: "Continuous Improvement",
    description:
      "We constantly refine our processes and solutions to stay at the forefront of innovation and excellence.",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices and creating sustainable solutions for the future.",
    icon: Globe,
  },
];

const milestones = [
  {
    year: 2010,
    title: "Company Founded",
    description: "Started with a small team of 5 passionate innovators",
    icon: Sparkles,
  },
  {
    year: 2012,
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered exceptional results",
    icon: Award,
  },
  {
    year: 2014,
    title: "Product Launch",
    description: "Launched our flagship product that revolutionized the industry",
    icon: Rocket,
  },
  {
    year: 2016,
    title: "International Expansion",
    description: "Opened our first international office and expanded to new markets",
    icon: Globe,
  },
  {
    year: 2018,
    title: "Innovation Award",
    description: "Recognized for our groundbreaking solutions and industry impact",
    icon: Lightbulb,
  },
  {
    year: 2020,
    title: "Sustainability Initiative",
    description: "Launched company-wide sustainability program with carbon-neutral operations",
    icon: Globe,
  },
  {
    year: 2022,
    title: "1000+ Clients",
    description: "Reached the milestone of serving over 1000 clients worldwide",
    icon: Users,
  },
  {
    year: 2023,
    title: "AI Innovation",
    description: "Pioneered new AI-powered solutions that set new industry standards",
    icon: Sparkles,
  },
];

const Overview = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineWrapperRef = useRef(null);
  const horizontalRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const sections = ["hero", "values", "commitments", "mission", "journey"];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);

  // Navigation function
  const navigateToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: section,
          offsetY: 80,
        },
        ease: "power3.inOut",
      });
    }
  };

  useEffect(() => {
    // Update active section based on scroll position
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  useEffect(() => {
    if (!timelineRef.current || !horizontalRef.current) return;

    // Timeline animation
    const timeline = timelineRef.current;
    const horizontalSection = horizontalRef.current;

    // Create horizontal scroll animation
    const timelineScroll = gsap.timeline({
      scrollTrigger: {
        trigger: timelineWrapperRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(Math.floor(progress * milestones.length), milestones.length - 1);
          setActiveMilestone(index);
        },
      },
    });

    // Animate the timeline horizontally
    timelineScroll.to(timeline, {
      x: () => -(timeline.scrollWidth - horizontalSection.offsetWidth),
      ease: "none",
    });

    // Animate each milestone
    milestones.forEach((_, index) => {
      const milestone = timeline.children[index];
      if (!milestone) return;

      const progress = index / (milestones.length - 1);

      timelineScroll.fromTo(
        milestone.querySelector(".milestone-dot"),
        { scale: 0.5, backgroundColor: "#ffffff" },
        {
          scale: 1,
          backgroundColor: "#f97316",
          duration: 0.1,
          ease: "power1.inOut",
        },
        progress,
      );

      timelineScroll.fromTo(
        milestone.querySelector(".milestone-content"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power1.out",
        },
        progress,
      );
    });

    // Section animations
    gsap.utils.toArray(".animate-section").forEach((section) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });

    // Parallax effects
    gsap.utils.toArray(".parallax-bg").forEach((element) => {
      gsap.fromTo(
        element,
        { y: 0 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentNode,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="font-met bg-white overflow-hidden" ref={containerRef}>

      {/* Hero Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="min-h-screen relative flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(249,115,22,0.2),rgba(20,184,166,0.1))]"></div>
          <div className="parallax-bg absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"></div>

          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div style={{ opacity, scale }} className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Our <span className="text-orange-600">Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto"
            >
              Discover our values, commitments, and the journey that has shaped who we are today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
            >
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={(el) => (sectionsRef.current[1] = el)} className="py-20 bg-white animate-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                        index % 3 === 0 ? "bg-orange-600/10" : index % 3 === 1 ? "bg-teal-500/10" : "bg-purple-100"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 ${
                          index % 3 === 0 ? "text-orange-600" : index % 3 === 1 ? "text-teal-500" : "text-purple-500"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section ref={(el) => (sectionsRef.current[2] = el)} className="py-20 bg-gray-50 animate-section overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl"></div>
          </div>

          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-bold mb-4">Our Commitments</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are dedicated to making a positive impact through these key commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {commitments.map((commitment, index) => {
              const Icon = commitment.icon;

              return (
                <motion.div
                  key={commitment.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-xl p-8 shadow-md bg-white border border-gray-100"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                        index === 0 ? "bg-orange-600/10" : index === 1 ? "bg-teal-500/10" : "bg-purple-100"
                      }`}
                    >
                      <Icon
                        className={`h-8 w-8 ${
                          index === 0 ? "text-orange-600" : index === 1 ? "text-teal-500" : "text-purple-500"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{commitment.title}</h3>
                    <p className="text-gray-600">{commitment.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section ref={(el) => (sectionsRef.current[3] = el)} className="py-20 bg-white animate-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-600/10 rounded-full z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-500/10 rounded-full z-0"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Our mission and vision"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-12"
              >
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="h-8 w-8 text-orange-600 mr-3" />
                  Our Mission
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-600">
                  <p className="text-lg text-gray-700">
                    To empower organizations through innovative technology solutions that drive growth, efficiency, and
                    competitive advantage. We are committed to delivering excellence in everything we do, building
                    lasting partnerships with our clients, and making a positive impact on the world.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-6 flex items-center">
                  <Sparkles className="h-8 w-8 text-teal-500 mr-3" />
                  Our Vision
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-teal-500">
                  <p className="text-lg text-gray-700">
                    To be the global leader in digital transformation, recognized for our innovation, expertise, and the
                    measurable value we create for our clients and communities. We envision a future where technology
                    enhances human potential and creates sustainable prosperity for all.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <JourneyTimeline/>
    </div>
  );
};

export default Overview;
