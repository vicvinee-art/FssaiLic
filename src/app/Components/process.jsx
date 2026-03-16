"use client";

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We begin with a detailed consultation to understand your business requirements and determine the appropriate license category.",
    },
    {
      number: "2",
      title: "Documentation",
      description:
        "Our team assists you in preparing and verifying all required documents to ensure complete compliance.",
    },
    {
      number: "3",
      title: "Application Filing",
      description:
        "We accurately file your application with the concerned authority and track the process for timely approval.",
    },
    {
      number: "4",
      title: "License Issued",
      description:
        "Upon successful verification and approval, your license is issued and delivered to you.",
    },
  ];

  return (
    <section className="bg-[#F3F4F6] py-24 px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937]">
          Our Simple{" "}
          <span className="text-[#F97316]">
            4-Step Process
          </span>
        </h2>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E5E7EB]"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#F97316] text-white font-bold text-lg">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-[#1F2937]">
                {step.title}
              </h3>

              {/* Orange Underline */}
              <div className="mt-3 h-[3px] w-16 bg-[#F97316] rounded-full"></div>

              {/* Description */}
              <p className="mt-6 text-[#6B7280] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}