"use client";
import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section
      className="relative w-full py-24 bg-center bg-cover"
      style={{
        backgroundImage: "url('./herobg-bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray/20"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">
        
        {/* Breadcrumb */}
        <div className="text-sm mb-6 text-orange-700">
          Home <span className="mx-2">››</span> Blog
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-500">
          Latest Blog
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg text-black mb-10">
          Stay updated with the latest factory license news and guides on
          Factorylicence.
        </p>

        {/* Search Box */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
            
            <input
              type="text"
              placeholder="Search topics: FSSAI License, Food Safety, Registration..."
              className="flex-1 px-5 py-3 text-gray-700 outline-none"
            />

            <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
              <Search size={18} />
              Search
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
