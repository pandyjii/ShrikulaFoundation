import React, { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "", // Added message field
  });

  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(""); // For success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.contactNumber) {
      setError("Name, email, and contact number are required.");
      return false;
    }
    setError(""); // Clear error if all fields are filled
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("https://api-dbaxa3zxka-uc.a.run.app/srikula/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            contactNumber: formData.contactNumber,
          }), // Send only the required fields
        });

        if (response.ok) {
          setSuccess("Thank you for your message! We will get back to you soon.");
          setFormData({ name: "", email: "", contactNumber: "", message: "" }); // Clear form
        } else {
          setError("Failed to submit the form. Please try again later.");
        }
      } catch (error) {
        console.error("Error during submission:", error);
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2"
              placeholder="Your Contact Number"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md mt-2 h-32 resize-none"
              placeholder="Your Message (Optional)"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#BA451C] text-white font-medium py-2 rounded-md "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
