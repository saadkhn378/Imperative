"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Twitter, Mail, Quote, X, ChevronDown, ChevronUp } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// CSS styles with a completely new design approach
const styles = `
  /* Modern 3D card design */
  .leader-card {
    position: relative;
    height: 450px;
    perspective: 1500px;
    cursor: pointer;
  }
  
  .leader-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
  }
  
  .leader-card:hover .leader-card-inner {
    transform: rotateY(180deg);
  }
  
  .leader-card-front,
  .leader-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .leader-card-front {
    background-position: center;
    background-size: cover;
  }
  
  .leader-card-front::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
  }
  
  .leader-card-back {
    transform: rotateY(180deg);
    padding: 30px;
    display: flex;
    flex-direction: column;
  }
  
  .leader-card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px;
    z-index: 1;
    color: white;
  }
  
  .leader-card-social {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }
  
  .leader-card-social a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
  }
  
  .leader-card-social a:hover {
    background-color: white;
    color: #111;
    transform: translateY(-3px);
  }
  
  /* Timeline design */
  .timeline-container {
    position: relative;
    padding: 20px 0;
  }
  
  .timeline-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    width: 2px;
    background: linear-gradient(to bottom, #f59e0b, #3b82f6);
  }
  
  .timeline-item {
    position: relative;
    padding-left: 50px;
    margin-bottom: 20px;
  }
  
  .timeline-dot {
    position: absolute;
    left: 11px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    z-index: 1;
  }
  
  .timeline-content {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  /* Vision cards */
  .vision-container {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .vision-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    transform: scale(1.1);
    opacity: 0.2;
  }
  
  .vision-content {
    position: relative;
    z-index: 1;
    padding: 40px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .vision-quote {
    font-size: 120px;
    line-height: 0;
    height: 60px;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.6;
  }
  
  .vision-text {
    font-size: 18px;
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 30px;
    flex-grow: 1;
  }
  
  .vision-author {
    display: flex;
    align-items: center;
  }
  
  .vision-author-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
    border: 3px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Details accordion */
  .details-accordion {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  .details-item {
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .details-button {
    width: 100%;
    text-align: left;
    padding: 20px 30px;
    background: white;
    border: none;
    font-weight: 600;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .details-button:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  .details-button.active {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
  }
  
  .details-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
    background-color: white;
  }
  
  .details-content.open {
    max-height: 1000px;
  }
  
  .details-inner {
    padding: 30px;
  }
  
  .achievement-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 20px;
  }
  
  .achievement-item {
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    padding: 15px;
    border-radius: 10px;
    position: relative;
    padding-left: 35px;
  }
  
  .achievement-item::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 18px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
  }
  
  /* Vision swiper */
  .vision-swiper {
    padding: 50px 0;
  }
  
  .vision-swiper .swiper-slide {
    width: 70%;
    height: 400px;
    opacity: 0.4;
    transition: all 0.3s ease;
  }
  
  .vision-swiper .swiper-slide-active {
    opacity: 1;
  }
  
  .vision-swiper .swiper-pagination-bullet {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    opacity: 0.5;
    width: 10px;
    height: 10px;
  }
  
  .vision-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    width: 30px;
    border-radius: 5px;
  }
  
  /* Section headers */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-title {
    position: relative;
    display: inline-block;
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    border-radius: 2px;
  }
  
  .section-subtitle {
    font-size: 18px;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* Modal design */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  
  .modal-container {
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  }
  
  .modal-header {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .modal-header-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    transform: scale(1.1);
  }
  
  .modal-header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.8), rgba(59, 130, 246, 0.8));
  }
  
  .modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1;
  }
  
  .modal-close:hover {
    background-color: white;
    color: #111;
    transform: rotate(90deg);
  }
  
  .modal-profile {
    position: absolute;
    bottom: -50px;
    left: 50px;
    display: flex;
    align-items: flex-end;
    z-index: 1;
  }
  
  .modal-profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background-color: white;
  }
  
  .modal-profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .modal-profile-info {
    margin-left: 20px;
    color: white;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  .modal-profile-name {
    font-size: 24px;
    font-weight: 700;
  }
  
  .modal-profile-position {
    font-size: 16px;
    opacity: 0.9;
  }
  
  .modal-body {
    padding: 70px 50px 50px;
    overflow-y: auto;
  }
  
  .modal-section {
    margin-bottom: 30px;
  }
  
  .modal-section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    color: #333;
    display: flex;
    align-items: center;
  }
  
  .modal-section-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    margin-right: 10px;
  }
  
  .modal-bio {
    line-height: 1.7;
    color: #555;
  }
  
  .modal-achievements {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .modal-achievement {
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    padding: 15px;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
  }
  
  .modal-vision {
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.05), rgba(59, 130, 246, 0.05));
    padding: 25px;
    border-radius: 15px;
    position: relative;
  }
  
  .modal-vision-quote {
    font-size: 80px;
    line-height: 0;
    height: 40px;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.6;
  }
  
  .modal-vision-text {
    font-style: italic;
    line-height: 1.7;
    color: #555;
  }
  
  .modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    background-color: #f9f9f9;
    border-top: 1px solid #eee;
  }
  
  .modal-social {
    display: flex;
    gap: 10px;
  }
  
  .modal-social a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    color: #333;
    transition: all 0.3s ease;
  }
  
  .modal-social a:hover {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
    transform: translateY(-3px);
  }
  
  .modal-contact {
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .modal-contact:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Values section */
  .values-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .value-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .value-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  .value-icon {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
  }
  
  .value-icon svg {
    width: 60px;
    height: 60px;
    color: transparent;
    stroke: url(#gradient);
    stroke-width: 1.5;
  }
  
  .value-content {
    padding: 30px;
  }
  
  .value-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .value-description {
    color: #555;
    line-height: 1.7;
  }

  /* Circular Values Design */
  .value-circle {
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f59e0b, #3b82f6);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  .value-circle:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .value-circle-inner {
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
  }

  .value-circle-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    margin-bottom: 15px;
  }

  .value-circle-icon svg {
    width: 30px;
    height: 30px;
    stroke: url(#gradient);
    stroke-width: 2;
  }

  .value-circle-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    background: linear-gradient(135deg, #f59e0b, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .value-circle-description {
    font-size: 14px;
    color: #555;
    line-height: 1.5;
  }

  .values-connector {
    position: relative;
  }

  .values-connector svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .leader-card {
      height: 400px;
    }
    
    .modal-profile {
      left: 50%;
      transform: translateX(-50%);
    }
    
    .modal-body {
      padding: 80px 30px 30px;
    }
    
    .modal-footer {
      padding: 20px 30px;
      flex-direction: column;
      gap: 20px;
    }
    
    .vision-swiper .swiper-slide {
      width: 90%;
    }
  }
`

