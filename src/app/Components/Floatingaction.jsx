"use client";
import { FaWhatsapp } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* APPLY NOW - MOBILE ONLY */}
      <Link
        href="/apply-now"
        className="lg:hidden flex items-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg animate-bounce hover:scale-105 transition"
      >
        <FiFileText size={18} />
        <span className="text-sm font-semibold">Apply Now</span>
      </Link>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/+91 99107 74687"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl animate-bounce hover:scale-110 transition"
      >
        <FaWhatsapp size={20} />
        <span className="hidden lg:block text-sm font-semibold">
          WhatsApp
        </span>
      </a>

    </div>
  );
}