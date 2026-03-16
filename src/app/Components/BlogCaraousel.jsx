"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "FSSAI REGISTRATION VS FSSAI LICENCE: KEY DIFFERENCES EXPLAINED FOR FOOD",
    category: "Licenses",
    subcategory: "Food License",
    date: "11 Mar 2026",
    views: 2,
    image: "/blogs/blog1.jpg",
    link: "/blog/fssai-registration-vs-fssai-licence",
  },
  {
    id: 2,
    title: "",
    category: "",
    subcategory: "",
    date: "",
    views: 3,
    image: "",
    link: "",
  },
  {
    id: 3,
    title: "",
    category: "",
    subcategory: "",
    date: "",
    views: 1,
    image: "",
    link: "",
  },

  /* Add more blogs here */
];

const BLOGS_PER_PAGE = 9;

export default function BlogCarousel() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);

  /* Filter */
  const filteredBlogs = blogs
    .filter((blog) => category === "All" || blog.category === category)
    .sort((a, b) =>
      sort === "recent"
        ? new Date(b.date) - new Date(a.date)
        : b.views - a.views
    );

  /* Pagination Logic */
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading + Sort */}
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <h2 className="text-2xl text-orange-600 font-semibold">Browse Articles</h2>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button
              onClick={() => setSort("recent")}
              className={`px-4 py-2 rounded ${
                sort === "recent"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              Most Recent
            </button>

            <button
              onClick={() => setSort("views")}
              className={`px-4 py-2 rounded ${
                sort === "views"
                  ? "bg-orange-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              Most Viewed
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          <div>
            <label className="text-sm text-black">Category</label>

            <div className="relative">
              <select
                onChange={(e) => {
                  setCategory(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full border rounded-md px-4 py-2 text-black  appearance-none"
              >
                <option>All</option>
                <option>Licenses</option>
              </select>

              <ChevronDown className="absolute right-3 top-3 text-black" />
            </div>
          </div>

          <div>
            <label className="text-sm text-black">Subcategory</label>

            <div className="relative">
              <select className="w-full border rounded-md px-4 py-2 text-black appearance-none">
                <option>All</option>
                <option>Food License</option>
                <option>Food Safety</option>
                <option>Food Business</option>
              </select>

              <ChevronDown className="absolute right-3 top-3 text-black" />
            </div>
          </div>

        </div>

        {/* Blog Grid (3 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">

                <div className="text-xs text-gray-400 mb-2">
                  {blog.date} • 👁 {blog.views}
                </div>

                <h3 className="font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h3>

                <Link
                  href={blog.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 gap-2 flex-wrap">

          <button
            onClick={() => setCurrentPage(1)}
            className="px-3 py-1 border rounded"
          >
            &lt;&lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-orange-500 text-white"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(totalPages)}
            className="px-3 py-1 border rounded"
          >
            &gt;&gt;
          </button>

        </div>

      </div>
    </section>
  );
}