"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Twitter, Mail, Github, X, Users, Search } from 'lucide-react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// CSS styles for the component
const styles = `
  /* Modern 3D card design */
  .team-card {
    position: relative;
    height: 450px;
    perspective: 1500px;
    cursor: pointer;
  }
  
  .team-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 1s;
  }
  
  .team-card:hover .team-card-inner {
    transform: rotateY(180deg);
  }
  
  .team-card-front,
  .team-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  .team-card-front {
    background-position: center;
    background-size: cover;
  }
  
  .team-card-front::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%);
  }
  
  .team-card-back {
    transform: rotateY(180deg);
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
  }
  
  .team-card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px;
    z-index: 1;
    color: white;
  }
  
  .team-card-social {
    display: flex;
    gap: 10px;
    margin-top: 15px;
  }
  
  .team-card-social a {
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
  
  .team-card-social a:hover {
    background-color: white;
    color: #111;
    transform: translateY(-3px);
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
    padding: 30px 50px;
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
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

  .modal-title {
    color: white;
    font-size: 32px;
    font-weight: 800;
    margin: 0;
  }

  .modal-subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    margin-top: 5px;
  }

  .modal-body {
    padding: 40px 50px;
    overflow-y: auto;
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
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.6), rgba(59, 130, 246, 0.6));
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
    bottom: -60px;
    left: 50px;
    display: flex;
    align-items: flex-end;
    z-index: 10;
  }
  
  .modal-profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
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
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }
  
  .modal-profile-name {
    font-size: 28px;
    font-weight: 800;
  }
  
  .modal-profile-position {
    font-size: 16px;
    opacity: 0.9;
  }
  
  .modal-body {
    padding: 80px 50px 50px;
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
  
  /* Section headers */
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-subtitle {
    font-size: 18px;
    color: #666;
    max-width: 700px;
    margin: 0 auto;
  }
  
  /* Department filters */
  .department-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-bottom: 30px;
  }
  
  .department-filter-item {
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .department-filter-item:not(.active) {
    background-color: #f1f5f9;
    color: #475569;
  }
  
  .department-filter-item.active {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
  }
  
  .department-filter-item:hover:not(.active) {
    background-color: #e2e8f0;
  }
  
  /* Search bar */
  .search-container {
    position: relative;
    max-width: 500px;
    margin: 0 auto 40px;
  }
  
  .search-input {
    width: 100%;
    padding: 15px 20px 15px 50px;
    border-radius: 30px;
    border: 1px solid #e2e8f0;
    background-color: white;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  .search-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
  }
  
  .search-icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
  }
  
  .clear-search {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .clear-search:hover {
    color: #475569;
  }
  
  /* Empty state */
  .empty-state {
    text-align: center;
    padding: 60px 20px;
    background-color: #f8fafc;
    border-radius: 20px;
    margin-bottom: 40px;
  }
  
  .empty-state-icon {
    margin: 0 auto 20px;
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .empty-state-icon svg {
    color: #3b82f6;
  }
  
  .empty-state-title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #1e293b;
  }
  
  .empty-state-description {
    font-size: 16px;
    color: #64748b;
    margin-bottom: 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .reset-button {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .reset-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Join team CTA */
  .join-team-cta {
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.1), rgba(59, 130, 246, 0.1));
    border-radius: 20px;
    padding: 60px 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  
  .join-team-cta::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(245, 158, 11, 0.05), rgba(59, 130, 246, 0.05));
    z-index: 0;
  }
  
  .join-team-cta::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(245, 158, 11, 0.05));
    z-index: 0;
  }
  
  .join-team-title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 20px;
    color: #1e293b;
    position: relative;
    z-index: 1;
  }
  
  .join-team-description {
    font-size: 18px;
    color: #475569;
    margin-bottom: 30px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;
  }
  
  .join-team-button {
    background: linear-gradient(45deg, #f59e0b, #3b82f6);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  
  .join-team-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .team-card {
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
    
    .join-team-cta {
      padding: 40px 20px;
    }
    
    .join-team-title {
      font-size: 28px;
    }
    
    .join-team-description {
      font-size: 16px;
    }
  }
`

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Senior Software Engineer",
    department: "Engineering",
    bio: "Alex has over 10 years of experience building scalable web applications and microservices.",
    longBio:
      "Alex Johnson is a Senior Software Engineer with over a decade of experience in building scalable web applications and microservices. He specializes in backend development using Node.js, Python, and Go, with a focus on distributed systems and cloud architecture. Before joining our company, Alex worked at several tech giants where he led the development of mission-critical systems serving millions of users. He holds a Master's degree in Computer Science from Stanford University and is passionate about open-source software, having contributed to several popular projects. Alex is known for his problem-solving abilities and mentorship of junior engineers.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "alex@example.com",
    },
    skills: ["JavaScript", "Node.js", "Python", "AWS", "Microservices", "Docker", "Kubernetes"],
    projects: [
      "Led the redesign of our core API platform, improving performance by 40%",
      "Architected a real-time data processing system handling 10,000+ events per second",
      "Implemented CI/CD pipelines that reduced deployment time by 70%",
    ],
  },
  {
    id: 2,
    name: "Sarah Chen",
    position: "UX/UI Designer",
    department: "Design",
    bio: "Sarah creates beautiful, intuitive interfaces that delight users and solve complex problems.",
    longBio:
      "Sarah Chen is a UX/UI Designer with a passion for creating beautiful, intuitive interfaces that delight users and solve complex problems. With a background in both graphic design and psychology, she brings a unique perspective to user experience design. Sarah has worked on a wide range of products, from consumer mobile apps to complex enterprise systems. She is skilled in user research, wireframing, prototyping, and visual design, and is proficient with tools like Figma, Sketch, and Adobe Creative Suite. Sarah is a strong advocate for accessibility and inclusive design, ensuring that all users can effectively use the products she designs.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      dribbble: "#",
      email: "sarah@example.com",
    },
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma", "Adobe XD", "Accessibility"],
    projects: [
      "Redesigned the company's flagship product, increasing user engagement by 35%",
      "Created a comprehensive design system that improved design consistency and development efficiency",
      "Led user research initiatives that informed product strategy and roadmap",
    ],
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    position: "Product Manager",
    department: "Product",
    bio: "Michael bridges the gap between business strategy and technical implementation.",
    longBio:
      "Michael Rodriguez is a Product Manager who excels at bridging the gap between business strategy and technical implementation. With a background in both business administration and software development, he understands the needs of both stakeholders and engineering teams. Michael has a proven track record of delivering successful products that meet market needs and business objectives. He is skilled in market research, competitive analysis, roadmap planning, and agile methodologies. Michael is known for his strong communication skills and ability to build consensus among diverse teams. He holds an MBA from Wharton and a BS in Computer Science from MIT.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@example.com",
    },
    skills: [
      "Product Strategy",
      "Agile Methodologies",
      "Market Research",
      "Roadmap Planning",
      "User Stories",
      "A/B Testing",
    ],
    projects: [
      "Launched a new product line that generated $2M in revenue in its first year",
      "Led the transformation from waterfall to agile methodology across the product organization",
      "Developed and implemented a customer feedback program that improved product-market fit",
    ],
  },
  {
    id: 4,
    name: "Emily Wilson",
    position: "Marketing Director",
    department: "Marketing",
    bio: "Emily leads our marketing efforts with a focus on brand storytelling and growth.",
    longBio:
      "Emily Wilson is a Marketing Director with extensive experience in brand storytelling and growth marketing. She leads our marketing efforts with a strategic approach that combines creativity with data-driven decision making. Emily has a background in digital marketing, content strategy, and brand development, with a proven track record of building strong brand identities and driving customer acquisition. Before joining our company, she led marketing teams at several high-growth startups and established companies. Emily holds a degree in Marketing from NYU and is certified in various digital marketing specialties. She is passionate about creating authentic brand experiences that resonate with customers and drive business results.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      email: "emily@example.com",
    },
    skills: [
      "Brand Strategy",
      "Content Marketing",
      "SEO",
      "Social Media",
      "Email Marketing",
      "Analytics",
      "Campaign Management",
    ],
    projects: [
      "Developed and executed a rebranding strategy that increased brand recognition by 45%",
      "Created a content marketing program that generated 200% more leads year-over-year",
      "Implemented marketing automation that improved conversion rates by 30%",
    ],
  },
  {
    id: 5,
    name: "David Kim",
    position: "DevOps Engineer",
    department: "Engineering",
    bio: "David ensures our infrastructure is robust, scalable, and secure.",
    longBio:
      "David Kim is a DevOps Engineer who ensures our infrastructure is robust, scalable, and secure. With a strong background in systems administration and software development, he bridges the gap between development and operations. David is skilled in cloud infrastructure, containerization, automation, and CI/CD pipelines. He has implemented infrastructure as code practices that have significantly improved deployment reliability and reduced operational overhead. David is passionate about site reliability engineering and has implemented monitoring and alerting systems that have improved our service uptime. He holds several AWS and Google Cloud certifications and is an active contributor to the DevOps community.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      github: "#",
      email: "david@example.com",
    },
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "Monitoring", "Security"],
    projects: [
      "Migrated infrastructure to Kubernetes, improving scalability and reducing costs by 25%",
      "Implemented infrastructure as code using Terraform, reducing provisioning time from days to minutes",
      "Designed and implemented a comprehensive monitoring and alerting system",
    ],
  },
  {
    id: 6,
    name: "Priya Patel",
    position: "Frontend Developer",
    department: "Engineering",
    bio: "Priya crafts responsive, accessible, and performant user interfaces.",
    longBio:
      "Priya Patel is a Frontend Developer who specializes in crafting responsive, accessible, and performant user interfaces. With a strong foundation in HTML, CSS, and JavaScript, she builds web applications that provide excellent user experiences across all devices. Priya is proficient in modern frontend frameworks like React and Vue.js, and has a keen eye for design and user experience. She is passionate about web accessibility and ensures that all interfaces she develops are usable by people of all abilities. Priya is also skilled in frontend performance optimization and has implemented techniques that have significantly improved load times and user engagement. She regularly contributes to open-source projects and mentors junior developers.",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      github: "#",
      codepen: "#",
      email: "priya@example.com",
    },
    skills: ["React", "JavaScript", "HTML", "CSS", "Accessibility", "Performance Optimization", "Responsive Design"],
    projects: [
      "Rebuilt the company website with React, improving performance scores by 40%",
      "Implemented accessibility improvements that brought the site to WCAG AA compliance",
      "Developed a component library that is now used across all company products",
    ],
  },
  {
    id: 7,
    name: "James Thompson",
    position: "Customer Success Manager",
    department: "Customer Support",
    bio: "James ensures our customers get the most value from our products and services.",
    longBio:
      "James Thompson is a Customer Success Manager dedicated to ensuring our customers get the most value from our products and services. With a background in customer support and account management, he has a deep understanding of customer needs and how to address them effectively. James works closely with customers to understand their goals and challenges, and helps them leverage our solutions to achieve success. He has implemented customer onboarding and training programs that have significantly improved customer satisfaction and retention. James is known for his excellent communication skills and ability to build strong relationships with customers. He holds a degree in Business Administration and is certified in customer success management.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@example.com",
    },
    skills: [
      "Customer Relationship Management",
      "Onboarding",
      "Training",
      "Problem Solving",
      "Communication",
      "Account Management",
    ],
    projects: [
      "Developed a customer onboarding program that reduced time-to-value by 50%",
      "Implemented a customer health scoring system that helped identify at-risk accounts",
      "Created training materials that improved product adoption rates by 35%",
    ],
  },
  {
    id: 8,
    name: "Olivia Martinez",
    position: "Data Scientist",
    department: "Engineering",
    bio: "Olivia transforms raw data into actionable insights that drive business decisions.",
    longBio:
      "Olivia Martinez is a Data Scientist who excels at transforming raw data into actionable insights that drive business decisions. With a strong background in statistics, machine learning, and programming, she develops models and algorithms that solve complex business problems. Olivia has implemented predictive analytics solutions that have improved operational efficiency and customer experiences. She is skilled in data visualization and has created dashboards that help stakeholders understand complex data and make informed decisions. Olivia holds a Ph.D. in Statistics from UC Berkeley and has published several papers on machine learning applications. She is passionate about ethical AI and ensures that all models she develops are fair and unbiased.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      github: "#",
      kaggle: "#",
      email: "olivia@example.com",
    },
    skills: ["Python", "R", "Machine Learning", "Statistical Analysis", "Data Visualization", "SQL", "Big Data"],
    projects: [
      "Developed a customer churn prediction model that improved retention by 20%",
      "Created a recommendation engine that increased average order value by 15%",
      "Implemented a fraud detection system that reduced fraudulent transactions by 40%",
    ],
  },
  {
    id: 9,
    name: "Robert Lee",
    position: "Sales Director",
    department: "Sales",
    bio: "Robert builds and maintains relationships with our enterprise clients.",
    longBio:
      "Robert Lee is a Sales Director who excels at building and maintaining relationships with our enterprise clients. With over 15 years of experience in B2B sales, he has a proven track record of driving revenue growth and expanding market share. Robert leads our sales team with a consultative approach, focusing on understanding client needs and providing solutions that deliver value. He has implemented sales methodologies and processes that have improved conversion rates and shortened sales cycles. Robert is skilled in negotiation, account management, and sales strategy. He holds a degree in Business Administration from the University of Pennsylvania and is certified in enterprise sales methodologies. Robert is known for his strategic thinking and ability to build long-term client relationships based on trust and mutual success.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "robert@example.com",
    },
    skills: [
      "Enterprise Sales",
      "Negotiation",
      "Account Management",
      "Sales Strategy",
      "CRM",
      "Solution Selling",
      "Team Leadership",
    ],
    projects: [
      "Secured $5M in new business from enterprise clients in the first year",
      "Developed and implemented a sales methodology that improved close rates by 25%",
      "Built and led a high-performing sales team that consistently exceeded targets",
    ],
  },
  {
    id: 10,
    name: "Sophia Williams",
    position: "HR Manager",
    department: "Human Resources",
    bio: "Sophia fosters a positive company culture and ensures we attract top talent.",
    longBio:
      "Sophia Williams is an HR Manager who is passionate about fostering a positive company culture and ensuring we attract and retain top talent. With experience in all aspects of human resources, she has implemented programs and policies that support employee development and well-being. Sophia has redesigned our recruitment process, resulting in higher quality candidates and reduced time-to-hire. She has also developed training and development programs that have improved employee skills and job satisfaction. Sophia is skilled in conflict resolution, performance management, and employee relations. She holds a degree in Human Resources Management and is SHRM certified. Sophia is known for her empathy, fairness, and commitment to creating an inclusive workplace.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      email: "sophia@example.com",
    },
    skills: [
      "Recruitment",
      "Employee Relations",
      "Performance Management",
      "Training & Development",
      "Compensation & Benefits",
      "HR Policy",
    ],
    projects: [
      "Redesigned the recruitment process, reducing time-to-hire by 30%",
      "Implemented an employee engagement program that improved satisfaction scores by 25%",
      "Developed a diversity and inclusion initiative that increased workforce diversity",
    ],
  },
  {
    id: 11,
    name: "Daniel Garcia",
    position: "Backend Developer",
    department: "Engineering",
    bio: "Daniel builds robust APIs and services that power our applications.",
    longBio:
      "Daniel Garcia is a Backend Developer who specializes in building robust APIs and services that power our applications. With deep expertise in server-side technologies, he designs and implements scalable, secure, and efficient backend systems. Daniel is proficient in multiple programming languages and frameworks, with a particular focus on Java and Spring Boot. He has implemented microservices architectures that have improved system modularity and scalability. Daniel is also skilled in database design and optimization, having worked with both SQL and NoSQL databases. He holds a degree in Computer Engineering and is certified in cloud technologies. Daniel is known for writing clean, well-documented code and mentoring junior developers.",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      github: "#",
      email: "daniel@example.com",
    },
    skills: ["Java", "Spring Boot", "Microservices", "API Design", "SQL", "NoSQL", "Cloud Technologies"],
    projects: [
      "Designed and implemented a microservices architecture that improved system scalability",
      "Developed RESTful APIs that power our mobile and web applications",
      "Optimized database queries that reduced response times by 60%",
    ],
  },
  {
    id: 12,
    name: "Natalie Brown",
    position: "Content Strategist",
    department: "Marketing",
    bio: "Natalie crafts compelling content that resonates with our audience.",
    longBio:
      "Natalie Brown is a Content Strategist who excels at crafting compelling content that resonates with our audience and drives engagement. With a background in journalism and digital marketing, she develops content strategies that support our marketing objectives and brand voice. Natalie has created content across various formats, including blog posts, whitepapers, case studies, and social media. She has implemented content calendars and workflows that have improved content quality and consistency. Natalie is skilled in SEO, content analytics, and audience research. She holds a degree in English Literature and is certified in content marketing. Natalie is known for her creativity, attention to detail, and ability to translate complex topics into accessible content.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    social: {
      linkedin: "#",
      twitter: "#",
      medium: "#",
      email: "natalie@example.com",
    },
    skills: ["Content Strategy", "Copywriting", "SEO", "Content Marketing", "Storytelling", "Editing", "Social Media"],
    projects: [
      "Developed a content strategy that increased organic traffic by 75%",
      "Created a blog that generates 50,000+ monthly visitors",
      "Produced whitepapers and case studies that supported the sales team in closing deals",
    ],
  },
]

