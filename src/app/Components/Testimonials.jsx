"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Anil Yadav",
    company: "Shaperz India Grain Private Limited",
    logo: "/indiagrain.png", 
    comment:
      "From FSSAI to Trade License, Lawfinity handled all our approvals efficiently. One-stop solution for all licensing needs.",
  },
  {
    name: "Rahul Sharma",
    company: "company 2",
    logo: "/company2.png",
    comment:
      "Excellent service and professional support. Our FSSAI registration was completed quickly and smoothly.",
  },
  {
    name: "sobhit kumar",
    company: "company 3",
    logo: "/company3.png",
    comment:
      "Very reliable team. They guided us through every compliance requirement with clarity and speed.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000); // 1 sec delay

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            <span className="text-black">Client</span>{" "}
            <span className="text-black">Testimonials</span>
          </h2>
          <p className="text-orange-500 mt-2">
            What our customers say about our services
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative bg-gray-50 rounded-2xl shadow-md p-8 flex items-center gap-6">

          {/* Left Chevron */}
          <button
            onClick={prevSlide}
            className="absolute left-4 bg-white shadow rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronLeft className="text-blue-600" />
          </button>

          {/* Logo */}
          <div className="min-w-[120px]">
            <Image
              src={testimonial.logo}
              alt={testimonial.company}
              width={100}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 italic mb-4">
              “{testimonial.comment}”
            </p>

            <h3 className="font-semibold text-blue-600 text-lg">
              {testimonial.name}
            </h3>

            <p className="text-green-600 text-sm">
              {testimonial.company}
            </p>
          </div>

          {/* Right Chevron */}
          <button
            onClick={nextSlide}
            className="absolute right-4 bg-white shadow rounded-full p-2 hover:bg-gray-100"
          >
            <ChevronRight className="text-orange-500" />
          </button>
        </div>
      </div>
    </section>
  );
}