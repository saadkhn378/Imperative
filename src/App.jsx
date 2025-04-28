import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
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
import PartnersShowcase from "./sections/PartnersShowcase";
import ConsultingServices from "./sections/ConsultingServices";
import { Glance } from "./sections/Glance";
import PurposeSection from "./sections/PurposeSection";
import GroupCompani from "./sections/GroupCompani";
import GlobalPresence from "./sections/GlobalPresence";
import RecentBlog from "./sections/RecentBlog";
import IndustriesSection from "./sections/IndustriesSection";
import Bfsi from "./pages/industries/bfsi";
import Healthcare from "./pages/industries/Healthcare";
import Retail from "./pages/industries/Retail";
import Media from "./pages/industries/Media";
import BackOffice from "./pages/industries/BackOffice";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-1"> {/* Pushes footer to bottom */}
          <Routes>
            <Route path="/know-us/overview" element={<Overview />} />
            <Route path="/know-us/awards-recognitions" element={<AwardsRecognition/>}/>
            <Route path="/know-us/leadership-team" element={<Leadership/>}/>
            <Route path="/know-us/our-team" element={<OurTeam/>}/>
            <Route path="/join-us" element={<Joinus/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/group-companies" element={<GroupCompanies/>}/>
            <Route path="/industries-we-serve" element={<IndustriesWeServe/>}/>
            <Route path="/digital-product" element={<DigitalProduct/>}/>
            <Route path="/smart-infra" element={<SmartInfra/>}/>
            <Route path="/industries/bfsi" element={<Bfsi/>}/>
            <Route path="/industries/healthcare" element={<Healthcare/>}/>
            <Route path="/industries/retail" element={<Retail/>}/>
            <Route path="/industries/media" element={<Media/>}/>
            <Route path="/industries/telecom" element={<BackOffice/>}/>

            <Route path="/" element={
              <>
                <Hero />
                <Glance/>
                <PurposeSection/>
                <PartnersShowcase/>
                <IndustriesSection/>
                <Testimonials />
                <GroupCompani/>
                <GlobalPresence/>
              </>
            } />
          </Routes>
        </main>
        <RecentBlog/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


