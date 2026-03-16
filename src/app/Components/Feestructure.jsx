"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FeeStructure() {
  const [active, setActive] = useState(1);

  const plans = [
    {
      title: "Basic Registration",
      price: "₹2,000",
      gov: "₹100",
      color: "orange",
      features: [
        "Small Food Businesses",
        "Turnover up to ₹12 Lakhs",
        "Documentation Assistance",
        "Application Filing Support",
      ],
    },
    {
      title: "Central License",
      price: "₹7,000",
      gov: "₹7,500",
      color: "purple",
      popular: true,
      features: [
        "Large Food Businesses",
        "Turnover above ₹20 Cr",
        "Expert Consultation",
        "Fast Processing",
        "Dedicated Support",
      ],
    },
    {
      title: "State License",
      price: "₹5,000",
      gov: "₹2,000 – ₹5,000",
      color: "indigo",
      
      features: [
        "Medium Food Businesses",
        "Turnover ₹12L – ₹20 Cr",
        "Complete Documentation",
        "Department Follow-up",
        "Priority Processing",
      ],
    },
    
  ];

  const colorClasses = {
    orange: {
      text: "text-orange-600",
      btn: "bg-orange-600 hover:bg-orange-700",
    },
    indigo: {
      text: "text-indigo-600",
      btn: "bg-indigo-600 hover:bg-indigo-700",
    },
    purple: {
      text: "text-purple-600",
      btn: "bg-purple-600 hover:bg-purple-700",
    },
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Fee Structure
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {plans.map((plan, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActive(index)}
                whileHover={{
                  y: -12,
                  scale: 1.04,
                }}
                animate={{
                  scale: isActive ? 1.12 : 0.95,
                  y: isActive ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className={`relative cursor-pointer rounded-2xl p-8 border bg-white shadow-lg 
                ${isActive ? "shadow-2xl z-20" : "opacity-90"}`}
              >

                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {plan.title}
                </h3>

                <div className={`text-4xl font-bold mb-2 ${colorClasses[plan.color].text}`}>
                  {plan.price}
                </div>

                <p className="text-gray-500 mb-6">
                  Service Fee
                </p>

                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>
                    Government Fee –{" "}
                    <span className="font-semibold text-green-600">
                      {plan.gov}
                    </span>
                  </li>

                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>

                <Link href="/apply-now"
                  className={`w-full text-white py-3 px-3 rounded-lg font-semibold transition ${colorClasses[plan.color].btn}`}
                >
                  Apply Now
                </Link>

              </motion.div>
            );
          })}

        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700">
            <a
              href="/contact-us"
              className="font-semibold hover:text-orange-500"
            >
              Contact Us
            </a>{""} for personalized assistance or to discuss custom requirements
            and know more about the fee structure!
          </p>
        </div>

      </div>
    </section>
  );
}