"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1. Who is required to get the FSSAI State License?",
    answer:
      "Food Business Operators whose annual turnover exceeds ₹12 lakhs but is less than ₹20 Crores are required to obtain a State License, along with other prescribed eligibility criteria.",
  },
  {
    question: "2. What is the validity period of the FSSAI State License?",
    answer:
      "The State License is valid for 1 to 5 years, depending on the application. Food Business Operators (FBOs) can obtain the license for a period of 1 year, 2 years, 3 years, 4 years, or 5 years as per their requirement.",
  },
  {
    question: "3. Who is the issuing authority of the State License?",
    answer:
      "The State License is issued by the State Licensing Authority operating in each State. The State Licensing Authority consists of Designated Officers authorised to issue a State License, subject to compliance by the FBOs.",
  },
  {
    question:
      "4. Can the FBO exhibit the State License at its business premises?",
    answer:
      "Yes, after obtaining a State License, FBOs must display the License certificate at their business premises and mention the license number on their products.",
  },
  {
    question: "5. In what circumstances will the application be rejected?",
    answer:
      "The Licensing Officer may reject the application if the required information is not provided within the stipulated period of 30 days.",
  },
];

export default function FssaiFAQState() {
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
