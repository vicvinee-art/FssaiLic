"use client";

import { useState } from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Copy,
  Share2,
  ThumbsUp,
} from "lucide-react";

export default function BlogInteraction() {
  const [likes, setLikes] = useState(0);

  const blogUrl =
    typeof window !== "undefined" ? window.location.href : "https://fssailicense.in/blog";

  const copyLink = () => {
    navigator.clipboard.writeText(blogUrl);
    alert("Link copied!");
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Like Button */}
        <button
          onClick={() => setLikes(likes + 1)}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mb-6"
        >
          <ThumbsUp size={18} />
          Like ({likes})
        </button>

        {/* Share Section */}
        <div className="mb-10">
          <h3 className="font-semibold text-gray-800 mb-3">Share this blog</h3>

          <div className="flex items-center gap-4">

            {/* Copy Link */}
            <button
              onClick={copyLink}
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              <Copy size={18} />
            </button>

            {/* Share Generic */}
            <a
              href={`https://api.whatsapp.com/send?text=${blogUrl}`}
              target="_blank"
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              <Share2 size={18} />
            </a>

            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`}
              target="_blank"
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              <Facebook size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`}
              target="_blank"
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              <Linkedin size={18} />
            </a>

            {/* Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${blogUrl}`}
              target="_blank"
              className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600"
            >
              <Twitter size={18} />
            </a>

          </div>
        </div>

        {/* Comments Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Comments
          </h3>

          <p className="text-gray-500 text-sm mb-4">No comments yet.</p>

          {/* Comment Form */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Comment"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md"
            >
              Submit Comment
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}