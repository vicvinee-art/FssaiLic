"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b1b3b] text-gray-300 pt-14 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">

        {/* Logo & About */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded">
              <Image
                src="./fssaili-logo.png"
                alt="FSSAI License Logo"
                width={150}
                height={20}
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            We assist businesses with FSSAI registration, state and central
            licenses, compliance, and regulatory support so you can focus on
            growing your food business.
          </p>
        </div>

        {/* Offices with Plus Code Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Offices</h3>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <Link
                href="https://maps.app.goo.gl/hRQubpErYWQLca967"
                target="_blank"
              >
                <MapPin size={16} className="hover:text-orange-400 transition cursor-pointer" />
              </Link>
              Delhi +91 99107 74687
            </li>

            <li className="flex items-center gap-2">
              <Link
                href=""
                target="_blank"
              >
                <MapPin size={16} className="hover:text-orange-400 transition cursor-pointer" />
              </Link>
              Noida +91 99107 97080
            </li>

            <li className="flex items-center gap-2">
              <Link
                href=""
                target="_blank"
              >
                <MapPin size={16} className="hover:text-orange-400 transition cursor-pointer" />
              </Link>
              Gurugram +91 9540034687
            </li>

            <li className="flex items-center gap-2">
              <Link
                href=""
                target="_blank"
              >
                <MapPin size={16} className="hover:text-orange-400 transition cursor-pointer" />
              </Link>
              Lucknow +91 99107 92080
            </li>

          </ul>
        </div>

        {/* About / Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">About/Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about-us"
                className="hover:text-orange-400 transition cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 99107 74687
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@fssailicense.in
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-orange-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-orange-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-orange-400 transition">
                Refund & Cancellation
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-orange-400 transition" />
            <Linkedin className="cursor-pointer hover:text-orange-400 transition" />
            <Youtube className="cursor-pointer hover:text-orange-400 transition" />
            <Facebook className="cursor-pointer hover:text-orange-400 transition" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2026 Lawfinity India Pvt Ltd — All rights reserved.
      </div>
    </footer>
  );
}
