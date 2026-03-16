"use client";

import { Building2, UserCheck, Briefcase, User } from "lucide-react";

export default function LicenseTypes() {
  return (
    <section className="bg-[#F8FAFC] py-20 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Top Badge 
        <div className="inline-flex items-center gap-2 bg-[#0B1B3B] text-white px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-md">
          <span className="text-[#F97316]">●</span> Types of License
        </div>*/}

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B3B]">
          Types Of{" "}
          <span className="text-[#F97316]">
            FSSAI License
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-[#1E293B] max-w-3xl mx-auto text-lg">
          FSSAI licensing is categorized according to the scale and turnover of your food business.
          Selecting the appropriate license type is essential for regulatory compliance and
          uninterrupted business growth. The primary FSSAI license categories include:
        </p>

        {/* Cards Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 text-left">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F5E9] p-3 rounded-xl">
                <Building2 size={28} className="text-[#2E7D32]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1B3B]">
                FSSAI Registration (Basic)
              </h3>
            </div>

            <p className="mt-6 text-[#1E293B] leading-relaxed">
              Every petty Food Business Operator (FBO) must register with FSSAI
              before starting or continuing a food business. Suitable for small
              food businesses and startups with annual turnover up to ₹12 lakh,
              including home-based manufacturers and small vendors.
            </p>

            <div className="mt-6 h-1 w-24 bg-[#F97316] rounded-full"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F5E9] p-3 rounded-xl">
                <UserCheck size={28} className="text-[#2E7D32]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1B3B]">
                State FSSAI License
              </h3>
            </div>

            <p className="mt-6 text-[#1E293B] leading-relaxed">
              Required for medium-sized food businesses with annual turnover
              between ₹12 lakh and ₹20 crore. Applicable for manufacturers,
              processors, storage units, transporters, and distributors operating
              within a single state.
            </p>

            <div className="mt-6 h-1 w-24 bg-[#F97316] rounded-full"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F5E9] p-3 rounded-xl">
                <Briefcase size={28} className="text-[#2E7D32]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1B3B]">
                Central FSSAI License
              </h3>
            </div>

            <p className="mt-6 text-[#1E293B] leading-relaxed">
              Mandatory for large food businesses with turnover above ₹20 crore,
              multi-state operations, import-export businesses, or those supplying
              to government agencies and large institutions.
            </p>

            <div className="mt-6 h-1 w-24 bg-[#F97316] rounded-full"></div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E2E8F0]">
            <div className="flex items-center gap-4">
              <div className="bg-[#E8F5E9] p-3 rounded-xl">
                <User size={28} className="text-[#2E7D32]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1B3B]">
                FSSAI Renewal / Modification
              </h3>
            </div>

            <p className="mt-6 text-[#1E293B] leading-relaxed">
              Renew your FSSAI license before expiry to avoid penalties.
              Apply for modification in case of changes in business details,
              address, product category, or turnover.
            </p>

            <div className="mt-6 h-1 w-24 bg-[#F97316] rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}