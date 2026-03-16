import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Flex Wrapper */}
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* LEFT – Image (Foreground) */}
          <div className="w-full lg:w-1/2">
            <img
              src="/abouthero-bg.png"
              alt="FSSAI Background"
              className="w-full h-full object-cover min-h-[500px]"
            />
          </div>

          {/* RIGHT – Content */}
          <div className="w-full lg:w-1/2 bg-gray-50 from-gray-100 to-amber-50 p-10 md:p-14 flex flex-col justify-center">

            {/* Heading */}
            <h3 className="text-3xl md:text-4xl font-bold text-orange-500">
              About FSSAI
            </h3>

            {/* Accent Line */}
            <div className="w-24 h-1 bg-[#2E7D32] mt-4 rounded-full"></div>

            {/* Content */}
            <p className="mt-8 text-lg leading-relaxed text-[#1E293B]">
              Safe, clean and wholesome food is indispensable for the health and 
              welfare of consumers. Food is highly prone to contamination and 
              adulteration, which makes regulatory supervision essential.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#1E293B]">
              The Food Safety and Standards Authority of India (FSSAI) was established 
              under the Food Safety and Standards Act, 2006 under the Ministry of Health 
              and Family Welfare, Government of India.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#1E293B]">
              Obtaining FSSAI registration or licence demonstrates regulatory compliance, 
              builds credibility, and ensures consumer trust in your food business.
            </p>

            {/* CTA */}
            <div className="mt-10">
              
              <Link href="apply-now" className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-xl font-semibold text-white shadow-lg">
                Apply for FSSAI License
              </Link>
              
        
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}