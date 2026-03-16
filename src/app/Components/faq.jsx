"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is FSSAI License mandatory for small food businesses?",
    answer:
      "Yes. Even small food businesses must obtain FSSAI Registration or License depending on their annual turnover and business type.",
  },
  {
    question: "Who issues the FSSAI License in India?",
    answer:
      "FSSAI License is issued by the Food Safety and Standards Authority of India (FSSAI) through the FoSCoS portal.",
  },
  {
    question: "How long does it take to get an FSSAI License?",
    answer:
      "Generally, it takes 7–30 working days depending on the license type and approval from the concerned authority.",
  },
  {
    question: "What is the validity of an FSSAI License?",
    answer:
      "An FSSAI License can be issued for 1 to 5 years based on the applicant’s choice at the time of application.",
  },
  {
    question: "Can I operate my food business without FSSAI?",
    answer:
      "No. Operating without an FSSAI License is illegal and may attract heavy penalties and business closure.",
  },
  {
    question: "Is FSSAI License required for cloud kitchens and home kitchens?",
    answer:
      "Yes. Cloud kitchens, home-based food businesses, restaurants, and food delivery units must obtain FSSAI Registration or License.",
  },
  {
    question: "Do I need renewal of FSSAI License?",
    answer:
      "Yes. Renewal must be applied for at least 30 days before expiry to avoid penalties or cancellation.",
  },
  {
    question: "Can fssailicense.in help with FSSAI registration and renewal?",
    answer:
      "Yes. We provide complete assistance including documentation, application filing, compliance, and renewal support.",
  },
];

export default function FssaiFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md border border-gray-200 transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}