"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="ガラスフィルム施工の様子"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold font-medium tracking-widest mb-4 text-lg"
        >
          Glass Film Specialist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          宮城県でガラスフィルム施工なら<br />
          <span className="text-gold">仙台ガラスフィルムにお任せください</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed"
        >
          UVカット・遮熱・プライバシー・防犯まで<br className="hidden sm:block" />
          幅広いフィルム施工に対応。現地調査・見積もり無料。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold-light text-white font-bold px-10 py-5 rounded-full text-xl transition-colors shadow-lg"
          >
            無料見積りはこちら
          </Link>
          <a
            href="tel:022-355-7620"
            className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-10 py-5 rounded-full text-xl transition-colors"
          >
            022-355-7620
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 gap-3 mt-14 max-w-md mx-auto w-full"
        >
          {[
            "現地調査・完全無料",
            "お見積り・完全無料",
            "宮城県全域に対応",
            "施工後の保証あり",
          ].map((tag) => (
            <div key={tag} className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white whitespace-nowrap">
              <span className="text-gold font-bold">✓</span>
              <span>{tag}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
