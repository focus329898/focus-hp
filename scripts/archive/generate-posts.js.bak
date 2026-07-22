#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const POSTS_DIR = path.join(__dirname, "..", "posts");
if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });

const TODAY = "2026-04-28";

const areas = [
  { id: "sendai-aoba", name: "青葉区", full: "仙台市青葉区", features: "仙台市の中心部を擁し、官庁や大学、商業施設が集まるエリア。一番町・国分町の繁華街に高級マンションや戸建て住宅も多い" },
  { id: "sendai-miyagino", name: "宮城野区", full: "仙台市宮城野区", features: "仙台市東部。宮城野原や榴岡公園が有名。新幹線利用者も多く、住宅地と工場・倉庫エリアが混在" },
  { id: "sendai-wakabayashi", name: "若林区", full: "仙台市若林区", features: "仙台市南東部。卸町の商工業エリアと荒井の新興住宅地が広がる。地下鉄東西線沿いに住宅開発が進む" },
  { id: "sendai-taihaku", name: "太白区", full: "仙台市太白区", features: "仙台市南部。長町・富沢の大型商業施設が集まるエリア。ファミリー層に人気の住宅地が多い" },
  { id: "sendai-izumi", name: "泉区", full: "仙台市泉区", features: "仙台市北部。泉中央の商業エリアと七北田川沿いの自然豊かな住宅地。高台の日当たりが良い住宅地で遮熱フィルムの需要が高い" },
  { id: "tagajo", name: "多賀城市", full: "多賀城市", features: "仙台市隣接のベッドタウン。多賀城駅周辺の商業エリアと閑静な住宅地。合同会社focusの本拠地として施工実績が最も豊富" },
  { id: "shiogama", name: "塩竈市", full: "塩竈市", features: "塩竈神社で知られる歴史ある港町。マンションや戸建て住宅が密集。海に近く潮風対策の相談も多い" },
  { id: "natori", name: "名取市", full: "名取市", features: "仙台空港を擁し、イオンモール名取など大型商業施設と住宅地が混在。新興住宅地も増加中" },
  { id: "tomiya", name: "富谷市", full: "富谷市", features: "仙台市北部隣接の急成長新興住宅地。若いファミリー層が多くUVカット・防犯フィルムの需要が高まる" },
  { id: "iwanuma", name: "岩沼市", full: "岩沼市", features: "竹駒神社で知られる歴史ある街。落ち着いた戸建て住宅地でガラスフィルム施工の需要が着実に増加" },
  { id: "rifu", name: "利府町", full: "利府町", features: "三井アウトレットパーク仙台港北を擁する商業エリアと閑静な住宅地。仙台市へのアクセス良好なベッドタウン" },
  { id: "shichigahama", name: "七ヶ浜町", full: "七ヶ浜町", features: "太平洋に面した海岸沿いの住宅地。紫外線が強くUVカット・遮熱フィルムへの需要が特に高い" },
  { id: "matsushima", name: "松島町", full: "松島町", features: "日本三景・松島を擁する観光地。旅館・ホテル・飲食店も多く、業務用フィルム施工のご依頼も多い" },
];

