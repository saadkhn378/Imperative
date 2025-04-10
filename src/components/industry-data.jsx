import {
    Building2,
    HeartPulse,
    Plane,
    ShoppingBag,
    UtensilsCrossed,
    Wifi,
    LandmarkIcon,
    GraduationCap,
    Truck,
    Film,
    CreditCard,
    Stethoscope,
    Hotel,
    BarChart3,
    ShieldCheck,
  } from "lucide-react"
  
  // Define industry data with icons
  export const industryData = {
    banking: {
      name: "Banking & Financial Services",
      cards: [
        {
          title: "Retail Banking",
          description:
            "Enhance customer experience with AI-powered automation, fraud detection, and personalized banking services.",
          image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
          icon: CreditCard,
        },
        {
          title: "Commercial Banking",
          description:
            "Streamline operations with automated KYC, risk management, and compliance-driven loan processing.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          icon: Building2,
        },
        {
          title: "Digital Payments & FinTech",
          description: "Leverage AI-driven credit processing and innovative payment solutions for modern consumers.",
          image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
          icon: CreditCard,
        },
        {
          title: "Regulatory Compliance & Security",
          description: "Ensure financial data security, AML compliance, and fraud prevention with advanced technologies.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
          icon: ShieldCheck,
        },
        {
          title: "Wealth Management",
          description: "Provide personalized investment advice, portfolio management, and financial planning services.",
          image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Insurance Solutions",
          description: "Streamline claims processing, risk assessment, and policy management for insurance providers.",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
          icon: ShieldCheck,
        },
      ],
    },
    healthcare: {
      name: "Healthcare",
      cards: [
        {
          title: "Patient Management",
          description:
            "Streamline patient records, appointments, and care coordination with integrated digital solutions.",
          image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
          icon: HeartPulse,
        },
        {
          title: "Telemedicine",
          description:
            "Enable secure virtual consultations and remote patient monitoring with HIPAA-compliant platforms.",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
          icon: Stethoscope,
        },
        {
          title: "Healthcare Analytics",
          description: "Leverage data insights to improve patient outcomes, optimize operations, and reduce costs.",
          image: "https://images.unsplash.com/photo-1576671081291-7dce5d20d11a?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Medical Billing & Claims",
          description:
            "Automate insurance verification, claims processing, and payment reconciliation for healthcare providers.",
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
          icon: CreditCard,
        },
        {
          title: "Clinical Decision Support",
          description: "AI-powered systems to assist healthcare professionals in diagnosis and treatment planning.",
          image: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=800&q=80",
          icon: Stethoscope,
        },
      ],
    },
    travel: {
      name: "Travel & Hospitality",
      cards: [
        {
          title: "Booking Systems",
          description:
            "Implement seamless reservation platforms for hotels, flights, and experiences with dynamic pricing.",
          image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
          icon: CreditCard,
        },
        {
          title: "Guest Experience",
          description:
            "Enhance customer satisfaction with personalized services, digital check-ins, and loyalty programs.",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
          icon: Hotel,
        },
        {
          title: "Revenue Management",
          description: "Optimize pricing strategies and inventory allocation to maximize revenue and occupancy rates.",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Travel Analytics",
          description:
            "Gain insights into traveler preferences, market trends, and operational efficiency opportunities.",
          image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Tour Operations",
          description: "Manage guides, itineraries, and group bookings with specialized tour management software.",
          image: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=800&q=80",
          icon: Plane,
        },
        {
          title: "Airline Solutions",
          description: "Optimize crew scheduling, flight operations, and passenger services for airlines.",
          image: "https://images.unsplash.com/photo-1521727857535-01a4faef8222?auto=format&fit=crop&w=800&q=80",
          icon: Plane,
        },
      ],
    },
    retail: {
      name: "Retail & E-Commerce",
      cards: [
        {
          title: "Omnichannel Retail",
          description: "Create seamless shopping experiences across online, mobile, and physical store environments.",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
          icon: ShoppingBag,
        },
        {
          title: "Inventory Management",
          description: "Optimize stock levels, reduce carrying costs, and prevent stockouts with AI-powered forecasting.",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
          icon: ShoppingBag,
        },
        {
          title: "Customer Analytics",
          description:
            "Understand shopping behaviors and preferences to deliver personalized marketing and recommendations.",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Digital Storefronts",
          description:
            "Build engaging e-commerce platforms with intuitive UX, secure payments, and efficient fulfillment.",
          image: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&w=800&q=80",
          icon: ShoppingBag,
        },
        {
          title: "Merchandising Optimization",
          description:
            "Data-driven product placement, pricing, and promotions to maximize sales and customer satisfaction.",
          image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=80",
          icon: ShoppingBag,
        },
      ],
    },
    food: {
      name: "Food & Beverages",
      cards: [
        {
          title: "Supply Chain Management",
          description:
            "Ensure food safety and quality with end-to-end traceability and temperature monitoring solutions.",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
          icon: Truck,
        },
        {
          title: "Restaurant Operations",
          description: "Streamline kitchen workflows, order management, and table service with integrated POS systems.",
          image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80",
          icon: UtensilsCrossed,
        },
        {
          title: "Delivery Optimization",
          description:
            "Enhance last-mile delivery with route planning, real-time tracking, and contactless handover options.",
          image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
          icon: Truck,
        },
        {
          title: "Customer Engagement",
          description: "Build loyalty with personalized offers, digital menus, and seamless online ordering experiences.",
          image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
          icon: UtensilsCrossed,
        },
        {
          title: "Food Production",
          description: "Optimize manufacturing processes, quality control, and compliance for food producers.",
          image: "https://images.unsplash.com/photo-1535379459414-378279249341?auto=format&fit=crop&w=800&q=80",
          icon: UtensilsCrossed,
        },
      ],
    },
    telecom: {
      name: "Telecom Services",
      cards: [
        {
          title: "Network Operations",
          description: "Monitor and optimize network performance, capacity planning, and service quality management.",
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
          icon: Wifi,
        },
        {
          title: "Customer Experience",
          description:
            "Enhance subscriber satisfaction with self-service portals, personalized plans, and digital support.",
          image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80",
          icon: Wifi,
        },
        {
          title: "Billing & Revenue",
          description: "Implement flexible charging models, subscription management, and payment processing systems.",
          image: "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?auto=format&fit=crop&w=800&q=80",
          icon: CreditCard,
        },
        {
          title: "5G & IoT Solutions",
          description: "Develop next-generation connectivity applications for smart cities, industries, and consumers.",
          image: "https://images.unsplash.com/photo-1519846882521-455fdf7cb878?auto=format&fit=crop&w=800&q=80",
          icon: Wifi,
        },
      ],
    },
    public: {
      name: "Public Sector & Government",
      cards: [
        {
          title: "Citizen Services",
          description:
            "Digitize public services with user-friendly portals, mobile applications, and secure authentication.",
          image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
          icon: LandmarkIcon,
        },
        {
          title: "Smart City Solutions",
          description: "Implement IoT-based infrastructure monitoring, traffic management, and public safety systems.",
          image: "https://images.unsplash.com/photo-1573108724029-6a1d4245fbbf?auto=format&fit=crop&w=800&q=80",
          icon: Building2,
        },
        {
          title: "Government Operations",
          description: "Streamline administrative processes, document management, and inter-agency collaboration.",
          image: "https://images.unsplash.com/photo-1531243269054-5ebf6f346071?auto=format&fit=crop&w=800&q=80",
          icon: LandmarkIcon,
        },
        {
          title: "Public Health Systems",
          description:
            "Support healthcare delivery, disease surveillance, and emergency response with integrated platforms.",
          image: "https://images.unsplash.com/photo-1631563019676-daa0a9059bbb?auto=format&fit=crop&w=800&q=80",
          icon: HeartPulse,
        },
      ],
    },
    education: {
      name: "Education Management",
      cards: [
        {
          title: "Learning Management",
          description: "Deliver engaging online courses, assessments, and student progress tracking for remote learning.",
          image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
          icon: GraduationCap,
        },
        {
          title: "School Administration",
          description:
            "Simplify enrollment, scheduling, attendance, and resource allocation for educational institutions.",
          image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
          icon: GraduationCap,
        },
        {
          title: "Student Analytics",
          description:
            "Identify at-risk students, personalize learning paths, and measure educational outcomes effectively.",
          image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
          icon: BarChart3,
        },
        {
          title: "Campus Management",
          description: "Coordinate facilities, security, events, and communications across educational campuses.",
          image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
          icon: Building2,
        },
        {
          title: "Research Management",
          description: "Track grants, publications, and collaborative projects for higher education institutions.",
          image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
          icon: GraduationCap,
        },
      ],
    },
    logistics: {
      name: "Logistics Services",
      cards: [
        {
          title: "Supply Chain Visibility",
          description: "Track shipments in real-time, monitor inventory levels, and optimize warehouse operations.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
          icon: Truck,
        },
        {
          title: "Route Optimization",
          description: "Reduce delivery times and fuel consumption with AI-powered route planning and fleet management.",
          image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
          icon: Truck,
        },
        {
          title: "Warehouse Automation",
          description:
            "Implement robotics, IoT sensors, and smart inventory systems for efficient fulfillment operations.",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
          icon: Building2,
        },
        {
          title: "Last-Mile Delivery",
          description:
            "Enhance customer satisfaction with precise delivery windows, real-time tracking, and proof of delivery.",
          image: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?auto=format&fit=crop&w=800&q=80",
          icon: Truck,
        },
      ],
    },
    media: {
      name: "Media & Entertainment",
      cards: [
        {
          title: "Content Management",
          description: "Organize, distribute, and monetize digital content across multiple platforms and devices.",
          image: "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?auto=format&fit=crop&w=800&q=80",
          icon: Film,
        },
        {
          title: "Streaming Services",
          description: "Deliver high-quality video and audio content with personalized recommendations and analytics.",
          image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
          icon: Film,
        },
        {
          title: "Audience Engagement",
          description: "Build loyal communities with interactive features, social integration, and targeted content.",
          image: "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?auto=format&fit=crop&w=800&q=80",
          icon: Film,
        },
        {
          title: "Digital Rights Management",
          description: "Protect intellectual property and manage licensing across global distribution channels.",
          image: "https://images.unsplash.com/photo-1588597989017-5c5e481eae5f?auto=format&fit=crop&w=800&q=80",
          icon: ShieldCheck,
        },
      ],
    },
  }
  