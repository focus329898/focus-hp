"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <button
            className="w-full flex justify-between items-start px-6 py-5 text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-lg shrink-0">Q</span>
              <span className="font-bold text-navy text-lg leading-snug">{faq.q}</span>
            </div>
            <span className="text-gold text-2xl flex-shrink-0 leading-none">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 border-t border-gray-100">
              <div className="flex items-start gap-3 pt-4">
                <span className="text-navy font-bold text-lg shrink-0">A</span>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
