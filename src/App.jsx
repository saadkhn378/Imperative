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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
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

            {/* Outsourcing - KPO */}
            <Route path="/outsourcing/kpo/research-analysis" element={<ResearchAnalysis />} />
            <Route path="/outsourcing/kpo/social-media" element={<SocialMedia />} />
            <Route path="/outsourcing/kpo/healthcare" element={<HealthCare />} />
            <Route path="/outsourcing/kpo/lpo" element={<LegalProcess />} />
            <Route path="/outsourcing/kpo/research-development" element={<ResearchDevelopment />} />

            {/* Other Pages */}
            <Route path="/digital-product" element={<DigitalProduct />} />
            <Route path="/smart-infra" element={<SmartInfra />} />
            <Route path="/group-companies" element={<GroupCompanies />} />
            <Route path="/join-us" element={<Joinus />} />
            <Route path="/contact" element={<Contact />} />

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
