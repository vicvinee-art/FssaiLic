"use client";

export default function DisclaimerBar() {
  return (
    <section className="w-full bg-gray-100 py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-600 italic text-sm leading-relaxed">
          <span className="text-orange-500 font-semibold not-italic">
            Disclaimer:
          </span>{" "}
          We are a private consultancy service provider and are not affiliated
          with, endorsed by, or part of the Food Safety and Standards Authority
          of India (FSSAI) or any government authority. Approval or grant of
          registration/licence is solely at the discretion of the concerned
          statutory authority. The above content is for general informational
          purposes only and does not constitute legal advice.
        </p>
      </div>
    </section>
  );
}