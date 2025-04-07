import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Award, Rocket, Globe, Lightbulb, Users, Sparkles } from "lucide-react";

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

function JourneyTimelineMobile() {
  const componentRef = useRef(null);

  // Helper function to get the appropriate color class
  const getColorClass = (type, color) => {
    if (type === "bg" && color === "primary") return "bg-[#f97316]";
    if (type === "bg" && color === "accent") return "bg-[#3b82f6]";
    if (type === "text" && color === "primary") return "text-[#f97316]";
    if (type === "text" && color === "accent") return "text-[#3b82f6]";
    if (type === "border" && color === "primary") return "border-[#f97316]";
    if (type === "border" && color === "accent") return "border-[#3b82f6]";
    return "";
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each milestone as it comes into view
      gsap.utils.toArray(".mobile-milestone").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="font-met lg:hidden py-10">
      <div className="relative">
        {/* Timeline center line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

        {/* Timeline items */}
        <div className="relative z-10">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const bgColorClass = getColorClass("bg", milestone.color);
            const textColorClass = getColorClass("text", milestone.color);
            const borderColorClass = getColorClass("border", milestone.color);

            return (
              <div key={index} className="mobile-milestone flex mb-12 last:mb-0 relative pl-16 animate-section">
                {/* Icon */}
                <div className={`absolute left-0 w-16 flex justify-center`}>
                  <div className={`w-10 h-10 rounded-full ${bgColorClass} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 p-5 rounded-lg shadow-md bg-white border-l-4 ${borderColorClass}`}>
                  <div className={`${textColorClass} font-bold text-lg mb-1`}>{milestone.year}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default JourneyTimelineMobile;