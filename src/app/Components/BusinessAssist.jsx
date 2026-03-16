"use client";

import { Percent, Users, Headphones } from "lucide-react";

export default function BusinessAssistance() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          We Provide Full Assistance In <br />
          Your Business
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
                <Percent size={50} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Zero-Error Documentation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              100% accuracy in paperwork to avoid delays, rejections, or penalties.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
                <Users size={50} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ongoing Compliance Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We don’t stop at licences — we help you stay compliant year-round.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-10 hover:shadow-2xl transition duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-md">
                <Headphones size={50} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Support 24/7
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We help diagnose processes in the company. We provide recommendations on process optimization.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}