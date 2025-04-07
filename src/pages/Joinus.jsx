import React, { useState, useEffect } from "react";
import WhyJoinUs from "../components/WhyJoinUs";
import JobOpenings from "../components/JobOpenings";
import ApplicationForm from "../components/ApplicationForm";
import FreshersProgram from "../components/FreshersProgram";

function Joinus() {
  const [selectedJob, setSelectedJob] = useState(null);
  
  // Set the first job as selected by default when component mounts
  useEffect(() => {
    // This will be handled by the JobOpenings component
  }, []);
  
  return (
    <>
      <main className="font-met pt-20 bg-gray-50">
        {/* Why Join Us Section */}
        <WhyJoinUs />
        
        {/* Job Openings and Application Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our team of talented professionals and help us shape the future of technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Job Listings - Takes 1/3 of the width on large screens */}
              <div className="lg:col-span-1">
                <JobOpenings selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
              </div>
              
              {/* Application Form - Takes 2/3 of the width on large screens */}
              <div className="lg:col-span-2">
                <ApplicationForm selectedJob={selectedJob} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Freshers Program Section */}
        <FreshersProgram />
      </main>
    </>
  );
}

export default Joinus;
