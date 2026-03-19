"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const ConsultationModal = ({
  isOpen,
  onClose,
  title = "Get Free Consultation",
  buttonText = "SUBMIT",
  defaultService = "",
}) => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, service: defaultService }));
  }, [defaultService]);

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
      const response = await fetch("https://vicvinee-art.github.io/FssaiLic/", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: defaultService,
        });
        setErrors({});
      } else {
        setMessage("Something went wrong.");
      }
    } catch {
      setMessage("Server error. Please try again later.");
    }

    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md ">

      <div className="bg-white w-full max-w-lg mx-4 p-8 rounded-2xl shadow-2xl relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-black hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
          {title}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Full Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black focus:ring-2 focus:ring-orange-500 outline-none"
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
            placeholder="Enter Your Email Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black focus:ring-2 focus:ring-orange-500 outline-none"
          />

          {/* Phone */}
          <div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Mobile Number"
              required
              maxLength={10}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black placeholder-black focus:ring-2 focus:ring-orange-500 outline-none"
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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-black focus:ring-2 focus:ring-orange-500 outline-none"
          >
            <option value="" disabled>
              Select Service
            </option>
            <option>FSSAI Registration</option>
            <option>FSSAI Central License</option>
            <option>FSSAI State License</option>
            <option>Renewal</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition font-semibold"
          >
            {loading ? "Submitting..." : buttonText}
          </button>

          {message && (
            <p className="text-sm mt-3 text-center text-black">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;
