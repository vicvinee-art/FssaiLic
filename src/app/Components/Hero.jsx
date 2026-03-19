"use client";

import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const onlyLetters = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({ ...formData, name: onlyLetters });
    } else if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, mobile: onlyNumbers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formPayload = new FormData();
formPayload.append("name", formData.name);
formPayload.append("email", formData.email);
formPayload.append("phone", formData.phone);
formPayload.append("source", "Consultation");

await fetch("https://vicvinee-art.github.io/FssaiLic/", {
  method: "POST",
  mode: "no-cors",
  body: formPayload,
});

      setMessage("🎉 Consultation request submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
       
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      setMessage("❌ Submission failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('./herobg-bg.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray/40"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        

  {/* LEFT CONTENT */}
<div className="h-full flex flex-col justify-center">

  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
    <span className="text-orange-500">FSSAI Registration</span>{" "}
    <span className="text-green-600">& License</span>
  </h1>

  <p className="mt-6 text-lg leading-relaxed text-gray-700">
    Safe, clean and wholesome food is essential for consumers.
    Get your <span className="text-orange-500 font-semibold">FSSAI Registration</span> or{" "}
    <span className="text-green-600 font-semibold">License</span> with expert guidance
    and complete compliance support.
  </p>

</div>
  {/* RIGHT FORM */}
  <div className=" bg-white p-8 rounded-2xl shadow-2xl border border-gray-200 h-full">
    
    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-6 text-center">
      Free Consultation
    </h3>

    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-[#1E3A8A] mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 
          text-black placeholder-gray-500
          focus:ring-2 focus:ring-[#FB923C] focus:border-[#FB923C] 
          outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[#1E3A8A] mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 
          text-black placeholder-gray-500
          focus:ring-2 focus:ring-[#FB923C] focus:border-[#FB923C] 
          outline-none"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-[#1E3A8A] mb-1">
          Mobile Number
        </label>
        <input
          type="tel"
          name="mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter 10-digit mobile number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 
          text-black placeholder-gray-500
          focus:ring-2 focus:ring-[#FB923C] focus:border-[#FB923C] 
          outline-none"
          minLength={10}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FB923C] hover:bg-[#F97316] text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md"
      >
        {loading ? "Submitting..." : "Request Call Back"}
      </button>

      {message && (
        <p className="text-green-600 text-center font-semibold mt-3">
          {message}
        </p>
      )}

    </form>
  </div>

</div>
    </section>
  );
}
