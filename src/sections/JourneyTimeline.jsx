import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Award, Rocket, Globe, Lightbulb, Users, Sparkles } from "lucide-react";
import JourneyTimelineMobile from "./JourneyTimelineMobile";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
  {
    year: 2010,
    title: "Company Founded",
    description: "Started with a small team of 5 passionate innovators",
    icon: Calendar,
    color: "primary",
  },
  {
    year: 2012,
    title: "First Major Client",
    description: "Secured our first enterprise client and delivered exceptional results",
    icon: Award,
    color: "accent",
  },
  {
    year: 2014,
    title: "Product Launch",
    description: "Launched our flagship product that revolutionized the industry",
    icon: Rocket,
    color: "primary",
  },
  {
    year: 2016,
    title: "International Expansion",
    description: "Opened our first international office and expanded to new markets",
    icon: Globe,
    color: "accent",
  },
  {
    year: 2018,
    title: "Innovation Award",
    description: "Recognized for our groundbreaking solutions and industry impact",
    icon: Lightbulb,
    color: "primary",
  },
  {
    year: 2020,
    title: "Sustainability Initiative",
    description: "Launched company-wide sustainability program with carbon-neutral operations",
    icon: Globe,
    color: "accent",
  },
  {
    year: 2022,
    title: "1000+ Clients",
    description: "Reached the milestone of serving over 1000 clients worldwide",
    icon: Users,
    color: "primary",
  },
  {
    year: 2023,
    title: "AI Innovation",
    description: "Pioneered new AI-powered solutions that set new industry standards",
    icon: Sparkles,
    color: "accent",
  },
];

function JourneyTimeline() {
  const componentRef = useRef(null);
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"],
  });

  // Progress indicator animation
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each milestone as it comes into view
      gsap.utils.toArray(".milestone-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the progress line
      gsap.fromTo(
        ".timeline-progress-indicator",
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 90%",
            end: "bottom 10%",
            scrub: true,
          },
        }
      );
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const getColorClass = (type, color) => {
    if (type === "bg" && color === "primary") return "bg-[#f97316]";
    if (type === "bg" && color === "accent") return "bg-[#3b82f6]";
    if (type === "text" && color === "primary") return "text-[#f97316]";
    if (type === "text" && color === "accent") return "text-[#3b82f6]";
    if (type === "border" && color === "primary") return "border-[#f97316]";
    if (type === "border" && color === "accent") return "border-[#3b82f6]";
    return "";
  };

  return (
    <section ref={componentRef} className="font-met py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to where we are today, explore the key milestones that have shaped our company.
          </p>
        </div>

        {/* Mobile Timeline */}
        <JourneyTimelineMobile />

        {/* Desktop Timeline */}
        <div className="relative max-w-4xl mx-auto hidden lg:block timeline-track" ref={timelineRef}>
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          {/* Progress indicator */}
          <motion.div
            className="absolute left-1/2 top-0 w-1 bg-[#f97316] transform -translate-x-1/2 z-10 timeline-progress-indicator"
            style={{ height: progressHeight }}
          />

          {/* Timeline items */}
          <div className="relative z-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              const bgColorClass = getColorClass("bg", milestone.color);
              const textColorClass = getColorClass("text", milestone.color);
              const borderColorClass = getColorClass("border", milestone.color);

              return (
                <div
                  key={index}
                  id={`milestone-${index}`}
                  className={`milestone-item flex items-center mb-16 last:mb-0 animate-section ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? "pr-8 text-right" : "pl-8"}`}>
                    <div className={`p-6 rounded-lg shadow-md bg-white border-t-4 ${borderColorClass} h-full`}>
                      <div className={`${textColorClass} font-bold text-xl mb-2`}>{milestone.year}</div>
                      <h3 className="font-bold text-xl mb-2 text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center relative">
                    <div className={`w-12 h-12 rounded-full ${bgColorClass} flex items-center justify-center z-20`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Connector line */}
                    <div className={`absolute top-1/2 w-1/2 h-0.5 bg-gray-200 ${isEven ? "left-0" : "right-0"}`}></div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 italic">
            "Our journey continues as we look toward the future, committed to innovation and excellence."
          </p>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;