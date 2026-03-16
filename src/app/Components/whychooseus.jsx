"use client";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  UserCheck,
  FileText,
  BadgePercent,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gradient-to-r from-gray-100 to-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
          <Award size={18} />
          Our Commitment
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          Why Choose <span className="text-orange-500">Us?</span>
        </h2>

        {/* Main Content Box */}
        <div className="bg-white border border-amber-200 rounded-3xl shadow-lg p-8 md:p-12 text-left mb-14">
          <div className="flex items-start gap-5">
            
            {/* Icon */}
            <div className="bg-amber-500 text-white p-4 rounded-2xl shadow-md">
              <CheckCircle size={28} />
            </div>

            {/* Content */}
            <p className="text-gray-600 text-lg leading-relaxed">
              FSSAILicence.co.in has helped numerous food businesses obtain their 
              FSSAI Licence quickly and efficiently. We offer expert consultancy 
              services at affordable charges. Our professional team assists you 
              from documentation and application filing to final licence approval. 
              Once you choose our services, you can relax while we handle the 
              complete FSSAI registration process on your behalf with full 
              transparency and dedication.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white border border-amber-200 rounded-2xl shadow-md p-8 text-left">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <UserCheck size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Expert Assistance
            </h3>
            <p className="text-gray-600">
              Professional guidance from documentation to FSSAI licence approval.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-amber-200 rounded-2xl shadow-md p-8 text-left">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <FileText size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Hassle-Free Process
            </h3>
            <p className="text-gray-600">
              We manage paperwork, application filing, and follow-ups on your behalf.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-amber-200 rounded-2xl shadow-md p-8 text-left">
            <div className="bg-amber-100 text-amber-600 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
              <BadgePercent size={26} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reasonable Charges
            </h3>
            <p className="text-gray-600">
              Affordable pricing with complete transparency and quality service.
            </p>
          </div>

        </div>

        {/* CTA Button */}
        <Link href="/apply-now" className="bg-amber-500 hover:bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition duration-300">
          Get Started Today
        </Link>

      </div>
    </section>
  );
}