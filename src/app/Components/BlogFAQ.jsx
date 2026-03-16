"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function BlogFaq() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What is the difference between registration and licence?",
      answer:
        "FSSAI Registration is required for small food businesses with turnover below ₹12 lakhs, while an FSSAI License is required for larger food businesses depending on their turnover and scale of operations.",
    },
    {
      question: "What type is required for food manufacturing?",
      answer:
        "Food manufacturing businesses generally require an FSSAI State License or Central License depending on their production capacity and annual turnover.",
    },
    {
      question: "Can a small food seller apply for FSSAI Registration?",
      answer:
        "Yes, small food sellers such as street vendors, petty retailers, and home-based food businesses can apply for FSSAI Basic Registration.",
    },
    {
      question: "What is the penalty for not obtaining FSSAI?",
      answer:
        "Operating a food business without FSSAI registration or license can lead to penalties up to ₹5 lakhs and possible closure of the business.",
    },
    {
      question: "How does FssaiLicense assist in deciding the correct category?",
      answer:
        "FssaiLicense evaluates your business type, turnover, and operational scale to determine whether you need FSSAI Registration, State License, or Central License.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">FAQs</h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left"
              >
                <span className="text-gray-700 font-medium">
                  {faq.question}
                </span>

                {active === index ? (
                  <Minus className="text-blue-600" size={18} />
                ) : (
                  <Plus className="text-blue-600" size={18} />
                )}
              </button>

              {/* Answer */}
              {active === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
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