const services = [
  { id: "glass-film", name: "ガラスフィルム施工", category: "地域情報",
    benefits: ["UVカット・遮熱・防犯など多機能を一度に対策できる", "ガラスを交換せず既存の窓に貼るだけで施工完了", "施工当日から効果を実感できる", "長期的なコスト削減につながる"] },
  { id: "heat-shield", name: "遮熱フィルム", category: "遮熱フィルム",
    benefits: ["室内温度の上昇を最大5〜10℃抑制", "エアコンの電気代を大幅に節約できる", "西日・南向きの強い日差しを効果的にカット", "透明タイプなら見た目を変えず施工可能"] },
  { id: "uv-cut", name: "UVカットフィルム", category: "UVカット",
    benefits: ["紫外線を最大99%カットして室内環境を守る", "家具・フローリング・畳の色褪せを防止", "お肌や目への紫外線ダメージを大幅軽減", "透明タイプは採光を損なわず施工できる"] },
  { id: "privacy", name: "プライバシーフィルム", category: "プライバシーフィルム",
    benefits: ["外からの視線を遮りプライバシーを確保", "カーテン不要で室内を明るく保てる", "内側からは外の景色が見える一方向透視タイプ", "道路・隣家からの視線が気になる場所に最適"] },
  { id: "crime-prevention", name: "防犯フィルム", category: "防犯フィルム",
    benefits: ["ガラスを割れにくくして侵入に時間をかけさせる", "ガラスが割れても破片が飛散せず安全", "空き巣・不法侵入の大きな抑止力になる", "警察が推奨する防犯対策の一つ"] },
  { id: "heat-insulation", name: "断熱フィルム", category: "断熱フィルム",
    benefits: ["窓からの冷気の侵入を軽減し室内を暖かく保つ", "結露の発生を大幅に抑制しカビ防止に", "暖房効率が上がり光熱費を節約できる", "夏の遮熱効果も兼ね備えた四季対応製品も"] },
  { id: "shatter-proof", name: "飛散防止フィルム", category: "飛散防止フィルム",
    benefits: ["地震・台風でガラスが割れても破片が飛散しない", "家族の怪我リスクを大幅に軽減できる", "防犯フィルムとしての効果も兼ね備える", "ほとんど透明で見た目を損なわない"] },
  { id: "design-film", name: "デザインフィルム", category: "デザインフィルム",
    benefits: ["店舗や会社のブランドイメージを窓で演出できる", "すりガラス調やスモーク調など多彩なデザイン", "プライバシー確保と空間デザインを両立", "サイン・ロゴなどのカスタムデザインにも対応"] },
];

const buildingTypes = [
  { id: "kodate", name: "戸建て", rooms: ["リビング・ダイニング", "寝室", "子ども部屋", "浴室・トイレ小窓", "玄関"] },
  { id: "mansion", name: "マンション", rooms: ["リビング・バルコニー窓", "洋室・寝室", "洗面・浴室", "廊下側小窓"] },
  { id: "store", name: "店舗・オフィス", rooms: ["ショーウィンドウ", "会議室", "エントランス", "事務スペース"] },
];

const concerns = [
  { id: "summer-heat", name: "夏の暑さ対策", solution: "遮熱フィルム", category: "夏の暑さ対策" },
  { id: "privacy-concern", name: "外からの視線対策", solution: "プライバシーフィルム", category: "プライバシー対策" },
  { id: "crime-prevention-concern", name: "防犯・空き巣対策", solution: "防犯フィルム", category: "防犯対策" },
  { id: "uv-concern", name: "UV・日焼け対策", solution: "UVカットフィルム", category: "UVカット対策" },
  { id: "condensation", name: "結露・冬の寒さ対策", solution: "断熱フィルム", category: "結露・断熱対策" },
];

const PRICE_TABLE = `## 料金の目安

ガラスフィルムの施工料金は、フィルムの種類とガラスの面積、形状によって変動します。以下は一般的な料金の目安です。

| フィルム種類 | 単価（1㎡あたり） | 標準的な窓1枚（約1.5㎡）の目安 |
|---|---|---|
| UVカットフィルム（透明） | 10,000円〜 | 15,000円〜 |
| 遮熱フィルム | 12,000円〜 | 18,000円〜 |
| プライバシーフィルム | 10,000円〜 | 15,000円〜 |
| 防犯フィルム（厚手タイプ） | 18,000円〜 | 27,000円〜 |
| 飛散防止フィルム | 10,000円〜 | 15,000円〜 |
| 断熱フィルム | 14,000円〜 | 21,000円〜 |
| デザインフィルム | 10,000円〜 | 15,000円〜 |

※出張費は宮城県内であれば無料です。複数枚同時施工で割引も承ります。正式なお見積りは現地調査の上ご提示します。`;

const CTA_FOOTER = (areaFull, serviceName) => `

---

## ${areaFull}でのご相談は合同会社focusへ

合同会社focusは多賀城市を拠点に、${areaFull}を含む宮城県全域で${serviceName}の施工を承っています。現地調査・お見積りは無料です。${areaFull}での施工実績も豊富にございますので、まずはお気軽にお問い合わせください。

- 📞 電話：022-355-7620
- ✉️ メール：お問い合わせフォームより24時間受付
- 🚗 対応エリア：${areaFull}を含む宮城県全域
`;

function clip(str, n) {
  return str.length > n ? str.slice(0, n - 1) + "…" : str;
}

