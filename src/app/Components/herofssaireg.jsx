"use client";

import Link from "next/link";

export default function FssaiHero() {
  return (
    <section
      className="relative bg-cover bg-center py-24 px-6"
      style={{
        backgroundImage: "url('/herobg-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray/30"></div>

      <div className="relative max-w-7xl mx-auto flex items-center">

        {/* Left Content */}
        <div className="max-w-2xl text-blue-700">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-orange-600">FSSAI Registration</span>{" "}
            & Food License
          </h1>

          <p className="mt-6 text-lg text-black leading-relaxed">
            Start your food business legally with an official{" "}
            <span className="font-semibold text-orange-500">
              FSSAI Registration
            </span>{" "}
            or License. Our experts help you complete the process quickly
            with full documentation and compliance support.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <Link
              href="/apply-now"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg"
            >
              Apply Now
            </Link>

            

          </div>

        </div>

      </div>
    </section>
  );
}