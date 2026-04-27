import Link from "next/link";

const services = [
  { title: "UVカット・飛散防止フィルム", desc: "紫外線を最大99%カット。ガラス破損時の飛散も防止します。" },
  { title: "強飛散防止フィルム", desc: "台風・地震などの災害に備えた強力飛散防止フィルムです。" },
  { title: "遮熱フィルム", desc: "夏の強い日差しを遮り、室内温度の上昇を抑えます。" },
  { title: "断熱フィルム", desc: "夏の暑さ・冬の寒さ両方に対応。省エネ効果も期待できます。" },
  { title: "日照調整フィルム", desc: "光の量を調節して、快適な室内環境をつくります。" },
  { title: "プライバシーフィルム", desc: "外からの視線を遮りながら、室内からは外が見えます。" },
  { title: "グラデーションフィルム", desc: "デザイン性が高く、自然な目隠し効果があります。" },
  { title: "デザインフィルム", desc: "店舗や住宅の窓をおしゃれに演出するデザインフィルムです。" },
  { title: "防虫フィルム", desc: "虫が嫌う波長の光を遮断し、虫の侵入を軽減します。" },
  { title: "抗菌フィルム", desc: "菌の繁殖を抑制する抗菌機能を持つフィルムです。" },
  { title: "防犯フィルム", desc: "割れにくく侵入に時間がかかるため強力な防犯対策になります。" },
  { title: "シートサイン・ウィンドウサイン", desc: "店舗やオフィスのサイン・装飾フィルム施工も承ります。" },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold font-medium mb-2">Services</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            サービス一覧
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow hover:border-gold border border-transparent"
            >
              <span className="block w-8 h-px bg-gold mb-3"></span>
              <h3 className="font-bold text-navy mb-2 text-lg leading-tight">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-10 py-4 rounded-full text-lg transition-colors"
          >
            無料見積りはこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