function frontmatter({ title, date, category, excerpt }) {
  const safeExcerpt = clip(excerpt.replace(/"/g, "'"), 100);
  return `---
title: "${title}"
date: "${date}"
category: "${category}"
excerpt: "${safeExcerpt}"
---
`;
}

// パターン1: エリア × サービス（13 × 8 = 104記事）
function genAreaService(area, service) {
  const slug = `${service.id}-${area.id}`;
  const title = `${area.full}の${service.name}｜地域密着の合同会社focusが解説`;
  const excerpt = `${area.full}で${service.name}をお考えの方へ。地域特性と施工事例、料金の目安をfocusが解説します。`;

  const benefitsList = service.benefits.map((b, i) => `${i + 1}. **${b}**`).join("\n");

  const body = `${frontmatter({ title, date: TODAY, category: service.category, excerpt })}
## ${area.full}で${service.name}が選ばれる理由

${area.features}このエリアでは、${service.name}を導入されるお客様が年々増えています。なぜ${area.full}のお住まいや店舗で${service.name}が選ばれているのか、その理由を解説します。

${area.full}は宮城県内でも特徴的な気候・地理条件があり、窓まわりのお悩みもエリア独自のものがあります。合同会社focusは多賀城市を拠点に${area.full}を含む宮城県全域に出張施工を行っており、地域に合わせた最適なプランをご提案できます。

## ${service.name}の主なメリット

${service.name}を施工することで得られる主なメリットは以下の通りです。

${benefitsList}

これらのメリットは、${area.full}のような${area.name === "松島町" ? "観光地" : area.name.includes("区") ? "都市型エリア" : "ベッドタウン"}でも十分に発揮されます。

## ${area.full}での施工事例

合同会社focusでは、これまでに${area.full}で多数の${service.name}施工を承ってきました。戸建て住宅・マンション・店舗・事務所など、建物の用途や築年数に合わせて最適なフィルムをご提案しています。

たとえば${area.full}内の南向きリビングのお宅では、${service.name}の施工後に「室内環境が目に見えて変わった」「もっと早く相談すればよかった」とのお声を多数いただいています。${area.full}という土地柄に合わせた施工ノウハウは、地域密着の専門店ならではの強みです。

## 施工の流れ

1. **お問い合わせ** — 電話またはフォームから無料でご相談ください
2. **現地調査** — ${area.full}内であれば最短即日で訪問可能です
3. **お見積り** — 窓のサイズと枚数、選定フィルムから明確な見積りをご提示
4. **施工日決定** — お客様のご都合に合わせて日程を調整
5. **施工当日** — 1枚あたり30分〜1時間で施工完了。当日から効果を実感
6. **アフターフォロー** — 施工保証付きで安心

${PRICE_TABLE}

## よくあるご質問（FAQ）

**Q1. ${area.full}まで本当に出張してもらえますか？**
A. はい。合同会社focusは多賀城市拠点ですが、${area.full}を含む宮城県全域に無料で出張いたします。出張費はいただきません。

**Q2. ${service.name}の耐用年数はどれくらいですか？**
A. 一般的には10〜15年が目安です。屋内側施工の場合はさらに長持ちすることが多く、メーカー保証も付帯します。

**Q3. 賃貸でも${service.name}を施工できますか？**
A. 原状回復可能なフィルムも多数取り扱っています。${area.full}内の賃貸物件でもご相談ください。管理会社・大家様への確認のお手伝いもいたします。

**Q4. ${area.full}で施工できる時間帯は？**
A. 平日・土日祝問わず対応可能です。${area.full}でも夜間や早朝のご要望に応じて柔軟に調整いたします。

## まとめ

${area.full}で${service.name}をお考えなら、地域に詳しい合同会社focusにお任せください。${area.features.split("。")[0]}という${area.full}の特性を踏まえ、最適な${service.name}プランをご提案いたします。${CTA_FOOTER(area.full, service.name)}`;

  return { slug, body };
}

// パターン2: エリア × 建物タイプ（13 × 3 = 39記事）
function genAreaBuilding(area, bt) {
  const slug = `glass-film-${bt.id}-${area.id}`;
  const title = `${area.full}の${bt.name}向けガラスフィルム施工｜focusの提案`;
  const excerpt = `${area.full}の${bt.name}にガラスフィルムを施工するメリットと部屋別の選び方を解説します。`;

  const roomsList = bt.rooms.map((r) => `### ${r}におすすめのフィルム

${r}は${bt.name}の中でも生活時間が長く、紫外線や視線、温度変化の影響を受けやすい場所です。${area.full}の${bt.name}でも、${r}にガラスフィルムを施工されるお客様は非常に多くいらっしゃいます。用途に応じてUVカット・遮熱・プライバシー・防犯フィルムなどを使い分けることで、${r}の快適性が大きく向上します。`).join("\n\n");

  const body = `${frontmatter({ title, date: TODAY, category: "建物別ガイド", excerpt })}
## ${area.full}の${bt.name}にガラスフィルムを施工するメリット

${area.features}このエリアの${bt.name}は、立地や築年数によって窓まわりの課題が異なります。${area.full}の${bt.name}でガラスフィルムが選ばれている主な理由を解説します。

ガラスフィルムは、既存の窓ガラスに貼るだけで施工が完了します。${bt.name}でも工事を伴わず、原状回復も可能なため、${area.full}にお住まいのご家庭・テナントで多く採用されています。

## ${bt.name}でよくあるお悩み

${bt.name}にお住まいのお客様からは、以下のようなご相談を${area.full}でも多くいただきます。

- 夏場、${bt.name}の窓際の温度が高くて困る
- 道路や隣家からの視線が気になる
- 家具・床材の色褪せを防ぎたい
- 防犯対策として窓を強化したい
- 結露によるカビが気になる

これらは${bt.name}という建物特有のお悩みですが、適切なガラスフィルムを選定することで一気に解決できます。${area.full}の${bt.name}でも、すべて施工実績がございます。

## 部屋別フィルム選びのコツ

${roomsList}

## ${area.full}の${bt.name}での施工事例

${area.full}の${bt.name}での施工事例として、最近承ったケースをご紹介します。${bt.name}の南向きリビングに遮熱フィルム、寝室にUVカットフィルム、玄関や勝手口に防犯フィルムを組み合わせるパターンが人気です。${area.full}という地域特性に合わせた組み合わせをご提案できるのは、地域密着型のfocusならではです。

## 施工の流れ

1. お問い合わせ・現地調査の日程調整
2. ${area.full}まで無料で出張・採寸
3. ${bt.name}の構造に合わせた最適フィルムをご提案
4. お見積り提示・施工日決定
5. 当日施工（${bt.name}の規模により半日〜1日）
6. 施工保証書発行・アフターフォロー

${PRICE_TABLE}

## よくあるご質問（FAQ）

**Q1. ${bt.name}の${area.full}でも対応できますか？**
A. はい、${area.full}の${bt.name}は施工実績が豊富です。出張費は無料です。

**Q2. ${bt.name}全体に施工する場合、何日かかりますか？**
A. 一般的な${bt.name}であれば、半日〜1日で完了します。${area.full}内であれば日程調整も柔軟に対応可能です。

**Q3. ${bt.name}の管理規約に問題はないですか？**
A. ガラスフィルムは室内側施工のため、外観は変わりません。${area.full}の${bt.name}でも管理組合に問題なくご了承いただいているケースがほとんどです。

**Q4. 一部屋だけでも依頼できますか？**
A. はい、${area.full}の${bt.name}でも1窓からご依頼いただけます。お気軽にご相談ください。

## まとめ

${area.full}の${bt.name}でガラスフィルムをご検討なら、合同会社focusにお任せください。${bt.name}の構造や${area.full}の地域特性を踏まえた最適なご提案をお約束します。${CTA_FOOTER(area.full, "ガラスフィルム施工")}`;

  return { slug, body };
}

// パターン3: エリア × 悩み（13 × 5 = 65記事）
function genAreaConcern(area, concern) {
  const slug = `${concern.id}-${area.id}`;
  const title = `${area.full}で${concern.name}｜${concern.solution}による解決法`;
  const excerpt = `${area.full}で${concern.name}にお困りの方へ。${concern.solution}による解決方法と施工事例を紹介します。`;

  const body = `${frontmatter({ title, date: TODAY, category: concern.category, excerpt })}
## ${area.full}で${concern.name}にお困りではありませんか？

${area.features}このエリアにお住まいの方から、${concern.name}に関するご相談を多数いただいています。${area.full}という地域の特性上、${concern.name}は重要なテーマです。

${concern.name}は、適切な対策をしないと年々ストレスが大きくなる問題です。${area.full}でも、近隣の住宅事情や気候により、お困りの方が増えてきています。

## ${concern.name}が起きる原因

${concern.name}には主に以下のような原因があります。

1. 窓ガラス自体の機能不足
2. 立地条件（${area.name}の地理特性）
3. 建物の構造的な制約
4. ${area.full}特有の気候要因
5. 家具・カーテン等の補助対策の限界

${area.full}の住宅事情を踏まえると、特に窓ガラスの機能不足が${concern.name}の最大要因となっているケースが目立ちます。

## ${concern.solution}が${concern.name}に効果的な理由

${concern.name}には**${concern.solution}**が最も効果的です。${concern.solution}は、${concern.name}に対して以下のような効果を発揮します。

- ${concern.name}の根本原因である窓まわりの環境を改善
- 既存の窓ガラスに貼るだけで施工が完了する手軽さ
- ${area.full}のような${area.name === "松島町" ? "観光地" : "住宅地"}でも違和感なく導入できる
- 一度施工すれば10年以上効果が持続
- カーテン・ブラインドに比べてはるかに高い効果

特に${area.full}のような${area.features.split("。")[0]}という環境では、${concern.solution}の導入効果が顕著に表れます。

## ${area.full}での${concern.solution}施工事例

合同会社focusでは、${area.full}内で${concern.solution}による${concern.name}の施工を多数承ってきました。施工後にいただくお声で多いのは「もっと早く相談すればよかった」「${area.full}でこんなサービスがあると知らなかった」というご感想です。

${area.full}の住宅・店舗で${concern.solution}を導入されたお客様からは、${concern.name}の悩みが大幅に軽減したと高い評価をいただいています。

## 施工の流れと費用感

1. お問い合わせ（電話・フォーム）
2. ${area.full}まで無料出張・現地調査
3. ${concern.name}に最適な${concern.solution}をご提案
4. お見積り・ご契約
5. 施工日に合同会社focusの職人が伺います
6. ${concern.solution}の施工完了・施工保証書発行

${PRICE_TABLE}

## よくあるご質問（FAQ）

**Q1. ${concern.solution}で本当に${concern.name}は解決しますか？**
A. はい、${area.full}内でも多数の解決事例がございます。完全解消は難しい場合でも、体感で大幅に改善されることがほとんどです。

**Q2. ${area.full}の賃貸住宅でも${concern.solution}を貼れますか？**
A. 室内側施工で原状回復可能なフィルムが多く、賃貸でも問題ありません。${area.full}での賃貸物件施工実績もございます。

**Q3. 工事中、${area.full}の自宅にいる必要はありますか？**
A. 部屋への立ち入り許可が必要なため、ご在宅をお願いしています。${area.full}内であれば施工時間も短くお済みです。

**Q4. ${concern.solution}の効果はいつから実感できますか？**
A. 施工当日から${concern.name}の改善を実感いただけます。${area.full}の施工現場でも、その場で「変わった」とお声をいただくことが多いです。

## まとめ

${area.full}で${concern.name}にお悩みなら、${concern.solution}での対策が最も効果的です。合同会社focusは${area.full}まで無料で出張し、${concern.name}を解決する最適なプランをご提案いたします。${CTA_FOOTER(area.full, concern.solution)}`;

  return { slug, body };
}

// パターン4: サービス単体の深掘り（8 × 6 = 48記事）建物タイプ別 + その他
function genServiceDeep(service, suffix, suffixLabel, category) {
  const slug = `${service.id}-${suffix}`;
  const title = `${service.name}の${suffixLabel}｜focusが詳しく解説`;
  const excerpt = `${service.name}の${suffixLabel}について、宮城県の専門店focusが施工事例を交えて解説します。`;

  const body = `${frontmatter({ title, date: TODAY, category, excerpt })}
## ${service.name}とは

${service.name}は、窓ガラスに貼り付けることで多彩な機能を付加できる薄型フィルムです。本記事では、${service.name}の${suffixLabel}に焦点を当て、合同会社focusの施工現場での実例を交えてご紹介します。

${service.name}は宮城県内でも需要が伸び続けており、特に仙台市・多賀城市・名取市・富谷市などのエリアでお問い合わせをいただいています。

## ${service.name}の主な特徴

${service.name}には以下のような特徴があります。

${service.benefits.map((b, i) => `### ${i + 1}. ${b}

${service.name}の大きな魅力の一つです。実際に${service.name}を施工されたお客様からも、この点に関するご好評を多くいただきます。`).join("\n\n")}

## ${service.name}の${suffixLabel}

${suffixLabel}という観点で${service.name}を見てみると、いくつかのポイントがあります。

まず、${service.name}は施工後すぐに効果を発揮します。${suffixLabel}を考えるうえで、効果の即時性は非常に重要です。次に、${service.name}は10年以上の長期間にわたって効果が持続するため、初期費用に対する満足度が非常に高い対策と言えます。

さらに、${service.name}は窓のサイズや形状を選ばず、戸建て・マンション・店舗いずれにも対応可能です。${suffixLabel}の観点では、汎用性の高さも大きな強みとなります。

## 施工事例

宮城県内のお客様による${service.name}の施工事例を一部ご紹介します。

- 仙台市青葉区のマンション：南向きリビングに${service.name}を施工し、${service.benefits[0]}を実感
- 多賀城市の戸建て：寝室と子ども部屋に${service.name}を導入し、${service.benefits[1]}に満足
- 名取市の店舗：ショーウィンドウに${service.name}を施工し、${service.benefits[2]}を達成

${service.name}は、お客様の用途に応じて多種多様な使い方ができることがおわかりいただけるかと思います。

## 施工の流れ

1. お問い合わせ・現地調査の日程調整
2. 宮城県内であれば無料出張・現状確認
3. ${service.name}の最適な種類とグレードをご提案
4. お見積り・ご契約
5. ${service.name}の施工
6. 施工保証書発行・アフターフォロー

${PRICE_TABLE}

## よくあるご質問（FAQ）

**Q1. ${service.name}を貼るとガラスが見えにくくなりますか？**
A. 透明タイプを選べば見た目はほとんど変わりません。デザイン性を求める場合はすりガラス調などもお選びいただけます。

**Q2. ${service.name}の貼り替えは必要ですか？**
A. 一般的に10〜15年が目安です。屋内側施工の場合はさらに長持ちします。

**Q3. ${service.name}は自分で貼れますか？**
A. DIY向けの製品もありますが、気泡やシワが残ると効果が大きく落ちます。プロ施工をおすすめします。

**Q4. ${service.name}は何枚から施工依頼できますか？**
A. 1枚から承ります。お気軽にご相談ください。

## まとめ

${service.name}の${suffixLabel}について解説してきました。${service.name}は宮城県内でも需要が高まっている人気サービスです。合同会社focusでは、${service.name}の経験豊富な職人が高品質な施工をお約束します。${CTA_FOOTER("宮城県全域", service.name)}`;

  return { slug, body };
}

let written = 0;
let skipped = 0;

function writePost({ slug, body }) {
  if (!/^[a-z0-9-]+$/.test(slug)) {
    console.warn(`SKIP invalid slug: ${slug}`);
    skipped++;
    return;
  }
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  if (fs.existsSync(filepath)) {
    skipped++;
    return;
  }
  fs.writeFileSync(filepath, body, "utf-8");
  written++;
}

// 1. エリア × サービス
for (const area of areas) {
  for (const service of services) {
    writePost(genAreaService(area, service));
  }
}

// 2. エリア × 建物タイプ
for (const area of areas) {
  for (const bt of buildingTypes) {
    writePost(genAreaBuilding(area, bt));
  }
}

// 3. エリア × 悩み
for (const area of areas) {
  for (const concern of concerns) {
    writePost(genAreaConcern(area, concern));
  }
}

// 4. サービス深掘り
const deepSuffixes = [
  { id: "selection-guide", label: "選び方ガイド", category: "お役立ち情報" },
  { id: "construction-flow", label: "施工の流れと注意点", category: "お役立ち情報" },
  { id: "merit-demerit", label: "メリット・デメリット", category: "お役立ち情報" },
  { id: "kodate-guide", label: "戸建てでの活用法", category: "建物別ガイド" },
  { id: "mansion-guide", label: "マンションでの活用法", category: "建物別ガイド" },
  { id: "store-guide", label: "店舗・オフィスでの活用法", category: "建物別ガイド" },
];

for (const service of services) {
  for (const suffix of deepSuffixes) {
    writePost(genServiceDeep(service, suffix.id, suffix.label, suffix.category));
  }
}

console.log(`\n✓ Generated: ${written} posts`);
console.log(`  Skipped (existing/invalid): ${skipped}`);
console.log(`  Total in posts/: ${fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md")).length}`);
