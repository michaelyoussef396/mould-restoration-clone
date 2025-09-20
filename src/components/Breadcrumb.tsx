import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav
      className="flex items-center space-x-2 text-sm text-muted-foreground"
      role="navigation"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && (
            <ChevronRight
              className="w-4 h-4 mx-2"
              aria-hidden="true"
            />
          )}
          {item.current ? (
            <span
              className="text-foreground font-medium"
              aria-current="page"
            >
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className="hover:text-highlight transition-colors"
              title={`Navigate to ${item.label}`}
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};