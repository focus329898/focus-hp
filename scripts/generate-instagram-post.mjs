import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const topics = [
  "遮熱フィルムで夏の暑さ対策",
  "UVカットフィルムで家具・フローリングを守る",
  "プライバシーフィルムで外からの視線をカット",
  "防犯フィルムで窓の防犯対策",
  "断熱フィルムで冬の結露・寒さ対策",
  "店舗の窓をデザインフィルムでおしゃれに",
  "マンションの窓にガラスフィルムを施工",
  "飛散防止フィルムで安心・安全な窓に",
  "オフィスの窓にプライバシーフィルム",
  "ガラスフィルムの施工事例紹介",
  "フィルム施工前後の変化",
  "宮城県の暑い夏・寒い冬対策にフィルムが最適",
];

function pickTopic() {
  const day = new Date().getDay();
  const date = new Date().getDate();
  return topics[(day + date) % topics.length];
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

テーマ：${topic}

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

  // Resendでメール送信
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: "focusogata@gmail.com",
      subject: `📸 Instagram投稿文 ${today}「${topic}」`,
      text: `本日のInstagram投稿文です。\n\nテーマ：${topic}\n\n${content}\n\n---\nsendai_glass アカウントに投稿してください。`,
    }),
  });

  if (res.ok) {
    console.log("✅ Instagram投稿文をメールで送信しました");
  } else {
    const err = await res.json();
    console.error("❌ メール送信エラー:", err);
  }
}

main().catch(console.error);
