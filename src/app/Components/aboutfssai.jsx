"use client";

export default function AboutFssaiHero() {
  return (
    <section className="w-full min-h-screen flex">

      {/* Left Background Image Section */}
      <div
        className="w-1/2 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/abouthero-bg.png')" }}
      />

      {/* Right Content Section */}
      <div className="w-1/2 flex items-center justify-center px-10 bg-white">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-800">
            About FSSAI
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            Safe, clean and wholesome food is indispensable for the health and
            welfare of consumers. Food is highly prone to contamination and
            adulteration, making regulatory supervision essential.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-5">
            The Food Safety and Standards Authority of India (FSSAI) was
            established under the Food Safety and Standards Act, 2006 under
            the Ministry of Health and Family Welfare, Government of India.
            It ensures hygiene and sanitary compliance by Food Business
            Operators across the country.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Obtaining FSSAI registration or licence demonstrates regulatory
            compliance, builds credibility, and ensures consumer trust in
            your food business.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold text-white shadow-lg">
            Apply for FSSAI License
          </button>

        </div>
      </div>

    </section>
  );
}