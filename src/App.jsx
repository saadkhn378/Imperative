import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RecentBlog from "./sections/RecentBlog";

// Sections for homepage
import Hero from "./sections/Hero";
import { Glance } from "./sections/Glance";
import PurposeSection from "./sections/PurposeSection";
import PartnersShowcase from "./sections/PartnersShowcase";
import IndustriesSection from "./sections/IndustriesSection";
import Testimonials from "./sections/Testimonials";
import GroupCompani from "./sections/GroupCompani";
import GlobalPresence from "./sections/GlobalPresence";

// Pages
import Overview from "./pages/Overview";
import Joinus from "./pages/Joinus";
import Contact from "./pages/Contact";
import GroupCompanies from "./pages/GroupCompanies";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import DigitalProduct from "./pages/DigitalProduct";
import SmartInfra from "./pages/SmartInfra";
import AwardsRecognition from "./pages/AwardsRecognition";
import Leadership from "./pages/Leadership";
import OurTeam from "./pages/OurTeam";

// Industry pages
import Bfsi from "./pages/industries/Bfsi";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import Media from "./pages/industries/Media";
import BackOffice from "./pages/industries/BackOffice";
import Logistics from "./pages/industries/Logistics";

// Outsourcing - KPO pages
import SocialMedia from "./pages/outsourcing/kpo/SocialMedia";
import ResearchAnalysis from "./pages/outsourcing/kpo/ResearchAnalysis";
import HealthCare from "./pages/outsourcing/kpo/Healthcare";
import LegalProcess from "./pages/outsourcing/kpo/LegalProcess";
import ResearchDevelopment from "./pages/outsourcing/kpo/ResearchDevelopment";
import Backofficeop from "./pages/outsourcing/bpo/Backofficeop";
import Voicesupport from "./pages/outsourcing/bpo/Voicesupport";
import ItServices from "./pages/technology/ITService";

import ChatWidget from "./components/ChatWidget";
import GalleryPage from "./pages/GalleryPage";
import Aiprocess from "./pages/outsourcing/bpo/Aiprocess";
import Systeminte from "./pages/consulting/Systeminte";
import CyberAssurence from "./pages/consulting/CyberAssurence";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
      <ChatWidget/>
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Glance />
                  <PurposeSection />
                  <PartnersShowcase />
                  <IndustriesSection />
                  <Testimonials />
                  <GroupCompani />
                  <GlobalPresence />
                </>
              }
            />

            {/* Know Us */}
            <Route path="/know-us/overview" element={<Overview />} />
            <Route path="/know-us/awards-recognitions" element={<AwardsRecognition />} />
            <Route path="/know-us/leadership-team" element={<Leadership />} />
            <Route path="/know-us/our-team" element={<OurTeam />} />

            {/* Industries */}
            <Route path="/industries-we-serve" element={<IndustriesWeServe />} />
            <Route path="/industries/bfsi" element={<Bfsi />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/media" element={<Media />} />
            <Route path="/industries/telecom" element={<BackOffice />} />
            <Route path="/industries/logistics" element={<Logistics />} />


            <Route path="technology/platforms" element={<ItServices />} />
          {/* Outsourcing - KPO */}
          <Route path="/outsourcing/bpo/backoffice" element={<Backofficeop />} />
          <Route path="/outsourcing/bpo/voice-support" element={<Voicesupport />} />
          <Route path="/outsourcing/bpo/ai-process" element={<Aiprocess />} />


            {/* Outsourcing - KPO */}
            <Route path="/outsourcing/kpo/research-analysis" element={<ResearchAnalysis />} />
            <Route path="/outsourcing/kpo/social-media" element={<SocialMedia />} />
            <Route path="/outsourcing/kpo/healthcare" element={<HealthCare />} />
            <Route path="/outsourcing/kpo/lpo" element={<LegalProcess />} />
            <Route path="/outsourcing/kpo/research-development" element={<ResearchDevelopment />} />


            <Route path="/consulting/cyber-assurance" element={<CyberAssurence />} />
            <Route path="/consulting/system-integration" element={<Systeminte />} />


            <Route path="/company/about-us" element={<Overview />} />

            {/* Other Pages */}
            <Route path="/technology/services" element={<ItServices />} />
            <Route path="/smart-infra" element={<SmartInfra />} />
            <Route path="/group-companies" element={<GroupCompanies />} />
            <Route path="/join-us" element={<Joinus />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/* Route Aliases */}
            <Route path="/career" element={<Navigate to="/join-us" />} />
            <Route path="/contact-us" element={<Navigate to="/contact" />} />
          </Routes>
        </main>
        <RecentBlog />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
