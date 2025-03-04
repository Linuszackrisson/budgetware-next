import { categoryIcons } from '@/app/config/icons';
import { CategoryCard } from '@/components/CategoryCard';

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Categories</h1>
        <p className="text-gray-400">Browse software by category</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(categoryIcons).map(([category, Icon]) => (
          <CategoryCard 
            key={category}
            category={category}
            Icon={Icon}
          />
        ))}
      </div>
    </div>
  );
}