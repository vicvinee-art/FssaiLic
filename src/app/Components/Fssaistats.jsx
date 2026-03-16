"use client";
import Link from "next/link";
import { FileCheck, Users, Award, } from "lucide-react";

export default function FssaiStatsSection() {
  return (
    <section className="bg-[#F1F8F4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2E7D32] mb-14">
          Numbers Don’t Lie – We’re Growing Fast!
        </h2>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#A5D6A7] rounded-2xl p-10 text-center shadow-lg hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-[#F97316]">
              <FileCheck size={40} />
            </div>
            <h3 className="text-4xl font-bold text-[#2E7D32] mb-2">500+</h3>
            <p className="text-lg font-medium text-gray-600">
              FSSAI Licenses Approved
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#A5D6A7] rounded-2xl p-10 text-center shadow-lg hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-[#F97316]">
              <Users size={40} />
            </div>
            <h3 className="text-4xl font-bold text-[#2E7D32] mb-2">2,000+</h3>
            <p className="text-lg font-medium text-gray-600">
              Food Business Operators Assisted
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#A5D6A7] rounded-2xl p-10 text-center shadow-lg hover:scale-105 transition duration-300">
            <div className="flex justify-center mb-4 text-[#F97316]">
              <Award size={40} />
            </div>
            <h3 className="text-4xl font-bold text-[#2E7D32] mb-2">8+ Years</h3>
            <p className="text-lg font-medium text-gray-600">
              Experience in FSSAI Compliance
            </p>
          </div>

        </div>

        {/* Optional CTA */}
        <div className="text-center mt-14">
          <Link href="/apply-now" className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition duration-300">
            Get Started Today
          </Link>
        </div>

      </div>
    </section>
  );
}