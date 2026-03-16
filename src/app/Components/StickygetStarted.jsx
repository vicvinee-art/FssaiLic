"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyButtons() {
  return (
    <>
      {/* Get Started Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <Link
          href="/apply-now" // 👈 Change to your required page
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Rocket size={18} />
          Get Started
        </Link>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919910774687" // 👈 Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </>
  );
}