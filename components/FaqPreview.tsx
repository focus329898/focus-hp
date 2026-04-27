"use client";

import { useState } from "react";

const faqs = [
  {
    q: "見積もりや現地調査に費用はかかりますか？",
    a: "いいえ、現地調査もお見積りも完全無料です。お気軽にご依頼ください。",
  },
  {
    q: "施工にはどのくらいの時間がかかりますか？",
    a: "窓の大きさや枚数によりますが、一般的なご家庭の場合は半日〜1日で完了します。",
  },
  {
    q: "賃貸でも施工できますか？",
    a: "フィルムの種類によっては賃貸でも施工可能です。原状回復の観点からご相談ください。",
  },
];

export default function FaqPreview() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
          <button
            className="w-full flex justify-between items-center px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-bold text-navy pr-4">{faq.q}</span>
            <span className="text-gold text-2xl flex-shrink-0">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 border-t border-gray-100">
              <p className="pt-4">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
