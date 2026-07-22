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
            <a
              href="https://www.instagram.com/sendai_glass/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gray-300 hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm">@sendai_glass</span>
            </a>
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
