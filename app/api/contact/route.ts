import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, kana, email, phone, address, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "お問い合わせフォーム <noreply@llc-focus.com>",
    to: "focusogata@gmail.com",
    replyTo: email,
    subject: `【仙台ガラスフィルム】お問い合わせ：${name} 様`,
    text: `お名前：${name}
ふりがな：${kana || "未入力"}
メールアドレス：${email}
電話番号：${phone || "未入力"}
住所（施工場所）：${address || "未入力"}

お問い合わせ内容：
${message}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
