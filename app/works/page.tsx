import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "施工実績・お客様の声",
  description:
    "合同会社focusの施工実績とお客様の声をご紹介します。宮城県内の戸建て・マンション・店舗など幅広い施工事例があります。",
};

const works = [
  { area: "仙台市・戸建て", type: "遮熱フィルム", desc: "南向きリビングの大窓2枚に遮熱フィルムを施工。夏の暑さが大幅に軽減されました。" },
  { area: "多賀城市・マンション", type: "プライバシーフィルム", desc: "全室の窓にプライバシーフィルムを施工。カーテンなしで明るい生活が可能になりました。" },
  { area: "塩釜市・店舗", type: "デザインフィルム", desc: "ショーウィンドウにデザインフィルムを施工。店舗の雰囲気が大きく変わりました。" },
  { area: "名取市・オフィス", type: "UVカット＋飛散防止", desc: "オフィス全窓にUVカット＋飛散防止フィルムを施工。スタッフのUV対策にもなっています。" },
  { area: "仙台市・マンション", type: "断熱フィルム", desc: "北向き寝室の窓に断熱フィルムを施工。冬の結露が大幅に減りました。" },
  { area: "多賀城市・戸建て", type: "防犯フィルム", desc: "1階全窓に防犯フィルムを施工。防犯意識の高まりとともに安心感が増しました。" },
];

const testimonials = [
  {
    area: "仙台市・一戸建て",
    type: "遮熱フィルム",
    text: "南向きの大きな窓に遮熱フィルムを施工してもらいました。夏の暑さが大幅に軽減されて、エアコンの使用量も減りました。丁寧な作業で仕上がりも完璧です。",
    stars: 5,
  },
  {
    area: "多賀城市・マンション",
    type: "プライバシーフィルム",
    text: "プライバシーフィルムを施工してもらいました。外からの視線が気になっていたのですが、施工後はカーテンを開けて生活できるようになり、室内がとても明るくなりました。",
    stars: 5,
  },
  {
    area: "塩釜市・店舗",
    type: "デザインフィルム",
    text: "店舗の窓にデザインフィルムを施工してもらいました。お店の雰囲気がガラリと変わり、お客様からも好評をいただいています。",
    stars: 5,
  },
  {
    area: "名取市・オフィス",
    type: "UVカット",
    text: "オフィスの窓にUVカットフィルムを施工してもらいました。スタッフの日焼けや目の疲れが軽減されたと好評です。作業も迅速で助かりました。",
    stars: 5,
  },
  {
    area: "仙台市・マンション",
    type: "断熱フィルム",
    text: "結露がひどかった寝室の窓に断熱フィルムを施工してもらいました。今年の冬は結露がほとんどなく、快適に過ごせました。",
    stars: 5,
  },
];

export default function WorksPage() {
  return (
    <>
      <PageHeader
        title="施工実績・お客様の声"
        breadcrumbs={[{ label: "施工実績・お客様の声" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Works</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              施工事例
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((w, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-52 bg-gray-200">
                  <Image
                    src="/images/placeholder.jpg"
                    alt={`施工事例 ${w.area}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full">
                    {w.type}
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="font-bold text-navy text-lg mb-1">{w.area}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-medium mb-2">Testimonials</p>
            <h2
              className="text-3xl font-bold text-navy"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              お客様の声
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <span key={j} className="text-gold text-xl">★</span>
                  ))}
                </div>
                <p className="text-xs font-bold text-navy bg-cream inline-block px-3 py-1 rounded-full mb-3">
                  {t.type}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">「{t.text}」</p>
                <p className="text-sm text-gray-400 font-medium">{t.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            まずは無料でご相談ください
          </h2>
          <p className="text-gray-300 mb-8">
            現地調査・お見積りは完全無料です。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            無料見積りを依頼する
          </Link>
        </div>
      </section>
    </>
  );
}
