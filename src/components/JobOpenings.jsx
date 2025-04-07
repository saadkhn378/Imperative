import React, { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";

// Sample job openings data
const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We're looking for a Senior Software Engineer to join our core product team. You'll be responsible for designing, developing, and maintaining our flagship products.",
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript, TypeScript, and React",
      "Experience with Node.js and RESTful APIs",
      "Knowledge of cloud services (AWS, Azure, or GCP)",
      "Bachelor's degree in Computer Science or related field",
    ],
    responsibilities: [
      "Design and implement new features for our core products",
      "Write clean, maintainable, and efficient code",
      "Collaborate with cross-functional teams to define and implement new features",
      "Troubleshoot and fix bugs in existing applications",
      "Mentor junior developers and conduct code reviews",
    ],
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our design team to create intuitive and engaging user experiences for our digital products. You'll work closely with product managers and engineers to bring designs to life.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency in design tools like Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating user-centered design process",
      "Experience with design systems and component libraries",
      "Excellent communication and collaboration skills",
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Develop and maintain design systems",
      "Collaborate with engineers to ensure design implementation",
      "Stay updated with latest design trends and best practices",
    ],
  },
  {
    id: 3,
    title: "Product Manager",
    department: "Product",
    location: "Austin, TX",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We're seeking a Product Manager to drive the strategy and execution of our product initiatives. You'll work at the intersection of business, technology, and user experience.",
    requirements: [
      "4+ years of experience in product management",
      "Strong analytical and problem-solving skills",
      "Experience with agile methodologies",
      "Excellent communication and stakeholder management",
      "Technical background or understanding of software development",
    ],
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and prioritize product requirements",
      "Work closely with engineering, design, and marketing teams",
      "Analyze market trends and competitive landscape",
      "Track and measure product performance metrics",
    ],
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our infrastructure team to build and maintain our cloud-based systems. You'll help ensure our applications are reliable, scalable, and secure.",
    requirements: [
      "3+ years of experience in DevOps or SRE roles",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with containerization (Docker, Kubernetes)",
      "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      "Understanding of CI/CD pipelines and automation",
    ],
    responsibilities: [
      "Design and implement cloud infrastructure",
      "Automate deployment and operational processes",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices",
      "Collaborate with development teams to improve system reliability",
    ],
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago, IL",
    type: "Full-time",
    experience: "2+ years",
    description:
      "We're looking for a Marketing Specialist to help grow our brand presence and drive customer acquisition. You'll be responsible for executing marketing campaigns across various channels.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Knowledge of SEO, SEM, and social media marketing",
      "Experience with marketing automation tools",
      "Strong analytical skills and data-driven approach",
      "Excellent written and verbal communication",
    ],
    responsibilities: [
      "Plan and execute marketing campaigns",
      "Create and optimize content for different channels",
      "Analyze campaign performance and provide insights",
      "Collaborate with design team on marketing materials",
      "Stay updated with latest marketing trends and best practices",
    ],
  },
];

function JobOpenings({ selectedJob, setSelectedJob }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [locationFilter, setLocationFilter] = useState("All");

  // Extract unique departments and locations for filters
  const departments = ["All", ...new Set(jobOpenings.map((job) => job.department))];
  const locations = ["All", ...new Set(jobOpenings.map((job) => job.location))];

  // Filter jobs based on search term and filters
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter;
    const matchesLocation = locationFilter === "All" || job.location === locationFilter;

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  // Set the first job as selected by default
  useEffect(() => {
    if (filteredJobs.length > 0 && !selectedJob) {
      setSelectedJob(filteredJobs[0]);
    }
  }, [filteredJobs, selectedJob, setSelectedJob]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      {/* Search and Filters */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search positions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select
              id="location"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-h-[600px] overflow-y-auto">
        {filteredJobs.length > 0 ? (
          <ul className="divide-y divide-gray-100">
            {filteredJobs.map((job) => (
              <li key={job.id}>
                <button
                  className={`w-full text-left p-4 transition-colors hover:bg-gray-50 ${
                    selectedJob && selectedJob.id === job.id ? "bg-orange-600/5 border-l-4 border-orange-600" : ""
                  }`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800">{job.title}</h3>
                      <div className="mt-1 flex flex-wrap gap-y-1 gap-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 ${
                        selectedJob && selectedJob.id === job.id ? "text-orange-600" : "text-gray-400"
                      }`}
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-8 text-center">
            <p className="text-gray-500">No job openings match your criteria.</p>
            <button
              className="mt-4 text-orange-600 hover:underline"
              onClick={() => {
                setSearchTerm("");
                setDepartmentFilter("All");
                setLocationFilter("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobOpenings;