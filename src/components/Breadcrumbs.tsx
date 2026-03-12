import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-xs md:text-sm text-olive/60  uppercase tracking-widest mb-8 z-10 relative flex-wrap">
      <Link href="/" className="hover:text-olive  transition-colors">
        Home
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-50" />
          {item.href ? (
            <Link href={item.href} className="hover:text-olive  transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-olive  font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
