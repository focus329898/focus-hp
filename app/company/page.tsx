import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "合同会社focusの会社概要です。宮城県多賀城市を拠点にガラスフィルム施工を行っています。",
};

const companyInfo = [
  { label: "会社名", value: "合同会社focus" },
  { label: "代表者", value: "尾形　拓哉" },
  { label: "所在地", value: "〒985-0831 宮城県多賀城市浮島字高原176-1 アイリス高原B202" },
  { label: "電話番号", value: "022-355-7620" },
  { label: "メールアドレス", value: "focusogata@gmail.com" },
  {
    label: "事業内容",
    value:
      "ガラスフィルム施工（UVカット・遮熱・断熱・プライバシー・防犯・デザインフィルムなど）、シートサイン・ウィンドウサイン施工",
  },
  { label: "対応エリア", value: "宮城県全域（仙台市・多賀城市・塩釜市・名取市・多賀城市周辺）" },
  { label: "営業時間", value: "9:00〜18:00（年中無休、但し年末年始を除く）" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader title="会社概要" breadcrumbs={[{ label: "会社概要" }]} />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Company</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              会社概要
            </h2>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            {companyInfo.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row ${
                  i % 2 === 0 ? "bg-white" : "bg-cream"
                } border-b border-gray-100 last:border-0`}
              >
                <div className="sm:w-40 shrink-0 px-6 py-4 font-bold text-navy text-sm bg-opacity-50">
                  {item.label}
                </div>
                <div className="px-6 py-4 text-gray-700 flex-1">{item.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-cream rounded-2xl p-8">
            <h3
              className="text-2xl font-bold text-navy mb-4"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              代表者メッセージ
            </h3>
            <p className="text-gray-600 leading-relaxed">
              合同会社focusは、宮城県を拠点にガラスフィルムの施工専門店として事業を展開しています。
              「窓を変えることで、生活を豊かにする」をモットーに、お客様一人ひとりのご要望に寄り添った施工を心がけています。
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              現地調査からアフターフォローまで、丁寧な対応をお約束します。ガラスフィルムに関することは何でもお気軽にご相談ください。
            </p>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
