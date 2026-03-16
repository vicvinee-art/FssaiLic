"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "1.	Who is required to get the FSSAI Registration?",
    answer:
      "Petty Food Business Operators whose annual turnover does not exceed ₹12 lakhs are required to get registration, among many other criteria as discussed above.",
  },
  {
    question: "2.	What is the validity period of FSSAI Registration?",
    answer:
      "FSSAI Registration is valid for 1 to 5 years, depending on the application of registration.  Food Business Operators (FBOs) can obtain registration for any period of 1 year, 2 years, 3 years, 4 years, or 5 years.",
  },
  {
    question: "3.	If an FBO operates its business in more than one states, whether only Registration would be enough?",
    answer:
      "If an FBO operates in two or more States, it must obtain a Central License for its Registered/Head Office, along with separate licenses or registrations for each unit based on the unit’s capacity or turnover from the relevant Central or State authority. Any food business activity carried out at the Registered/Head Office must also be included in the Head Office license.",
  },
  {
    question: "4.	Can the FBOs exhibit the Registration Card at their business premises?",
    answer:
      "Yes, after the Registration, the registration Certificate must be displayed at the business premises of the FBOs.",
  },
  {
    question: "5.	How to renew the registration of FBO?",
    answer:
      "Renewal of registration can be done on the portal of FoSCoS. The registration cannot be renewed if its renewal is not applied for at least 30 days before the expiry of the registration period. The application window for renewal opens before 180 days of the expiry of the registration certificate. After the expiration of registration, FBO has to apply afresh.",
  },
  {
    question: "6.	In what circumstances will the application be rejected?",
    answer:
      "The Licensing Officer can reject the application in the case when the required information is not provided within the stipulated time of 30 days.",
  },
  
];

export default function FssaiFAQreg() {
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