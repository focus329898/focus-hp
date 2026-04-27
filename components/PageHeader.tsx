import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHeader({ title, breadcrumbs }: Props) {
  return (
    <div className="bg-navy pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
          <Link href="/" className="hover:text-gold transition-colors">
            ホーム
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="text-gray-500">›</span>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-gold transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-200">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-noto-serif)" }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
