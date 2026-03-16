"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50 shadow-md sticky top-0 z-50 py-2">
      <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/fssaili-logo.png"
            alt="FSSAI License Logo"
            width={140}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 font-medium text-gray-700 items-center">
          <Link href="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link href="/fssai-registration" className="hover:text-orange-500 transition">
            FSSAI Registration
          </Link>

          <Link href="/fssai-central" className="hover:text-orange-500 transition">
            FSSAI Central License
          </Link>

          <Link href="/fssai-state" className="hover:text-orange-500 transition">
            FSSAI State License
          </Link>

          <Link href="/blogs" className="hover:text-orange-500 transition">
            Blogs
          </Link>

          <Link href="/contact-us" className="hover:text-orange-500 transition">
            Contact Us
          </Link>

          <Link
            href="/apply-now"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition shadow-md"
          >
            Apply Now
          </Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-4 text-gray-700 font-medium">

            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link href="/fssai-registration" onClick={() => setIsOpen(false)}>
              FSSAI Registration
            </Link>

            <Link href="/fssai-central" onClick={() => setIsOpen(false)}>
              FSSAI Central License
            </Link>

            <Link href="/fssai-state" onClick={() => setIsOpen(false)}>
              FSSAI State License
            </Link>

            <Link href="/blogs" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>

            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

            <Link
              href="/apply-now"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-center hover:bg-orange-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}