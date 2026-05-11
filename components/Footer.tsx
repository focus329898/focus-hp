import Link from "next/link";

const navLinks = [
  { href: "/flow", label: "ご依頼の流れ・料金" },
  { href: "/works", label: "施工実績" },
  { href: "/area", label: "対応エリア" },
  { href: "/blog", label: "ブログ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p
              className="text-2xl font-bold text-gold mb-4"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              仙台ガラスフィルム
            </p>
            <address className="not-italic text-gray-300 text-base space-y-1">
              <p>〒985-0831</p>
              <p>宮城県多賀城市浮島字高原176-1</p>
              <p>アイリス高原B202</p>
              <p className="mt-3">
                <a href="tel:022-355-7620" className="hover:text-gold">
                  TEL: 022-355-7620
                </a>
              </p>
              <p>
                <a
                  href="mailto:focusogata@gmail.com"
                  className="hover:text-gold"
                >
                  focusogata@gmail.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <p className="font-bold text-lg mb-4 text-gold">サイトマップ</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-4 text-gold">対応エリア</p>
            <p className="text-gray-300 text-base leading-relaxed">
              宮城県全域対応<br />
              仙台市・多賀城市・塩釜市・名取市・多賀城市周辺
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-gold hover:bg-gold-light text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                無料見積りはこちら
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} 仙台ガラスフィルム All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
