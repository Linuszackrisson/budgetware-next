import { supabase } from '@/lib/supabase';
import type { SoftwareCategory } from '@/types/types';
import { categoryIcons } from '@/app/config/icons';
import { CategoryCard } from '@/components/CategoryCard';

// Hämta alla unika kategorier
async function getCategories() {
  const { data } = await supabase
    .from('software')
    .select('category');

  // Skapa en array med unika kategorier och antal
  const categories = data?.reduce((acc, curr) => {
    const category = curr.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories || {}).map(([name, count]) => ({
    name,
    count
  }));
}

export default async function CategoriesPage() {
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