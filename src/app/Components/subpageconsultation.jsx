"use client";
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

    if (name === "name") {
      const onlyLetters = value.replace(/[0-9]/g, "");
      setFormData({ ...formData, name: onlyLetters });
      return;
    }

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Consultation request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
        setErrors({});
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setMessage("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="sticky top-24 w-full">

      <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">

        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          Get Free Consultation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 text-black-sm font-medium focus:ring-2 focus:ring-orange-500"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
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
            className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 text-black-sm font-medium focus:ring-2 focus:ring-orange-500"
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
              className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 text-black-sm font-medium focus:ring-2 focus:ring-orange-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full border text-black border-gray-300 rounded-lg px-4 py-3 text-black-sm font-medium focus:ring-2 focus:ring-orange-500"
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
            className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "GET FREE CONSULTATION"}
          </button>

          {message && (
            <p className="text-xs mt-2 text-center text-green-600">
              {message}
            </p>
          )}

        </form>

      </div>

    </div>
  );
};

export default Contact;