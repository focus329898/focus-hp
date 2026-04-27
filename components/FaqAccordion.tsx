"use client";

import { useState } from "react";

const faqs = [
  {
    q: "見積もりや現地調査に費用はかかりますか？",
    a: "いいえ、現地調査もお見積りも完全無料です。お気軽にご依頼ください。",
  },
  {
    q: "施工にはどのくらいの時間がかかりますか？",
    a: "窓の大きさや枚数によりますが、一般的なご家庭の場合は半日〜1日で完了します。店舗・オフィスの場合は事前にご相談ください。",
  },
  {
    q: "賃貸でも施工できますか？",
    a: "フィルムの種類によっては賃貸でも施工可能です。原状回復が必要な場合は、剥がせるタイプのフィルムをご提案することも可能です。まずはご相談ください。",
  },
  {
    q: "施工後、フィルムはどのくらい持ちますか？",
    a: "製品や使用環境によって異なりますが、一般的には7〜15年程度が目安です。施工時にメーカー保証についてご説明します。",
  },
  {
    q: "施工後に気泡や剥がれが生じた場合はどうなりますか？",
    a: "施工後の初期不良（気泡・剥がれ）については無償で対応いたします。アフターフォローも万全ですのでご安心ください。",
  },
  {
    q: "フィルムの種類が多くて選べません。",
    a: "ご安心ください。現地調査の際にお客様のご要望をお聞きし、最適なフィルムをご提案します。複数の選択肢をご提示することもあります。",
  },
  {
    q: "冬でも施工できますか？",
    a: "はい、対応可能です。ただし、気温が低い場合は施工後の接着に時間がかかることがあります。詳しくはお問い合わせください。",
  },
  {
    q: "複層ガラス（ペアガラス）にも施工できますか？",
    a: "複層ガラスの場合、熱割れリスクがあるフィルムもあります。現地調査の際にガラスの種類を確認し、適切なフィルムをご提案します。",
  },
  {
    q: "網入りガラスにも施工できますか？",
    a: "網入りガラスへの施工も可能です。ただし、熱割れのリスクがある種類のフィルムがありますので、現地で確認してからご提案します。",
  },
  {
    q: "支払い方法を教えてください。",
    a: "現金・銀行振込に対応しています。詳細はお見積り時にご確認ください。",
  },
  {
    q: "フィルムを自分で剥がしたい場合はどうすればよいですか？",
    a: "フィルムの種類によっては自力での取り外しが可能です。ただし、接着力が強いタイプは専用の道具や薬品が必要な場合があります。剥がし作業のみのご依頼も承りますのでご相談ください。",
  },
  {
    q: "法人・店舗からのご依頼も対応できますか？",
    a: "はい、法人様・店舗様からのご依頼も大歓迎です。まとめてご依頼の場合は特別価格でご対応できる場合もありますのでご相談ください。",
  },
];

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
