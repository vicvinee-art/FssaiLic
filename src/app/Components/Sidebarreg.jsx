import React from "react";
import Link from "next/link";
import {
  CheckCircle,
  ClipboardList,
  FileText,
  ListOrdered,
  Clock,
  IndianRupee,
  AlertCircle,
  CircleSlash2,
  RefreshCcw,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="hidden lg:block sticky top-24">
      <div className="bg-white shadow-xl rounded-2xl p-6">

        {/* Menu Section */}
        <div className="space-y-5 text-gray-700">
          <SidebarItem icon={<ClipboardList size={18} />} text="Eligibility for FSSAI Registration" />
          <SidebarItem icon={<ListOrdered size={18} />} text="Procedures for Obtaining FSSAI Registration" />
          <SidebarItem icon={<CheckCircle size={18} />} text="Advantages & Benefits of FSSAI Registration" />
          <SidebarItem icon={<FileText size={18} />} text="Documents Required For Registration" />
          <SidebarItem icon={<AlertCircle size={18} />} text="The Importance Of FSSAI Registration" />
          <SidebarItem icon={<IndianRupee size={18} />} text="FSSAI Registration Fee Structure"/>
          <SidebarItem icon={<CircleSlash2 size={18} />} text="Penalties Without an FSSAI Licence" />
          <SidebarItem icon={<Clock size={18} />} text="Timeline for FSSAI Registration" />
          <SidebarItem icon={<RefreshCcw size={18} />} text="FSSAI Registration Renewal" />

        </div>

        {/* Connected Services */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-orange-500 mb-4">
            Connected Services
          </h3>

          <div className="space-y-4 text-gray-700">
            <ServiceCard 
              title="FSSAI CENTRAL LICENSE" 
              link="/fssai-central" 
            />
            <ServiceCard 
              title="FSSAI STATE LICENSE" 
              link="/fssai-state" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-orange-600 transition">
    {icon}
    <span>{text}</span>
  </div>
);

const ServiceCard = ({ title, link }) => (
  <Link href={link}>
    <div className="flex items-center gap-3 cursor-pointer hover:text-orange-600 transition">
      {title}
    </div>
  </Link>
);

export default Sidebar;