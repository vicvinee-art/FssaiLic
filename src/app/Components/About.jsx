import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-gray-50 py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Flex Wrapper */}
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* LEFT – Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="./abouthero-bg.png"
              alt="FSSAI Background"
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-full object-cover lg:min-h-[500px]"
            />
          </div>

          {/* RIGHT – Content */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center">

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
              About FSSAI
            </h3>

            {/* Accent Line */}
            <div className="w-20 sm:w-24 h-1 bg-[#2E7D32] mt-4 rounded-full"></div>

            {/* Content */}
            <p className="mt-6 md:mt-8 text-base sm:text-lg leading-relaxed text-[#1E293B]">
              Safe, clean and wholesome food is indispensable for the health and 
              welfare of consumers. Food is highly prone to contamination and 
              adulteration, which makes regulatory supervision essential.
            </p>

            <p className="mt-4 md:mt-6 text-base sm:text-lg leading-relaxed text-[#1E293B]">
              The Food Safety and Standards Authority of India (FSSAI) was established 
              under the Food Safety and Standards Act, 2006 under the Ministry of Health 
              and Family Welfare, Government of India.
            </p>

            <p className="mt-4 md:mt-6 text-base sm:text-lg leading-relaxed text-[#1E293B]">
              Obtaining FSSAI registration or licence demonstrates regulatory compliance, 
              builds credibility, and ensures consumer trust in your food business.
            </p>

            {/* CTA */}
            <div className="mt-8 md:mt-10">
              <Link
                href="/apply-now"
                className="inline-block w-full sm:w-auto text-center bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-xl font-semibold text-white shadow-lg"
              >
                Apply for FSSAI License
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
