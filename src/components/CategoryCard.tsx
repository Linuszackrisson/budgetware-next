import { type ElementType } from 'react';

interface CategoryCardProps {
  category: string;
  Icon: ElementType;
}

export function CategoryCard({ category, Icon }: CategoryCardProps) {
  return (
    <a 
      href={`/category/${category.toLowerCase()}`}
      className="flex h-full p-6 bg-[#171717] rounded-xl border border-gray-500 hover:border-emerald-500/50 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
          <Icon className="w-6 h-6 text-emerald-500" />
        </div>
        <h3 className="text-lg font-medium text-white group-hover:text-emerald-400 transition-colors">
          {category}
        </h3>
      </div>
    </a>
  );
}