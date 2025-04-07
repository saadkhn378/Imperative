import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Footer from "./components/Footer";
import Overview from "./pages/Overview";
import StickyCursor from "./components/StickyCursor";
import Marquee from "./sections/Marquee";
import Industries from "./sections/Industries";
import Solutions from "./sections/Solutions";
import Joinus from "./pages/Joinus";
import Contact from "./pages/Contact";
import GroupCompanies from "./pages/GroupCompanies";
import IndustriesWeServe from "./pages/IndustriesWeServe";
import DigitalProduct from "./pages/DigitalProduct";
import SmartInfra from "./pages/SmartInfra";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <StickyCursor/>
        <Header />
        <main className="flex-1"> {/* Pushes footer to bottom */}
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/join-us" element={<Joinus/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/group-companies" element={<GroupCompanies/>}/>
            <Route path="/industries-we-serve" element={<IndustriesWeServe/>}/>
            <Route path="/digital-product" element={<DigitalProduct/>}/>
            <Route path="/smart-infra" element={<SmartInfra/>}/>

            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Marquee/>
                <Products />
                <Solutions/>
                <Services />
                <Industries/>
                <Testimonials />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


