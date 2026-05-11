"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  kana: string;
  email: string;
  phone: string;
  address: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h4 className="text-2xl font-bold text-navy mb-3">
          送信完了しました
        </h4>
        <p className="text-gray-600 leading-relaxed">
          お問い合わせありがとうございます。<br />
          内容を確認後、担当者よりご連絡いたします。<br />
          2営業日以内にご返信いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block font-bold text-navy mb-2">
          お名前 <span className="text-red-500 text-sm ml-1">必須</span>
        </label>
        <input
          type="text"
          {...register("name", { required: "お名前を入力してください" })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="山田 太郎"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-bold text-navy mb-2">ふりがな</label>
        <input
          type="text"
          {...register("kana")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="やまだ たろう"
        />
      </div>

      <div>
        <label className="block font-bold text-navy mb-2">
          メールアドレス <span className="text-red-500 text-sm ml-1">必須</span>
        </label>
        <input
          type="email"
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "正しいメールアドレスを入力してください",
            },
          })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-bold text-navy mb-2">電話番号</label>
        <input
          type="tel"
          {...register("phone")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="022-XXX-XXXX"
        />
      </div>

      <div>
        <label className="block font-bold text-navy mb-2">住所（施工場所）</label>
        <input
          type="text"
          {...register("address")}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          placeholder="宮城県仙台市青葉区..."
        />
      </div>

      <div>
        <label className="block font-bold text-navy mb-2">
          お問い合わせ内容 <span className="text-red-500 text-sm ml-1">必須</span>
        </label>
        <textarea
          {...register("message", { required: "お問い合わせ内容を入力してください" })}
          rows={6}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
          placeholder="施工場所・窓の枚数・ご希望のフィルムなど、お気軽にお書きください"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold hover:bg-gold-light disabled:opacity-50 text-white font-bold py-5 rounded-xl text-xl transition-colors"
      >
        {isSubmitting ? "送信中..." : "送信する"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        送信いただいた個人情報は、お問い合わせへの回答のみに使用します。
      </p>
    </form>
  );
}
