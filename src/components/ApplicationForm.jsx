import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Check, AlertCircle } from "lucide-react";

function ApplicationForm({ selectedJob }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resumeFile: null,
    coverLetter: "",
    linkedin: "",
    portfolio: "",
    heardAbout: "",
  });

  const [resumeFileName, setResumeFileName] = useState("");
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resumeFile: file }));
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a successful submission

    // Simulate API call
    setTimeout(() => {
      // Randomly succeed or fail for demonstration
      const success = Math.random() > 0.2;

      if (success) {
        setFormStatus("success");
        // Reset form after success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resumeFile: null,
          coverLetter: "",
          linkedin: "",
          portfolio: "",
          heardAbout: "",
        });
        setResumeFileName("");
      } else {
        setFormStatus("error");
      }

      // Clear status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  if (!selectedJob) {
    return (
      <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 h-full flex items-center justify-center">
        <p className="text-gray-500 text-center">Please select a job opening to apply.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
      <div className="p-6 bg-gray-50 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-800">{selectedJob.title}</h3>
        <div className="mt-1 flex flex-wrap gap-2 text-sm text-gray-600">
          <span>{selectedJob.department}</span>
          <span>•</span>
          <span>{selectedJob.location}</span>
          <span>•</span>
          <span>{selectedJob.type}</span>
        </div>
      </div>

      <div className="p-6">
        <form onSubmit={handleSubmit}>
          {/* Form Status Messages */}
          {formStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg ${
                formStatus === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
            >
              <div className="flex items-center">
                {formStatus === "success" ? (
                  <Check className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <p>
                  {formStatus === "success"
                    ? "Your application has been submitted successfully! We will contact you soon."
                    : "There was an error submitting your application. Please try again."}
                </p>
              </div>
            </motion.div>
          )}

          <h4 className="text-lg font-semibold mb-4 text-gray-800">Personal Information</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h4 className="text-lg font-semibold mb-4 text-gray-800">Professional Information</h4>

          <div className="mb-6">
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
              Resume/CV *
            </label>
            <div className="relative">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="sr-only"
                onChange={handleFileChange}
              />
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <Upload className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">
                    {resumeFileName ? resumeFileName : "Upload your resume (PDF, DOC, DOCX)"}
                  </span>
                </div>
              </label>
            </div>
            <p className="mt-1 text-xs text-gray-500">Max file size: 5MB</p>
          </div>

          <div className="mb-6">
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              value={formData.coverLetter}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="https://linkedin.com/in/yourprofile"
                value={formData.linkedin}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                Portfolio/Website
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
                placeholder="https://yourportfolio.com"
                value={formData.portfolio}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-1">
              How did you hear about us?
            </label>
            <select
              id="heardAbout"
              name="heardAbout"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-orange-600"
              value={formData.heardAbout}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="Job Board">Job Board</option>
              <option value="Company Website">Company Website</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-600/90 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplicationForm;