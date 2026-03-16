"use client";
import React, { useState, useEffect } from "react";
import ConsultationModal from "../Components/contact";

export default function Page() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // open consultation popup automatically
  }, []);

  return (
    <div className="py-20 text-center">

      {/* Consultation Popup */}
      <ConsultationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Apply for FSSAI Services"
        buttonText="Submit"
        defaultService="FSSAI Registration"
      />

    </div>
  );
}