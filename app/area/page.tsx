import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "対応エリア",
  description:
    "合同会社focusは宮城県全域のガラスフィルム施工に対応しています。仙台市・多賀城市・塩釜市・名取市などエリア外もご相談ください。",
};

const areas = [
  { city: "仙台市", note: "青葉区・宮城野区・若林区・太白区・泉区" },
  { city: "多賀城市", note: "本社所在地。最短対応可能" },
  { city: "塩釜市", note: "" },
  { city: "名取市", note: "" },
  { city: "岩沼市", note: "" },
  { city: "利府町", note: "" },
  { city: "七ケ浜町", note: "" },
  { city: "松島町", note: "" },
  { city: "大和町", note: "" },
  { city: "石巻市", note: "ご相談ください" },
  { city: "気仙沼市", note: "ご相談ください" },
];

export default function AreaPage() {
  return (
    <>
      <PageHeader
        title="対応エリア"
        breadcrumbs={[{ label: "対応エリア" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Service Area</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              宮城県全域対応
            </h2>
            <p className="mt-4 text-gray-600">
              多賀城市を拠点に、宮城県全域でガラスフィルム施工を承っております。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {areas.map((area, i) => (
              <div
                key={i}
                className="bg-cream rounded-xl p-5 border border-gray-100"
              >
                <p className="font-bold text-navy text-lg">{area.city}</p>
                {area.note && (
                  <p className="text-sm text-gray-500 mt-1">{area.note}</p>
                )}
              </div>
            ))}
          </div>

          <div className="bg-navy/5 border border-navy/20 rounded-2xl p-6 mb-12 text-center">
            <p className="font-bold text-navy text-xl mb-2">
              エリア外もお気軽にご相談ください
            </p>
            <p className="text-gray-600">
              上記以外のエリアも、出張費をご相談のうえ対応可能な場合があります。
              まずはお問い合わせください。
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.5!2d141.0084!3d38.2993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a28c2a4e2e2e2%3A0x0!2z5a6H6LOH5Z6L5biC5rWF5bO2!5e0!3m2!1sja!2sjp!4v1619000000000!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="合同会社focus 所在地マップ"
            />
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              無料見積りを依頼する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