// Leadership team data
const leadershipTeam = [
  {
    id: 1,
    name: "Jennifer Reynolds",
    position: "Chief Executive Officer",
    bio: "Jennifer has over 20 years of experience in the technology industry, having previously served as CTO at TechGiant and VP of Engineering at InnovateCorp. She holds an MBA from Harvard Business School and a BS in Computer Science from MIT.",
    longBio:
      "Jennifer Reynolds is a visionary leader with a proven track record of driving innovation and growth. With over two decades of experience in the technology sector, she has successfully led multiple organizations through digital transformation and market expansion. Before joining our company, Jennifer served as the Chief Technology Officer at TechGiant, where she spearheaded the development of groundbreaking cloud solutions that revolutionized the industry. Her strategic vision and commitment to excellence have been instrumental in our company's success. Jennifer is passionate about fostering a culture of innovation and inclusion, believing that diverse perspectives lead to better solutions.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jennifer@example.com",
    },
    achievements: [
      "Led company through successful IPO in 2021",
      "Increased annual revenue by 300% over 4 years",
      "Named 'Top 50 Women in Tech' by Forbes",
      "Expanded company presence to 15 countries",
    ],
    vision:
      "My vision is to build technology that empowers people and organizations to achieve more. By focusing on innovation, quality, and customer needs, we can create solutions that truly make a difference in how people work and live.",
    timeline: [
      { year: 2018, event: "Joined as CEO" },
      { year: 2019, event: "Launched company rebrand" },
      { year: 2021, event: "Led successful IPO" },
      { year: 2023, event: "Expanded to 15 countries" },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Chief Technology Officer",
    bio: "Michael leads our technology strategy and engineering teams. With a background in AI and distributed systems, he previously led engineering at CloudScale and was a principal engineer at Google.",
    longBio:
      "Michael Chen is a technology leader with deep expertise in artificial intelligence, machine learning, and distributed systems. As our Chief Technology Officer, he drives the technical vision for our products and services, ensuring we remain at the cutting edge of innovation. Michael's career spans over 15 years in the tech industry, including leadership roles at CloudScale and Google, where he led the development of several groundbreaking technologies. He holds a Ph.D. in Computer Science from Stanford University and has published numerous papers in prestigious technical journals. Michael is known for his ability to translate complex technical concepts into business value and for building high-performing engineering teams that deliver exceptional results.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@example.com",
    },
    achievements: [
      "Architected our flagship AI-powered analytics platform",
      "Holds 12 patents in distributed systems and machine learning",
      "Grew engineering team from 20 to 150 people",
      "Led successful migration to microservices architecture",
    ],
    vision:
      "Technology should solve real problems and create new possibilities. I believe in building systems that are not just powerful and scalable, but also ethical and accessible to all. Our focus on responsible AI and user-centered design will define the next generation of technology.",
    timeline: [
      { year: 2017, event: "Joined as CTO" },
      { year: 2018, event: "Launched AI platform" },
      { year: 2020, event: "Completed microservices migration" },
      { year: 2022, event: "Expanded engineering team to 150" },
    ],
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Chief Operating Officer",
    bio: "Sarah oversees our global operations and business strategy. With experience at McKinsey and Amazon, she brings expertise in scaling operations and optimizing business processes.",
    longBio:
      "Sarah Johnson is a seasoned operations executive with a talent for scaling businesses and optimizing complex processes. As our Chief Operating Officer, she oversees all aspects of our global operations, ensuring we deliver exceptional value to our customers while maintaining operational excellence. Before joining our company, Sarah was a Senior Partner at McKinsey & Company, where she advised Fortune 500 companies on operational strategy and digital transformation. She also held leadership roles at Amazon, where she helped scale their logistics operations across Europe. Sarah holds an MBA from Wharton and a BA in Economics from Yale University. She is known for her analytical approach to problem-solving and her ability to build high-performing teams across diverse cultural contexts.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@example.com",
    },
    achievements: [
      "Reduced operational costs by 25% while improving service quality",
      "Led expansion into APAC market, achieving 40% YoY growth",
      "Implemented company-wide agile transformation",
      "Established industry-leading customer satisfaction metrics",
    ],
    vision:
      "Operational excellence is about creating systems that consistently deliver value to customers while empowering our teams to do their best work. By focusing on continuous improvement, data-driven decision making, and a culture of accountability, we can build a company that's both highly efficient and a great place to work.",
    timeline: [
      { year: 2019, event: "Joined as COO" },
      { year: 2020, event: "Implemented agile transformation" },
      { year: 2021, event: "Led APAC expansion" },
      { year: 2023, event: "Achieved record customer satisfaction" },
    ],
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Chief Financial Officer",
    bio: "David manages our financial strategy and operations. With previous roles at Goldman Sachs and as CFO of TechNova, he brings deep expertise in financial planning and investor relations.",
    longBio:
      "David Rodriguez is a financial leader with extensive experience in both the technology and financial services sectors. As our Chief Financial Officer, he oversees all financial operations, including accounting, financial planning and analysis, investor relations, and capital allocation. Prior to joining our company, David spent 10 years at Goldman Sachs, where he advised technology companies on M&A and capital raising activities. He later served as the CFO of TechNova, where he played a key role in the company's successful acquisition. David holds an MBA from Columbia Business School and is a CFA charterholder. He is known for his strategic approach to financial management and his ability to align financial objectives with business goals to drive sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@example.com",
    },
    achievements: [
      "Secured $150M in Series C funding at 2x previous valuation",
      "Implemented financial systems that reduced close time by 60%",
      "Led 3 strategic acquisitions that expanded product portfolio",
      "Achieved 5 consecutive quarters of profitability while maintaining 40% growth",
    ],
    vision:
      "Financial strategy should be a catalyst for growth, not a constraint. By maintaining fiscal discipline while making smart investments in our future, we can build a company that delivers exceptional value to both customers and shareholders over the long term.",
    timeline: [
      { year: 2018, event: "Joined as CFO" },
      { year: 2019, event: "Secured Series C funding" },
      { year: 2020, event: "Led first acquisition" },
      { year: 2022, event: "Achieved profitability" },
    ],
  },
  {
    id: 5,
    name: "Lisa Thompson",
    position: "Chief Marketing Officer",
    bio: "Lisa drives our global marketing strategy and brand development. With previous leadership roles at Salesforce and HubSpot, she specializes in B2B marketing and customer acquisition.",
    longBio:
      "Lisa Thompson is a marketing executive with a passion for building brands that connect with customers on a deeper level. As our Chief Marketing Officer, she leads all aspects of our global marketing strategy, including brand development, demand generation, product marketing, and customer advocacy. Before joining our company, Lisa held senior marketing roles at Salesforce and HubSpot, where she helped drive significant growth in customer acquisition and brand awareness. She holds an MBA from Northwestern's Kellogg School of Management and a BA in Communications from NYU. Lisa is known for her data-driven approach to marketing and her ability to translate complex technical offerings into compelling value propositions that resonate with customers.",
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "lisa@example.com",
    },
    achievements: [
      "Rebranded company identity, resulting in 40% increase in brand recognition",
      "Built demand generation engine that delivers 35% of company revenue",
      "Launched award-winning thought leadership program",
      "Achieved 200% increase in marketing qualified leads while reducing CAC by 30%",
    ],
    vision:
      "Marketing at its best doesn't feel like marketing at all—it feels like a helpful resource that connects customers with solutions that truly meet their needs. By deeply understanding our customers and communicating authentically, we can build lasting relationships that drive growth and create brand advocates.",
    timeline: [
      { year: 2019, event: "Joined as CMO" },
      { year: 2020, event: "Led company rebrand" },
      { year: 2021, event: "Launched thought leadership program" },
      { year: 2023, event: "Achieved 35% revenue from marketing" },
    ],
  },
]

