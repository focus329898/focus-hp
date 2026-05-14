import Groq from "groq-sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(__dirname, "../posts");

const topics = [
  { theme: "UVカットフィルムの効果と選び方", category: "お役立ち情報" },
  { theme: "仙台市でのプライバシーフィルム施工事例", category: "施工事例" },
  { theme: "夏の遮熱フィルムで電気代を節約する方法", category: "遮熱・省エネ" },
  { theme: "多賀城市での防犯フィルム施工事例", category: "防犯対策" },
  { theme: "マンションのガラスフィルム施工ガイド", category: "お役立ち情報" },
  { theme: "冬の結露を防ぐ断熱フィルムの選び方", category: "結露・断熱対策" },
  { theme: "店舗のガラスにデザインフィルムを施工するメリット", category: "店舗・オフィス" },
  { theme: "塩釜市でのガラスフィルム施工事例", category: "施工事例" },
  { theme: "子どもの安全を守る飛散防止フィルム", category: "安全対策" },
  { theme: "名取市でのUVカットフィルム施工事例", category: "施工事例" },
  { theme: "オフィスの窓ガラスフィルムで働きやすい環境づくり", category: "店舗・オフィス" },
  { theme: "ガラスフィルムのDIYと業者施工の違い", category: "お役立ち情報" },
  { theme: "宮城県の夏対策に最適な遮熱フィルムランキング", category: "遮熱・省エネ" },
  { theme: "白石市・角田市でのガラスフィルム施工事例", category: "施工事例" },
  { theme: "ガラスフィルムの耐用年数と交換タイミング", category: "お役立ち情報" },
  { theme: "プライバシーフィルムの種類と選び方", category: "お役立ち情報" },
  { theme: "気仙沼・石巻エリアのガラスフィルム施工", category: "施工事例" },
  { theme: "ガラスフィルム施工後のお手入れ方法", category: "お役立ち情報" },
  { theme: "防犯フィルムで空き巣対策する方法", category: "防犯対策" },
  { theme: "仙台市泉区での断熱フィルム施工事例", category: "施工事例" },
  { theme: "ガラスフィルムで紫外線から家具を守る", category: "お役立ち情報" },
  { theme: "登米市・栗原市でのガラスフィルム施工", category: "施工事例" },
  { theme: "賃貸物件でもできるガラスフィルム施工", category: "お役立ち情報" },
  { theme: "フロストフィルムでおしゃれな窓演出", category: "デザイン" },
  { theme: "大崎市・加美郡でのガラスフィルム施工事例", category: "施工事例" },
  { theme: "ガラスフィルムと二重窓どちらがお得？", category: "お役立ち情報" },
  { theme: "春先の花粉シーズンと窓ガラスのケア", category: "お役立ち情報" },
  { theme: "仙台市青葉区での施工事例紹介", category: "施工事例" },
  { theme: "ガラスフィルムで冬暖かく夏涼しい家に", category: "結露・断熱対策" },
  { theme: "宮城県の台風・強風対策に飛散防止フィルム", category: "安全対策" },
];

function getTodaySlug() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function pickTopic(existingSlugs) {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const index = dayOfYear % topics.length;
  return topics[index];
}

function toSlug(date, index) {
  return `auto-${date}-${index}`;
}

async function main() {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const existingSlugs = fs.readdirSync(postsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));

  const today = getTodaySlug();
  const slug = toSlug(today, "post");

  if (existingSlugs.includes(slug)) {
    console.log(`本日の記事は既に存在します: ${slug}`);
    return;
  }

  const topic = pickTopic(existingSlugs);
  console.log(`生成テーマ: ${topic.theme}`);

  const prompt = `宮城県仙台市のガラスフィルム施工専門店「仙台ガラスフィルム」のブログ記事を書いてください。

テーマ：${topic.theme}
カテゴリー：${topic.category}

以下の形式で出力してください（frontmatterを含む完全なMarkdown形式）：

---
title: "記事タイトル"
date: "${today}"
category: "${topic.category}"
excerpt: "記事の概要（80文字程度）"
---

## 見出し1

本文...

## 見出し2

本文...

条件：
- 文字数は800〜1200文字
- 宮城県・仙台市の地域情報を盛り込む
- 会社名は「仙台ガラスフィルム」
- SEOを意識したタイトルと内容
- 記事末尾に「無料見積りはこちら」のCTAを入れる
- frontmatterのみ出力し、コードブロックで囲まない`;

  const result = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2000,
  });
  const content = result.choices[0].message.content;

  const filePath = path.join(postsDir, `${slug}.md`);
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`記事を保存しました: ${filePath}`);
}

main().catch(console.error);
