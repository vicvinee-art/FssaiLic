"use client"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Name validation (no digits allowed)
    if (name === "name") {
      const onlyLetters = value.replace(/[0-9]/g, "");
      setFormData({ ...formData, name: onlyLetters });
      return;
    }

    // ✅ Phone validation (only digits, max 10)
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, phone: onlyNumbers });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should not contain numbers.";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Mobile number must be exactly 10 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
     const formPayload = new FormData();
formPayload.append("name", formData.name);
formPayload.append("email", formData.email);
formPayload.append("phone", formData.phone);
formPayload.append("service", formData.service);
formPayload.append("source", "Contact page");

await fetch("https://vicvinee-art.github.io/FssaiLic/contact-us", {
  method: "POST",
  mode: "no-cors",
  body: formPayload,
});

      setMessage("🎉 Consultation request submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      setMessage("❌ Submission failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-500">
            Contact FssaiLicense.in – We’re Here To Help
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Fill out the form below or schedule a meeting with us at your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Consultation Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">

            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Get Free Consultation
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl font-semibold text-gray-800 focus:ring-2 focus:ring-orange-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl font-semibold text-gray-800 focus:ring-2 focus:ring-orange-500"
              />

              {/* Phone */}
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  required
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl font-semibold text-gray-800 focus:ring-2 focus:ring-orange-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service */}
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-xl font-semibold text-gray-800 focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select a service</option>
                <option>FSSAI Registration</option>
                <option>FSSAI Central License</option>
                <option>FSSAI State License</option>
                <option>Renewal</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:opacity-90 transition"
              >
                {loading ? "Submitting..." : "GET FREE CONSULTATION"}
              </button>

              {message && (
                <p className="text-xl mt-4 text-center text-gray-600">
                  {message}
                </p>
              )}

            </form>
          </div>

          {/* Office Section (Unchanged) */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              You Can Visit Our Offices
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Noida Office",
                  address:
                    "Coco County, Plot No. GH-03 C, Sector-10, Greater Noida West, Uttar Pradesh 201309",
                  phone: "+91 99107 97080",
                },
                {
                  title: "Gurugram Office",
                  address:
                    "GIS Avenue 51, Sector 92, Gurgaon 122505",
                  phone: "+91 95400 34687",
                },
                {
                  title: "Delhi Office",
                  address:
                    "T-10, Plot No.-7, 3rd Floor, Pankaj Plaza, Dwarka, New Delhi - 110078",
                  phone: "+91 99107 74687",
                },
                {
                  title: "Patna Office",
                  address:
                    "Anju Niwas, Nagina Vatika, Danapur, Near Crescent Garden,Rukanpura Patna 800014",
                  phone: "+91 99107 92080",
                },
                {
                  title: "Mumbai Office",
                  address:
                    "712, Shivai Plaza, 7th Floor, Marol Industrial Co-operative, Andheri-Kurla Road, Andheri (East), Mumbai 400059",
                  phone: "+91 99107 92080",
                },
                {
                  title: "Lucknow Office",
                  address:
                    "2nd Floor, JSV Hyundai Building CP-53, Lucknow 226021",
                  phone: "+91 99107 92080",
                },

              ].map((office, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-5 border border-gray-100"
                >
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-md inline-block mb-3">
                    {office.title}
                  </div>

                  <p className="text-gray-600 text-sm mb-3">
                    {office.address}
                  </p>

                  <p className="font-semibold text-gray-800 text-sm">
                    {office.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
