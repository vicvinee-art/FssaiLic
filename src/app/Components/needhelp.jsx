"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";

export default function HelpWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">

      {/* ACTION BUTTONS */}
      {open && (
        <div className="flex flex-col items-end gap-3">

          {/* APPLY */}
          <Link
            href="/apply-now"
            className="flex items-center gap-2 bg-orange-500 text-white px-4 py-3 rounded-full shadow-lg animate-bounce hover:scale-105 transition"
          >
            <FiFileText size={18} />
            <span className="text-sm font-semibold">Apply Now</span>
          </Link>

          {/* CALL */}
          <a
            href="tel:+919910774687"
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg animate-bounce hover:scale-105 transition"
          >
            <FaPhoneAlt size={16} />
            <span className="text-sm font-semibold">Call</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/+919910774687"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg animate-bounce hover:scale-105 transition"
          >
            <FaWhatsapp size={18} />
            <span className="text-sm font-semibold">WhatsApp</span>
          </a>

        </div>
      )}

      {/* NEED HELP BUBBLE */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-amber-500 text-white px-5 py-3 rounded-full shadow-xl animate-bounce hover:scale-105 transition font-semibold"
      >
        Need Help?
      </button>

    </div>
  );
}