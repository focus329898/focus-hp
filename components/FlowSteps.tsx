const steps = [
  { num: 1, title: "お問い合わせ", desc: "お電話またはメールフォームからお気軽にご連絡ください。" },
  { num: 2, title: "現地調査", desc: "担当者がお伺いし、窓の状況を確認します。（無料）" },
  { num: 3, title: "お見積り", desc: "現地調査の結果をもとに詳細なお見積りをご提示します。（無料）" },
  { num: 4, title: "ご発注", desc: "お見積りにご同意いただけましたら、正式にご発注いただきます。" },
  { num: 5, title: "施工日確定", desc: "お客様のご都合に合わせて施工日をご調整します。" },
  { num: 6, title: "施工", desc: "プロの技術者が丁寧に施工いたします。" },
  { num: 7, title: "アフターフォロー", desc: "施工後も不具合があれば無償で対応いたします。" },
];

export default function FlowSteps() {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-5 items-start">
          <div className="flex-shrink-0 w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
            {step.num}
          </div>
          <div className="flex-1 pb-4 border-b border-gray-100">
            <p className="font-bold text-navy text-lg">{step.title}</p>
            <p className="text-gray-600 mt-1">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
