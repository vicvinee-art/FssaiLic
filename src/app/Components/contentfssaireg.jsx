import { Handshake, ShoppingCart, ShieldCheck, TrendingUp } from "lucide-react";
import { Users, BarChart3, Globe, Banknote, AlertTriangle } from "lucide-react";
import { FaCheckCircle, FaUtensils, FaStore, FaCalendarAlt } from "react-icons/fa";
import Contact from "./subpageconsultation";
import Link from "next/link";

export default function FssaiRegistration() {
  return (
    <section className="w-full bg-white py-14">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT CONTENT - 3/4 */}
          <div className="w-full lg:w-3/4">

            <div className="p-8 md:p-6">

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-10">
                FSSAI Registration
              </h1>

              {/* Intro */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Every petty Food Business Operator (FBO) shall register themselves
                with the Food Safety and Standards Authority of India (FSSAI) in order
                to start any food business or continue an existing one legally.
              </p>

              {/* Sections */}
              {[
                

{
  title: "Eligibility for FSSAI Registration",
  content: (
    <div className="grid md:grid-cols-4 gap-6 mt-6">

      {/* Card 1 */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-green-200 mb-4">
          <FaCheckCircle className="text-green-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          Small Food Businesses
        </h3>

        <p className="text-gray-600 text-sm">
          Food businesses with annual turnover up to ₹12 lakhs.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-purple-200 mb-4">
          <FaUtensils className="text-purple-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          Food Manufacturers
        </h3>

        <p className="text-gray-600 text-sm">
          Any person manufacturing or selling food articles.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-yellow-200 mb-4">
          <FaStore className="text-yellow-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          Retailers & Vendors
        </h3>

        <p className="text-gray-600 text-sm">
          Petty retailers, hawkers, vendors, or temporary stall holders.
        </p>

      </div>

      {/* Card 4 */}
      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
        
        <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-pink-200 mb-4">
          <FaCalendarAlt className="text-pink-600 text-2xl" />
        </div>

        <h3 className="font-semibold text-lg mb-2 text-gray-800">
          Event Food Distribution
        </h3>

        <p className="text-gray-600 text-sm">
          Individuals distributing food at social gatherings or events.
        </p>

      </div>

    </div>
  ),
},

               {
  title: "Procedures for Obtaining FSSAI Registration",
  content: (
    <div className="relative max-w-5xl mx-auto py-14">

      {/* Left Heading */}
      <div className="absolute left-0 top-1/3 text-gray-700 font-semibold text-lg hidden md:block">
        Certification <br /> Process
      </div>

      {/* Curved Path */}
      <svg
        className="absolute left-20 top-0 h-full"
        width="160"
        height="600"
        viewBox="0 0 160 600"
        fill="none"
      >
        <path
          d="M80 0 C10 80,150 120,80 200 S10 320,80 400 S150 520,80 600"
          stroke="#9CA3AF"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="transparent"
        />
      </svg>

      {/* Steps */}
      <div className="ml-44 space-y-12">

        {[
          "Apply through FoSCoS Portal",
          "Upload required documents",
          "Application review within 7 working days",
          "Department scrutiny",
          "Inspection (if required)",
          "Download certificate after approval",
          "Display certificate at business place",
        ].map((step, index) => {

          const colors = [
            "bg-red-500",
            "bg-orange-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-indigo-500",
            "bg-blue-500",
            "bg-purple-500",
          ];

          const bgColors = [
            "bg-red-100",
            "bg-orange-100",
            "bg-green-100",
            "bg-yellow-100",
            "bg-indigo-100",
            "bg-blue-100",
            "bg-purple-100",
          ];

          return (
            <div key={index} className="flex items-center gap-6">

              {/* Step Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${colors[index]} shadow`}
              >
                {index + 1}
              </div>

              {/* Step Bubble */}
              <div
                className={`px-6 py-4 rounded-full shadow-md ${bgColors[index]} hover:shadow-lg transition`}
              >
                <p className="text-gray-800 font-medium">{step}</p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  ),
},
                {
                  title: "Advantages & Benefits of FSSAI Registration",
                  content: (
                    <div className="mt-12">

                      <p className="text-gray-700 mb-10">
                        Having an FSSAI license provides multiple advantages and
                        benefits to food businesses. It not only ensures compliance
                        with government regulations but also helps build customer
                        trust and business growth opportunities.
                      </p>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                        {[
                          {
                            title: "Customer Trust",
                            description:
                              "Having an FSSAI license builds consumer confidence that your food products are safe and hygienic.",
                            color: "green",
                            icon: <Users size={28} />,
                          },
                          {
                            title: "Business Growth",
                            description:
                              "When customers trust your food quality, it leads to higher sales and faster business growth.",
                            color: "orange",
                            icon: <BarChart3 size={28} />,
                          },
                          {
                            title: "Online Business Expansion",
                            description:
                              "Marketplaces like Amazon, Flipkart, Zomato, and Swiggy require FSSAI registration to sell food products.",
                            color: "green",
                            icon: <Globe size={28} />,
                          },
                          {
                            title: "Investor Confidence",
                            description:
                              "FSSAI certification assures banks and investors that your business follows legal food safety regulations.",
                            color: "orange",
                            icon: <Banknote size={28} />,
                          },
                          {
                            title: "Quality Compliance",
                            description:
                              "Ensures your food business follows hygiene and safety standards set by regulatory authorities.",
                            color: "green",
                            icon: <ShieldCheck size={28} />,
                          },
                          {
                            title: "Enhances Brand Reputation",
                            description:
                              "Improves the goodwill and credibility of your food brand in the market.",
                            color: "orange",
                            icon: <Handshake size={28} />,
                          },
                          {
                            title: "Online Listing Eligibility",
                            description:
                              "Essential for listing your food products on major online food and ecommerce platforms.",
                            color: "green",
                            icon: <ShoppingCart size={28} />,
                          },
                          {
                            title: "Business Credibility",
                            description:
                              "Builds customer confidence and ensures compliance with food safety regulations.",
                            color: "orange",
                            icon: <TrendingUp size={28} />,
                          },
                          {
                            title: "Avoid Penalties",
                            description:
                              "Running a food business without FSSAI registration may lead to heavy penalties or shutdown.",
                            color: "green",
                            icon: <AlertTriangle size={28} />,
                          },
                        ].map((feature, index) => (
                          <div key={index} className="relative">

                            <div
                              className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full shadow-lg ${
                                feature.color === "green"
                                  ? "bg-green-600 text-white"
                                  : "bg-orange-600 text-white"
                              }`}
                            >
                              {feature.icon}
                            </div>

                            <div className="bg-white rounded-2xl shadow-md pt-12 pb-8 px-6 text-center border border-gray-100 hover:shadow-xl transition">

                              <h3
                                className={`text-lg font-semibold ${
                                  feature.color === "green"
                                    ? "text-green-700"
                                    : "text-orange-600"
                                }`}
                              >
                                {feature.title}
                              </h3>

                              <p className="text-gray-600 text-sm mt-4">
                                {feature.description}
                              </p>

                              <div
                                className={`w-10 h-1 mx-auto mt-6 rounded-full ${
                                  feature.color === "green"
                                    ? "bg-green-600"
                                    : "bg-orange-600"
                                }`}
                              ></div>

                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ),
                },
                {
               title: "Documents Required for FSSAI Registration",
content: (
  <div className="mt-10 flex flex-col items-center">

    <p className="text-gray-700 mb-12 text-center max-w-3xl px-4">
      The following documents may be required while applying for FSSAI
      Registration or License depending on the nature and scale of the
      food business.
    </p>

    {/* MOBILE VIEW */}
    <div className="grid grid-cols-1 gap-4 w-full md:hidden px-4">

      {[
        "Passport-sized photograph of the applicant",
        "KYC documents of the applicant (Email ID, Mobile No., PAN, Aadhaar, Voter ID, Bank Statement, etc.)",
        "Business address proof (Rent agreement, Electricity bill)",
        "Form B – duly completed and signed",
        "Food Safety Management Plan (required for manufacturers)",
        "List of food products or items to be dealt with",
        "Proof of business registration (Company / LLP / Shop & Establishment)",
        "Import Export Code (for importers and exporters)",
        "Layout plan of the processing unit (for manufacturers and processors)",
        "NOC from Municipality or Local Authority (if applicable)",
      ].map((doc, index) => {

        const colors = [
          "bg-red-500",
          "bg-orange-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-indigo-500",
          "bg-blue-500",
          "bg-purple-500",
          "bg-pink-500",
          "bg-emerald-500",
          "bg-amber-500"
        ];

        return (
          <div
            key={index}
            className={`${colors[index]} text-white p-4 rounded-xl shadow flex items-start gap-3`}
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold text-sm">
              {index + 1}
            </div>

            <p className="text-sm leading-snug">
              {doc}
            </p>
          </div>
        );
      })}

    </div>

    {/* DESKTOP CIRCLE INFOGRAPHIC */}
    <div className="relative hidden md:flex w-[780px] h-[780px] items-center justify-center">

      {/* Center Circle */}
      <div className="absolute w-36 h-36 rounded-full bg-white shadow-xl border-4 border-orange-500 flex items-center justify-center text-center z-10">
        <span className="text-orange-600 font-semibold text-sm leading-tight">
          FSSAI <br /> Documents
        </span>
      </div>

      {[
        "Passport-sized photograph of the applicant",
        "KYC documents of the applicant (Email ID, Mobile No., PAN, Aadhaar, Voter ID, Bank Statement, etc.)",
        "Business address proof (Rent agreement, Electricity bill)",
        "Form B – duly completed and signed",
        "Food Safety Management Plan (required for manufacturers)",
        "List of food products or items to be dealt with",
        "Proof of business registration (Company / LLP / Shop & Establishment)",
        "Import Export Code (for importers and exporters)",
        "Layout plan of the processing unit (for manufacturers and processors)",
        "NOC from Municipality or Local Authority (if applicable)",
      ].map((doc, index) => {

        const angle = (360 / 10) * index;

        const colors = [
          "bg-red-500",
          "bg-orange-500",
          "bg-green-500",
          "bg-yellow-500",
          "bg-indigo-500",
          "bg-blue-500",
          "bg-purple-500",
          "bg-pink-500",
          "bg-emerald-500",
          "bg-amber-500"
        ];

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center text-center"
            style={{
              transform: `rotate(${angle}deg) translate(300px) rotate(-${angle}deg)`
            }}
          >

            <div
              className={`w-44 h-28 ${colors[index]} text-white shadow-xl flex flex-col justify-center items-center p-3`}
              style={{
                borderRadius: "70% 70% 60% 60% / 80% 80% 40% 40%"
              }}
            >

              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-700 font-bold text-sm mb-2">
                {index + 1}
              </div>

              <p className="text-xs font-medium leading-snug px-2">
                {doc}
              </p>

            </div>

          </div>
        );
      })}
    </div>

  </div>
),
},
                {
  title: "The Importance Of FSSAI Registration",
  content: (
    <div className="space-y-6 mt-4">

      <p className="text-gray-700 leading-relaxed">
        Operating at a vast level and regulating all the food sectors across the
        country, the Food Safety and Standards Authority of India (FSSAI) ensures
        that food businesses maintain proper safety standards. Many food
        entrepreneurs often wonder why this license is necessary and why the
        government requires food businesses to obtain it before operating.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The authority has been created to monitor and regulate Food Business
        Operators (FBOs). Food safety is extremely important because consumers
        eat and drink from restaurants, cafes, hotels, and other establishments
        without knowing the exact quality of ingredients used or the environment
        in which the food was prepared. FSSAI registration ensures that food is
        prepared and served following strict safety standards.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {[
          {
            title: "Food Safety and Hygiene",
            desc: "FSSAI-certified food business operators strictly follow cleanliness, preparation, cooking, packaging, and serving standards.",
          },
          {
            title: "Government Approved Products",
            desc: "Only government-approved ingredients of proper quality are used for preparing food products.",
          },
          {
            title: "No Harmful Chemicals",
            desc: "FSSAI ensures that harmful substances such as artificial colours, toxins, or drugs are not used in food.",
          },
          {
            title: "Accurate Food Labelling",
            desc: "Food businesses must clearly display ingredients, manufacturing date, expiry date, and other information for full consumer transparency.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  ),
},
{
  title: "FSSAI Registration Fee Structure",
  content: (
    <div className="mt-10">

      {/* Pricing Layout */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition">

          <div className="w-16 h-16 mx-auto rounded-xl bg-pink-100 flex items-center justify-center mb-6">
            <span className="text-3xl">📄</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Basic Registration
          </h3>

          <p className="text-gray-500 mb-6">
            Service Type: <span className="font-semibold text-gray-700">New</span>
          </p>

          <div className="text-4xl font-bold text-pink-500 mb-4">
            ₹ 2,000
          </div>

          <p className="text-gray-600">
            Government Fees:{" "}
            <span className="text-green-600 font-semibold">₹ 100</span>
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center hover:shadow-2xl transition">

          <div className="w-16 h-16 mx-auto rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
            <span className="text-3xl">🔄</span>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Basic Registration
          </h3>

          <p className="text-gray-500 mb-6">
            Service Type: <span className="font-semibold text-gray-700">Renewal</span>
          </p>

          <div className="text-4xl font-bold text-indigo-600 mb-4">
            ₹ 1,000
          </div>

          <p className="text-gray-600">
            Government Fees:{" "}
            <span className="text-green-600 font-semibold">₹ 100</span>
          </p>

        </div>

      </div>

      {/* Simple Text instead of Card */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Fee Information
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Basic Registration requires a government fee of ₹100. 
          Service fees vary depending on whether the application 
          is for a new registration or renewal.
        </p>
      </div>

      {/* Contact Link */}
      <div className="text-center mt-12">
        <a
          href="/contact-us"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Contact Us
        </a>

        <p className="text-gray-700 mt-4">
          Contact us now and know more about the fee structure!
        </p>
      </div>

    </div>
  ),
},
{
  title: "Penalties Without an FSSAI Licence",
  content: (
    <div className="mt-6">

      <div className="grid md:grid-cols-2 gap-6">

        {[
          {
            title: "Operating Without License",
            desc: "Operating a food business without an FSSAI licence can attract a penalty of up to ₹5 lakhs and imprisonment of up to 6 months.",
          },
          {
            title: "False Information",
            desc: "Providing false or misleading information during the application process can lead to cancellation of the licence.",
          },
          {
            title: "Non-Compliance",
            desc: "Failure to comply with food safety and hygiene standards may result in penalties ranging from ₹1 lakh to ₹10 lakhs.",
          },
          {
            title: "Repeated Violations",
            desc: "Continuous violations or repeated non-compliance may lead to suspension or permanent cancellation of the licence.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-700 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  ),
},
{
  title: "Timeline for FSSAI Registration",
  content: (
    <div className="mt-6">

      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 shadow-md">

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Basic Registration
        </h3>

        <p className="text-gray-700 leading-relaxed">
          The basic registration of the FSSAI licence typically takes around 
          <span className="font-semibold text-green-700"> 2 to 3 working days</span>, 
          depending on the completeness of documents and the processing time of the concerned authority.
        </p>

      </div>

    </div>
  ),
},
{
  title: "FSSAI Registration Renewal",
  content: (
    <div className="space-y-10 mt-6">

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        FSSAI registration is not a one-time process. Every Food Business
        Operator (FBO) must renew the registration before its expiry to
        continue operating legally. Timely renewal helps avoid penalties
        and ensures uninterrupted business operations.
      </p>

      {/* Renewal Timeline */}
      <div>
        <h3 className="text-xl font-semibold text-green-700 mt-4 mb-6">
          Renewal Timeline
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Submit your renewal application at least 60 days before your registration expires.",
            "If you apply within 30 days after expiry, you will need to pay a penalty.",
            "If more than 30 days pass after expiry, a fresh FSSAI application must be submitted.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold mb-4">
                {index + 1}
              </div>

              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Renewal Process */}
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mt-4 mb-6">
          Renewal Process: How to Renew?
        </h3>

        <div className="space-y-4">

          {[
            "Log in to the FoSCoS portal using your credentials.",
            "Go to the renewal section.",
            "Verify and update your business details.",
            "Upload any newly required documents.",
            "Pay the applicable renewal fee.",
            "Submit the application for processing.",
          ].map((step, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-2xl p-5 shadow-md"
            >
              <div className="flex items-center gap-4">

                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-600 text-white font-semibold">
                  {index + 1}
                </div>

                <p className="text-gray-700">{step}</p>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Documents for Renewal */}
      <div>
        <h3 className="text-xl font-semibold text-green-700 mt-4 mb-6">
          Documents for Renewal
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Previous FSSAI registration certificate",
            "Self-declaration confirming continued compliance",
            "Annual returns from the previous year",
            "Updated business information",
            "Proof of payment for the renewal fee",
          ].map((doc, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold mb-4">
                {index + 1}
              </div>

              <p className="text-gray-700 text-sm">{doc}</p>

              <div className="w-10 h-1 bg-orange-600 rounded-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Renewal Actions */}
      <div>
        <h3 className="text-xl font-semibold text-orange-600 mt-4 mb-6">
          Post-Renewal Actions
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Update the display of your renewed FSSAI registration certificate at the business premises.",
            "Communicate the renewed license number to business partners.",
            "Update packaging and labelling with the new validity dates.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md"
            >
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  ),
},
              ].map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-700">{section.content}</div>
                </div>
              ))}

              {/* CTA */}
              <div className="mt-12 text-center">
                <Link
                          href="/apply-now"
                          className="inline-block mt-8 bg-orange-500 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
                        >
                          Apply for FSSAI Registration
                        </Link>
              </div>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          
          <div className="w-full lg:w-1/4 ">
            <Contact />
          </div>
          </div>

        
      </div>
    </section>
  );
}