// 3D Flip Card Component for Leadership Team
const LeaderCard = ({ leader, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="leader-card"
      onClick={() => onClick(leader)}
    >
      <div className="leader-card-inner">
        <div className="leader-card-front" style={{ backgroundImage: `url(${leader.image || "/placeholder.svg"})` }}>
          <div className="leader-card-content">
            <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
            <p className="text-white/80 mb-4">{leader.position}</p>
            <div className="leader-card-social">
              {leader.social.linkedin && (
                <a href={leader.social.linkedin} onClick={(e) => e.stopPropagation()}>
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {leader.social.twitter && (
                <a href={leader.social.twitter} onClick={(e) => e.stopPropagation()}>
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {leader.social.email && (
                <a href={`mailto:${leader.social.email}`} onClick={(e) => e.stopPropagation()}>
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="leader-card-back" style={{ background: `linear-gradient(45deg, #f59e0b, #3b82f6)` }}>
          <h3 className="text-xl font-bold text-white mb-4">Career Timeline</h3>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {leader.timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div
                  className="timeline-dot"
                  style={{
                    background: `linear-gradient(45deg, #f59e0b, #3b82f6)`,
                    boxShadow: "0 0 0 5px rgba(255, 255, 255, 0.3)",
                  }}
                ></div>
                <div className="timeline-content">
                  <div className="font-bold">{item.year}</div>
                  <div>{item.event}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-auto text-white/80 text-sm text-center">Click for full profile</div>
        </div>
      </div>
    </motion.div>
  )
}

// Vision Card Component
const VisionCard = ({ leader, index }) => {
  return (
    <div className="vision-container h-full">
      <div className="vision-bg" style={{ backgroundImage: `url(${leader.image || "/placeholder.svg"})` }}></div>
      <div className="vision-content">
        <div className="vision-quote">"</div>
        <div className="vision-text">{leader.vision}</div>
        <div className="vision-author">
          <div className="vision-author-image">
            <img src={leader.image || "/placeholder.svg"} alt={leader.name} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">{leader.name}</h4>
            <p className="text-sm" style={{ color: "#3b82f6" }}>
              {leader.position}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Leadership Details Accordion
const DetailsAccordion = ({ leaders }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="details-accordion">
      {leaders.map((leader, index) => (
        <div key={leader.id} className="details-item">
          <button
            className={`details-button ${openIndex === index ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <span>
              {leader.name} - {leader.position}
            </span>
            {openIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          <div className={`details-content ${openIndex === index ? "open" : ""}`}>
            <div className="details-inner">
              <p className="text-gray-700 mb-6">{leader.longBio}</p>

              <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
              <div className="achievement-list">
                {leader.achievements.map((achievement, i) => (
                  <div key={i} className="achievement-item">
                    {achievement}
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-6 rounded-xl"
                style={{ background: "linear-gradient(45deg, rgba(245, 158, 11, 0.05), rgba(59, 130, 246, 0.05))" }}
              >
                <Quote className="h-6 w-6 mb-2" style={{ color: "#3b82f6" }} />
                <p className="italic text-gray-700">{leader.vision}</p>
              </div>

              <div className="flex space-x-3 mt-6">
                {leader.social.linkedin && (
                  <a
                    href={leader.social.linkedin}
                    className="p-2 rounded-full transition-colors"
                    style={{ background: "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))" }}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {leader.social.twitter && (
                  <a
                    href={leader.social.twitter}
                    className="p-2 rounded-full transition-colors"
                    style={{ background: "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))" }}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {leader.social.email && (
                  <a
                    href={`mailto:${leader.social.email}`}
                    className="p-2 rounded-full transition-colors"
                    style={{ background: "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))" }}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Vision Swiper Component
const VisionSwiper = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      className="vision-swiper"
    >
      {leadershipTeam.map((leader, index) => (
        <SwiperSlide key={leader.id}>
          <VisionCard leader={leader} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

// Leadership Modal Component
const LeadershipModal = ({ leader, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div
            className="modal-header-bg"
            style={{ backgroundImage: `url(${leader.image || "/placeholder.svg"})` }}
          ></div>
          <div className="modal-header-overlay"></div>
          <button className="modal-close" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
          <div className="modal-profile">
            <div className="modal-profile-image">
              <img src={leader.image || "/placeholder.svg"} alt={leader.name} />
            </div>
            <div className="modal-profile-info">
              <div className="modal-profile-name">{leader.name}</div>
              <div className="modal-profile-position">{leader.position}</div>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <div className="modal-section-title">Biography</div>
            <div className="modal-bio">{leader.longBio}</div>
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Key Achievements</div>
            <div className="modal-achievements">
              {leader.achievements.map((achievement, index) => (
                <div key={index} className="modal-achievement">
                  {achievement}
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Career Timeline</div>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {leader.timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div
                    className="timeline-dot"
                    style={{
                      background: `linear-gradient(45deg, #f59e0b, #3b82f6)`,
                    }}
                  ></div>
                  <div className="timeline-content">
                    <div className="font-bold">{item.year}</div>
                    <div>{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Vision</div>
            <div className="modal-vision">
              <div className="modal-vision-quote">"</div>
              <div className="modal-vision-text">{leader.vision}</div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-social">
            {leader.social.linkedin && (
              <a href={leader.social.linkedin}>
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {leader.social.twitter && (
              <a href={leader.social.twitter}>
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {leader.social.email && (
              <a href={`mailto:${leader.social.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
          <a href={`mailto:${leader.social.email}`} className="modal-contact">
            <Mail className="h-5 w-5" />
            Contact {leader.name.split(" ")[0]}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Leadership Component
const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  const openModal = (leader) => {
    setSelectedLeader(leader)
    setModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = "auto"
  }

  // GSAP animations
  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      // Animate header
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          opacity: 0,
          y: -30,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        })
      }
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <>
      <style>{styles}</style>

      {/* SVG Gradient for icons */}
      <svg width="0" height="0" className="hidden">
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </svg>

      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div ref={headerRef} className="section-header">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{ background: "linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1))" }}
            >
              <span
                style={{
                  background: "linear-gradient(45deg, #f59e0b, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Leadership
              </span>
            </motion.div>

            <h2 className="section-title">Meet The Leadership Team</h2>

            <p className="section-subtitle">
              Our experienced leadership team is dedicated to driving innovation, fostering a culture of excellence, and
              delivering exceptional value to our customers and stakeholders.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, index) => (
                <LeaderCard key={leader.id} leader={leader} index={index} onClick={openModal} />
              ))}
            </div>
          </div>

          {/* Vision Section */}
          <div className="my-20">
            <div className="section-header">
              <h3 className="section-title">Leadership Vision</h3>
              <p className="section-subtitle">
                Our leaders share their vision for the future of our company and the industry.
              </p>
            </div>

            <VisionSwiper />
          </div>

          {/* Leadership Details */}
          <div className="my-20">
            <div className="section-header">
              <h3 className="section-title">Leadership Details</h3>
              <p className="section-subtitle">
                Learn more about our leadership team's background, achievements, and vision.
              </p>
            </div>

            <DetailsAccordion leaders={leadershipTeam} />
          </div>

          {/* Company Values */}
          <div className="my-20">
            <div className="section-header">
              <h3 className="section-title">Our Core Values</h3>
              <p className="section-subtitle">
                These fundamental principles guide our leadership team and shape our company culture.
              </p>
            </div>

            <div className="relative">
              {/* Connector lines (visible on larger screens) */}
              <div className="hidden lg:block absolute inset-0 z-0">
                <svg width="100%" height="100%" className="absolute inset-0">
                  <line
                    x1="25%"
                    y1="50%"
                    x2="75%"
                    y2="50%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  <line
                    x1="50%"
                    y1="25%"
                    x2="50%"
                    y2="75%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  <line
                    x1="25%"
                    y1="25%"
                    x2="75%"
                    y2="75%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  <line
                    x1="75%"
                    y1="25%"
                    x2="25%"
                    y2="75%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                </svg>
              </div>

              {/* Circular values */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-500 to-blue-500 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 stroke-transparent"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 10V3L4 14H7V21L16 10H13Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                        Innovation
                      </h4>
                      <p className="text-sm text-gray-600 leading-tight">
                        We embrace creativity and forward-thinking to develop solutions that address tomorrow's
                        challenges.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-500 to-blue-500 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 stroke-transparent"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 12L11 14L15 10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                        Excellence
                      </h4>
                      <p className="text-sm text-gray-600 leading-tight">
                        We strive for excellence in everything we do, setting high standards and continuously improving.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-500 to-blue-500 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 stroke-transparent"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 16V12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 8H12.01"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                        Integrity
                      </h4>
                      <p className="text-sm text-gray-600 leading-tight">
                        We act with honesty, transparency, and ethical responsibility in everything we do.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-amber-500 to-blue-500 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="absolute inset-1.5 rounded-full bg-white flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mb-4">
                        <svg
                          className="w-8 h-8 stroke-transparent"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                          <path
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">
                        Collaboration
                      </h4>
                      <p className="text-sm text-gray-600 leading-tight">
                        We believe in the power of diverse perspectives and teamwork to achieve extraordinary results.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Modal */}
      <AnimatePresence>
        {modalOpen && selectedLeader && (
          <LeadershipModal leader={selectedLeader} isOpen={modalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Leadership