// Department filters
const departments = [
  { id: "all", name: "All Teams" },
  { id: "Engineering", name: "Engineering" },
  { id: "Design", name: "Design" },
  { id: "Product", name: "Product" },
  { id: "Marketing", name: "Marketing" },
  { id: "Sales", name: "Sales" },
  { id: "Customer Support", name: "Customer Support" },
  { id: "Human Resources", name: "HR" },
]

// Team Member Card Component
const TeamMemberCard = ({ member, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="team-card"
      onClick={() => onClick(member)}
    >
      <div className="team-card-inner">
        <div className="team-card-front" style={{ backgroundImage: `url(${member.image || "/placeholder.svg"})` }}>
          <div className="team-card-content">
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-white/80 mb-4">{member.position}</p>
            <div className="team-card-social">
              {member.social.linkedin && (
                <a href={member.social.linkedin} onClick={(e) => e.stopPropagation()}>
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} onClick={(e) => e.stopPropagation()}>
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {member.social.github && (
                <a href={member.social.github} onClick={(e) => e.stopPropagation()}>
                  <Github className="h-5 w-5" />
                </a>
              )}
              {member.social.email && (
                <a href={`mailto:${member.social.email}`} onClick={(e) => e.stopPropagation()}>
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="team-card-back">
          <h3 className="text-xl font-bold text-white mb-4">Skills & Expertise</h3>
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {member.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-white/90 text-sm mb-4">{member.bio}</p>
            <div className="text-white/80 text-sm text-center">Click for full profile</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Team Member Modal Component
const TeamMemberModal = ({ member, isOpen, onClose }) => {
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
          <button className="modal-close" onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
          <h2 className="modal-title">{member.name}</h2>
          <p className="modal-subtitle">{member.position}</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <div className="modal-section-title">Biography</div>
            <div className="modal-bio">{member.longBio}</div>
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Skills & Expertise</div>
            <div className="flex flex-wrap gap-2 mt-2">
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full text-gray-800 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <div className="modal-section-title">Key Projects</div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {member.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-social">
            {member.social.linkedin && (
              <a href={member.social.linkedin}>
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter}>
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {member.social.github && (
              <a href={member.social.github}>
                <Github className="h-5 w-5" />
              </a>
            )}
            {member.social.email && (
              <a href={`mailto:${member.social.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
          <a href={`mailto:${member.social.email}`} className="modal-contact">
            <Mail className="h-5 w-5" />
            Contact {member.name.split(" ")[0]}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Main Team Component
const OurTeam = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredMembers, setFilteredMembers] = useState(teamMembers)
  const [selectedMember, setSelectedMember] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  // Filter team members based on department and search query
  useEffect(() => {
    let result = teamMembers

    // Filter by department
    if (selectedDepartment !== "all") {
      result = result.filter((member) => member.department === selectedDepartment)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (member) =>
          member.name.toLowerCase().includes(query) ||
          member.position.toLowerCase().includes(query) ||
          member.department.toLowerCase().includes(query) ||
          member.bio.toLowerCase().includes(query) ||
          member.skills.some((skill) => skill.toLowerCase().includes(query)),
      )
    }

    setFilteredMembers(result)
  }, [selectedDepartment, searchQuery])

  const openModal = (member) => {
    setSelectedMember(member)
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
                Our People
              </span>
            </motion.div>

            <div className="relative mb-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[2px] bg-gray-100"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="px-6 bg-white flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-blue-500 flex items-center justify-center mr-4">
                    <span className="text-white text-xl font-bold">&gt;</span>
                  </div>
                  <h2 className="text-4xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-blue-500">
                      Talented Team
                    </span>
                  </h2>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-amber-500 flex items-center justify-center ml-4">
                    <span className="text-white text-xl font-bold">&lt;</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="section-subtitle">
              Our diverse team of professionals is dedicated to innovation, excellence, and delivering exceptional
              results for our clients.
            </p>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <Search className="search-icon h-5 w-5" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, position, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && <X className="clear-search h-5 w-5" onClick={() => setSearchQuery("")} />}
          </div>

          {/* Department Filters */}
          <div className="department-filter">
            {departments.map((dept) => (
              <motion.button
                key={dept.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`department-filter-item ${selectedDepartment === dept.id ? "active" : ""}`}
              >
                {dept.name}
              </motion.button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-gray-500 mb-10">
            Showing {filteredMembers.length} team member{filteredMembers.length !== 1 ? "s" : ""}
            {selectedDepartment !== "all" && <> in {departments.find((d) => d.id === selectedDepartment)?.name}</>}
            {searchQuery && <> matching "{searchQuery}"</>}
          </div>

          {/* Team Members Grid */}
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredMembers.map((member, index) => (
                <TeamMemberCard key={member.id} member={member} index={index} onClick={openModal} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="empty-state-title">No team members found</h3>
              <p className="empty-state-description">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button
                className="reset-button"
                onClick={() => {
                  setSelectedDepartment("all")
                  setSearchQuery("")
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Join the team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="join-team-cta"
          >
            <h3 className="join-team-title">Join Our Team</h3>
            <p className="join-team-description">
              We're always looking for talented individuals to join our team. Check out our open positions and apply
              today.
            </p>
            <motion.a href="#" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="join-team-button">
              View Open Positions
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {modalOpen && selectedMember && (
          <TeamMemberModal member={selectedMember} isOpen={modalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  )
}

export default OurTeam
