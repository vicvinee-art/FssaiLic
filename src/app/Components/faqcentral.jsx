"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. Who is required to get the FSSAI Central License?",
    answer:
      "Food Business Operators whose annual turnover exceeds ₹20 Crores are required to obtain a Central License along with other prescribed eligibility criteria.",
  },
  {
    question: "2. What is the validity period of the FSSAI Central License?",
    answer:
      "The Central License is valid for 1 to 5 years, depending on the application. Food Business Operators (FBOs) can obtain the license for a period of 1 year, 2 years, 3 years, 4 years, or 5 years as per their requirement.",
  },
  {
    question:
      "3. If an FBO operates its business in more than one state, what license should be obtained?",
    answer:
      "If an FBO operates in two or more States, it must obtain a Central License for its Registered/Head Office, along with separate licenses or registrations for each unit based on the unit’s capacity or turnover from the relevant Central or State authority. Any food business activity carried out at the Registered/Head Office must also be included in the Head Office license.",
  },
  {
    question:
      "4. What license is applicable for FBO conducting import/export in the food business?",
    answer:
      "A Central License is mandatory for Food Business Operators involved in the import or export of food products.",
  },
  {
    question:
      "5. What is mandatory food safety auditing for Central License holders?",
    answer:
      "The Food Authority has issued an order mandating food safety auditing for FBOs holding a Central License and engaged in specified food business activities, as prescribed under the regulations.",
  },
];

export default function FssaiFAQCentral() {
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