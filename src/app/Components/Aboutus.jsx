import React from "react";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-white py-12 md:py-16">
      
      {/* Container Same as Navbar Width */}
      <div className="max-w-7xl mx-auto px-3">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-3">
          Home <span className="mx-2">{">>"}</span>
          <span className="bg-orange-400 bg-clip-text text-transparent font-medium">
            About Us
          </span>
        </div>

        {/* Badge */}
        

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              About Us
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="bg-gradient-to-r from-orange-500 to-blue-900 bg-clip-text text-transparent font-semibold">
                FssaiLicense.in
              </span>{" "}
              Safe, Clean and wholesome food is indispensable for the health and welfare of the consumers of any country. Also, food is a commodity that is very prone to contamination and adulteration.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              If you are planning to start a food-related business or are already engaged in such a business, then you should comply with the registration or licensing requirements of FSSAI.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Fssailicence.in has a team of dedicated and skilled experts with vast knowledge and experience in FSSAI registration and licenses. We have served more than 5,000 Food Business Operators and provide professional assistance and procedural support.
            </p>

            <Link href="/apply-now" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Get Started Now
            </Link>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1536305030588-45dc07a2a372?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Food"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Fssai License
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                We handle the entire license process so you can focus on
                growing your food business.
              </p>

              <div className="text-sm text-gray-500">
                Rated{" "}
                <span className="text-blue-900 font-bold">4.8/5</span> by
                clients (2026)
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}