import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 text-center bg-white overflow-hidden">

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-orange-500">
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          Start Your FSSAI Registration Today
        </h3>

        <p className="mt-4 text-lg text-gray-700">
          Quick, simple and hassle-free process with expert support.
        </p>

        <Link
          href="/apply-now"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}