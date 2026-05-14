import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const topics = [
  { ja: "遮熱フィルムで夏の暑さ対策", en: "window heat film summer interior" },
  { ja: "UVカットフィルムで家具・フローリングを守る", en: "UV protection window sunlight interior" },
  { ja: "プライバシーフィルムで外からの視線をカット", en: "privacy window frosted glass interior" },
  { ja: "防犯フィルムで窓の防犯対策", en: "home security window glass" },
  { ja: "断熱フィルムで冬の結露・寒さ対策", en: "window condensation cold winter interior" },
  { ja: "店舗の窓をデザインフィルムでおしゃれに", en: "shop store window design modern" },
  { ja: "マンションの窓にガラスフィルムを施工", en: "apartment window glass modern living room" },
  { ja: "飛散防止フィルムで安心・安全な窓に", en: "safety glass window home" },
  { ja: "オフィスの窓にプライバシーフィルム", en: "office window privacy glass" },
  { ja: "ガラスフィルムの施工事例紹介", en: "window film installation house" },
  { ja: "フィルム施工前後の変化", en: "bright window interior sunlight room" },
  { ja: "宮城県の暑い夏・寒い冬対策にフィルムが最適", en: "window sunlight bright Japanese house" },
];

function pickTopic() {
  const day = new Date().getDay();
  const date = new Date().getDate();
  return topics[(day + date) % topics.length];
}

async function fetchPexelsImage(query) {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=square`, {
    headers: { Authorization: process.env.PEXELS_API_KEY },
  });
  const data = await res.json();
  if (data.photos && data.photos.length > 0) {
    return data.photos[0].src.large;
  }
  return null;
}

async function main() {
  const topic = pickTopic();
  const today = new Date().toLocaleDateString("ja-JP", { month: "long", day: "numeric", weekday: "short" });

  const result = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    max_tokens: 800,
    messages: [{
      role: "user",
      content: `宮城県仙台市のガラスフィルム施工専門店「仙台ガラスフィルム」のInstagram投稿文を作成してください。

テーマ：${topic.ja}

条件：
- 絵文字を効果的に使う
- 親しみやすい口調
- 住宅・店舗専門（車は扱っていない）
- 最後に「📞 022-355-7620」「🔗 プロフィールのリンクから無料見積り」を入れる
- ハッシュタグを15個以上（日本語・英語混在）
- 本文とハッシュタグを分けて出力

形式：
【投稿本文】
（本文）

【ハッシュタグ】
（ハッシュタグ）`,
    }],
  });

  const content = result.choices[0].message.content;
  const imageUrl = await fetchPexelsImage(topic.en);

  const htmlBody = `
<h2>📸 本日のInstagram投稿文</h2>
<p><strong>テーマ：${topic.ja}</strong></p>
<hr>
<pre style="font-family:sans-serif;white-space:pre-wrap;font-size:14px;">${content}</pre>
<hr>
${imageUrl ? `<h3>📷 参考画像</h3><img src="${imageUrl}" style="max-width:600px;width:100%;border-radius:8px;" alt="参考画像"><p style="font-size:12px;color:#999;">Photo by Pexels</p>` : ""}
<p style="color:#666;">sendai_glass アカウントに投稿してください。</p>
`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "focusogata@gmail.com",
      subject: `📸 Instagram投稿文 ${today}「${topic.ja}」`,
      html: htmlBody,
    }),
  });

  if (res.ok) {
    console.log("✅ Instagram投稿文（画像付き）をメールで送信しました");
  } else {
    const err = await res.json();
    console.error("❌ メール送信エラー:", err);
  }
}

main().catch(console.error);
